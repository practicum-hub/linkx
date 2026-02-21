import { useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent as ReactWheelEvent } from "react";
import { clamp, PRACTICE_GRAPH, type CameraState } from "./roadmapGraph";

export function useRoadmapCamera() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ pointerId: number; clientX: number; clientY: number } | null>(null);
  const dragMovedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [camera, setCamera] = useState<CameraState>({ x: 80, y: 40, scale: 1 });

  const zoomAtPoint = (factor: number, viewportX: number, viewportY: number) => {
    setCamera((prev) => {
      const nextScale = clamp(prev.scale * factor, PRACTICE_GRAPH.MIN_SCALE, PRACTICE_GRAPH.MAX_SCALE);
      if (nextScale === prev.scale) {
        return prev;
      }

      const worldX = (viewportX - prev.x) / prev.scale;
      const worldY = (viewportY - prev.y) / prev.scale;

      return {
        scale: nextScale,
        x: viewportX - worldX * nextScale,
        y: viewportY - worldY * nextScale,
      };
    });
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();

    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    const viewportX = event.clientX - rect.left;
    const viewportY = event.clientY - rect.top;
    const factor = event.deltaY < 0 ? PRACTICE_GRAPH.ZOOM_IN_FACTOR : PRACTICE_GRAPH.ZOOM_OUT_FACTOR;
    zoomAtPoint(factor, viewportX, viewportY);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || (event.target as HTMLElement).closest("a, button")) {
      return;
    }

    event.preventDefault();
    window.getSelection()?.removeAllRanges();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      pointerId: event.pointerId,
      clientX: event.clientX,
      clientY: event.clientY,
    };
    dragMovedRef.current = false;
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const dx = event.clientX - drag.clientX;
    const dy = event.clientY - drag.clientY;
    if (Math.abs(dx) + Math.abs(dy) > 2) {
      dragMovedRef.current = true;
    }

    drag.clientX = event.clientX;
    drag.clientY = event.clientY;
    setCamera((prev) => ({ ...prev, x: prev.x + dx, y: prev.y + dy }));
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    setIsDragging(false);
  };

  const handleClickCapture = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragMovedRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
    dragMovedRef.current = false;
  };

  return {
    camera,
    isDragging,
    viewportRef,
    handleWheel,
    handlePointerDown,
    handlePointerMove,
    handlePointerEnd,
    handleClickCapture,
  };
}
