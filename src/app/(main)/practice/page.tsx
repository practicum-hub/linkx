import Link from "next/link";
import {
  FaCheck,
  FaCircleCheck,
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaShareNodes,
  FaSignsPost,
  FaXTwitter,
} from "react-icons/fa6";
import { algorithmsRoadmap } from "@/data/mocks/courses/algorithmsRoadmap";
import { getUnitLessons } from "@/lib/learn/lessons";
import styles from "./page.module.css";

type ChapterView = {
  id: string;
  order: number;
  title: string;
  summary: string;
  progress: number;
  status: "Locked" | "Available" | "Completed";
  href?: string;
  lessons: {
    id: string;
    title: string;
    xp: number;
    kind: "theory" | "practice";
  }[];
};

function buildChapterView() {
  const activeTopic = algorithmsRoadmap[0];
  const completedSet = new Set(activeTopic.completed);

  const chapters: ChapterView[] = activeTopic.units.map((unit, index) => {
    const completed = completedSet.has(unit.id);
    const unlockedByDeps = unit.requires.every((requiredId) => completedSet.has(requiredId));
    const available = !completed && unlockedByDeps;

    const unitLessons = getUnitLessons(unit);
    const lessons = unitLessons.map((exercise) => ({
      id: exercise.id,
      title: exercise.title,
      xp: exercise.type === "practice" ? 100 : 50,
      kind: exercise.type,
    }));

    return {
      id: unit.id,
      order: index + 1,
      title: unit.title,
      summary:
        unitLessons[0]?.type === "theory"
          ? unitLessons[0].theory.intro
          : unitLessons[0]?.practice.task ?? "",
      progress: completed ? 100 : available ? 66 : 0,
      status: completed ? "Completed" : available ? "Available" : "Locked",
      href: available || completed ? `/learn/${activeTopic.id}/${unit.id}/1` : undefined,
      lessons,
    };
  });

  return { activeTopic, chapters };
}

