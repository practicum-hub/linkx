import type { AlgorithmsTopic, AlgorithmsUnit } from "@/types/algorithms";

export type GraphTopic = AlgorithmsTopic;
export type GraphUnit = AlgorithmsUnit;

export type TopicLayout = {
  topic: GraphTopic;
  index: number;
  topicLocked: boolean;
  graphWidth: number;
  graphHeight: number;
  headerTop: number;
  graphTop: number;
  graphLeft: number;
  unitMap: Map<string, GraphUnit>;
  edges: readonly (readonly [string, string])[];
};

export const PRACTICE_GRAPH = {
  NODE_W: 190,
  NODE_H: 96,
  H_GAP: 42,
  V_GAP: 88,
  PAD: 24,
  ARROW_GAP: 10,
  TOPIC_SIDE_PAD: 80,
  TOPIC_HEADER_H: 120,
  TOPIC_GAP: 88,
  MIN_SCALE: 0.55,
  MAX_SCALE: 1.9,
  ZOOM_IN_FACTOR: 1.12,
  ZOOM_OUT_FACTOR: 0.9,
} as const;

export type CameraState = {
  x: number;
  y: number;
  scale: number;
};

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function nodePosition(node: GraphUnit) {
  return {
    x: PRACTICE_GRAPH.PAD + node.lane * (PRACTICE_GRAPH.NODE_W + PRACTICE_GRAPH.H_GAP),
    y: PRACTICE_GRAPH.PAD + node.level * (PRACTICE_GRAPH.NODE_H + PRACTICE_GRAPH.V_GAP),
  };
}

export function edgePath(from: GraphUnit, to: GraphUnit) {
  const p1 = nodePosition(from);
  const p2 = nodePosition(to);

  const startX = p1.x + PRACTICE_GRAPH.NODE_W / 2;
  const startY = p1.y + PRACTICE_GRAPH.NODE_H;
  const endX = p2.x + PRACTICE_GRAPH.NODE_W / 2;
  const endY = p2.y - PRACTICE_GRAPH.ARROW_GAP;
  const c1Y = startY + 34;
  const c2Y = endY - 38;

  return `M ${startX} ${startY} C ${startX} ${c1Y}, ${endX} ${c2Y}, ${endX} ${endY}`;
}

export function buildLayouts(topics: GraphTopic[]) {
  const topicMeta = topics.map((topic, index) => {
    const prevTopic = index > 0 ? topics[index - 1] : null;
    const prevTopicCompleted = prevTopic
      ? prevTopic.units.every((unit) => prevTopic.completed.includes(unit.id))
      : true;
    const topicLocked = !prevTopicCompleted;

    const maxLevel = Math.max(...topic.units.map((unit) => unit.level));
    const maxLane = Math.max(...topic.units.map((unit) => unit.lane));
    const graphWidth =
      PRACTICE_GRAPH.PAD * 2 +
      (maxLane + 1) * PRACTICE_GRAPH.NODE_W +
      maxLane * PRACTICE_GRAPH.H_GAP;
    const graphHeight =
      PRACTICE_GRAPH.PAD * 2 +
      (maxLevel + 1) * PRACTICE_GRAPH.NODE_H +
      maxLevel * PRACTICE_GRAPH.V_GAP;

    return {
      topic,
      index,
      topicLocked,
      graphWidth,
      graphHeight,
      unitMap: new Map(topic.units.map((unit) => [unit.id, unit])),
      edges: topic.units.flatMap((unit) => unit.requires.map((requiredUnitId) => [requiredUnitId, unit.id] as const)),
    };
  });

  const maxGraphWidth = Math.max(...topicMeta.map((meta) => meta.graphWidth));
  const canvasWidth = maxGraphWidth + PRACTICE_GRAPH.TOPIC_SIDE_PAD * 2;

  let yCursor = PRACTICE_GRAPH.PAD;
  const layouts: TopicLayout[] = topicMeta.map((meta) => {
    const layout: TopicLayout = {
      topic: meta.topic,
      index: meta.index,
      topicLocked: meta.topicLocked,
      graphWidth: meta.graphWidth,
      graphHeight: meta.graphHeight,
      headerTop: yCursor,
      graphTop: yCursor + PRACTICE_GRAPH.TOPIC_HEADER_H,
      graphLeft: Math.round((canvasWidth - meta.graphWidth) / 2),
      unitMap: meta.unitMap,
      edges: meta.edges,
    };

    yCursor += PRACTICE_GRAPH.TOPIC_HEADER_H + meta.graphHeight + PRACTICE_GRAPH.TOPIC_GAP;
    return layout;
  });

  return { canvasWidth, canvasHeight: yCursor + PRACTICE_GRAPH.PAD, layouts };
}
