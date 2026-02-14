import styles from "./rightSidebar.module.css";

type StatisticCard = {
  id: number;
  name: string;
  text: string;
};

const cardsMock: StatisticCard[] = [
  {
    id: 1,
    name: "Current Streak",
    text: "12 days",
  },
  {
    id: 2,
    name: "Problems Solved",
    text: "156",
  },
];

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Your statistics</h2>

      <ul className={styles.cards}>
        {cardsMock.map((card) => (
          <li key={card.id}>
            <h3 className={styles.name}>{card.name}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