export default function Practice() {
  const { activeTopic, chapters } = buildChapterView();

  const totalUnits = algorithmsRoadmap.reduce((sum, topic) => sum + topic.units.length, 0);
  const totalExercises = algorithmsRoadmap.reduce(
    (sum, topic) => sum + topic.units.reduce((inner, unit) => inner + getUnitLessons(unit).length, 0),
    0,
  );
  const completedUnits = algorithmsRoadmap.reduce((sum, topic) => sum + topic.completed.length, 0);
  const overallProgress = Math.round((completedUnits / totalUnits) * 100);
  const estimatedHours = Math.max(1, Math.round(totalExercises * 0.2));
  const firstActionChapter =
    chapters.find((chapter) => chapter.status === "Available") ??
    chapters.find((chapter) => chapter.status === "Completed");

  return (
    <div className={styles.practicePage}>
      <div className={styles.shell}>
        <section className={styles.hero}>
          <p className={styles.heroLabel}>Interactive Course</p>
          <h1 className={styles.heroTitle}>Algorithms Practice Roadmap</h1>
          <div className={styles.heroMeta}>
            <span>Updated: March 2026</span>
          </div>

          <div className={styles.heroActions}>
            {firstActionChapter?.href ? (
              <Link href={firstActionChapter.href} className={styles.primaryAction}>
                Continue
              </Link>
            ) : (
              <button type="button" className={styles.primaryAction} disabled>
                Continue
              </button>
            )}
            <button type="button" className={styles.secondaryAction}>
              Bookmark
            </button>
            <button type="button" className={styles.iconAction} aria-label="More options">
              ...
            </button>
          </div>

          <div className={styles.statRow}>
            <span className={styles.statChip}>{estimatedHours} hr</span>
            <span className={styles.statChip}>{totalExercises} lessons</span>
            <span className={styles.statChip}>{totalUnits} chapters</span>
            <span className={styles.statChip}>{overallProgress}% complete</span>
          </div>
        </section>

        <div className={styles.contentLayout}>
          <section className={styles.mainColumn}>
            <article className={styles.descriptionCard}>
              <h3>Description</h3>
              <input id="practice-description-toggle" type="checkbox" className={styles.descriptionToggle} />
              <div className={styles.descriptionTextWrap}>
                <p>
                  {activeTopic.desc} This practice track combines short theory steps with coding
                  drills so you can apply complexity analysis, data structures, and algorithmic
                  patterns in real tasks. You will progressively move from simple loop-based
                  problems to structured tasks that require decomposition, edge-case handling, and
                  asymptotic tradeoff decisions. By the end, you should be comfortable reading
                  unfamiliar problem statements, selecting an approach, validating correctness, and
                  writing clean TypeScript solutions under realistic constraints.
                </p>
              </div>
              <label htmlFor="practice-description-toggle" className={styles.readMoreBtn} />
            </article>

            <section className={styles.chapterList}>
              {chapters.map((chapter) => (
                <article className={styles.chapterCard} key={chapter.id}>
                  <div className={styles.chapterHead}>
                    <div className={styles.chapterHeadLeft}>
                      <span className={styles.chapterIndex}>{chapter.order}</span>
                      <h3>{chapter.title}</h3>
                      <span className={styles.chapterStatus}>{chapter.status}</span>
                    </div>

                    <div className={styles.chapterProgressWrap}>
                      <div className={styles.chapterProgressBar}>
                        <span style={{ width: `${chapter.progress}%` }} />
                      </div>
                      <strong>{chapter.progress}%</strong>
                    </div>
                  </div>

                  <p className={styles.chapterSummary}>{chapter.summary}</p>

                  <input
                    id={`chapter-details-${chapter.id}`}
                    type="checkbox"
                    className={styles.chapterDetailsToggle}
                  />

                  <div className={styles.chapterFooter}>
                    <label htmlFor={`chapter-details-${chapter.id}`} className={styles.chapterDetailsBtn} />
                    {chapter.href ? (
                      <Link href={chapter.href} className={styles.chapterAction}>
                        Continue Chapter
                      </Link>
                    ) : (
                      <span className={styles.chapterLockedLabel}>Finish previous chapters to unlock</span>
                    )}
                  </div>

                  <ul className={styles.lessonList}>
                    {chapter.lessons.map((lesson, lessonIndex) => {
                      const completedLessons = Math.round((chapter.progress / 100) * chapter.lessons.length);
                      const isDone = lessonIndex < completedLessons;
                      const lessonHref = `/learn/${activeTopic.id}/${chapter.id}/${lessonIndex + 1}`;

                      return (
                        <li key={lesson.id}>
                          <Link href={lessonHref} className={styles.lessonRowLink}>
                            <span className={styles.lessonIcon} data-kind={lesson.kind} aria-hidden="true" />
                            <span className={styles.lessonTitle}>{lesson.title}</span>
                            <span className={styles.lessonMeta}>
                              {isDone ? <span className={styles.lessonCheck} aria-hidden="true" /> : null}
                              <span className={styles.lessonXp}>{lesson.xp} XP</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </section>
          </section>

          <aside className={styles.sideColumn}>
            <section className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>
                <FaShareNodes aria-hidden="true" />
                <span>Share</span>
              </h3>
              <button type="button" className={styles.linkedInBtn}>
                <FaLinkedin aria-hidden="true" />
                Share on LinkedIn
              </button>
              <div className={styles.shareRow}>
                <button type="button" className={styles.sideShareBtn}>
                  <FaLink aria-hidden="true" />
                </button>
                <button type="button" className={`${styles.sideShareBtn} ${styles.sideShareBtnPrimary}`}>
                  <FaFacebook aria-hidden="true" />
                </button>
                <button type="button" className={`${styles.sideShareBtn} ${styles.sideShareBtnDark}`}>
                  <FaXTwitter aria-hidden="true" />
                </button>
              </div>
            </section>

            <section className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>
                <FaCircleCheck aria-hidden="true" />
                <span>Prerequisites</span>
              </h3>
              <p className={styles.prerequisiteRow}>
                <FaCheck aria-hidden="true" />
                <span>There are no prerequisites</span>
              </p>
            </section>

            <section className={styles.sideCard}>
              <h3 className={styles.sideCardTitle}>
                <FaSignsPost aria-hidden="true" />
                <span>Part of these tracks</span>
              </h3>
              <ul className={styles.trackList}>
                <li>
                  <Link href="/practice" className={styles.trackLink}>
                    AWS Cloud Practitioner (CLF-C02)
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className={styles.trackLink}>
                    Data Engineer
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className={styles.trackLink}>
                    Microsoft Azure Fundamentals (AZ-900)
                  </Link>
                </li>
              </ul>
              <button type="button" className={styles.showMoreTracksBtn}>
                <span>Show More</span>
                <span className={styles.showMoreTracksIcon} aria-hidden="true" />
              </button>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
