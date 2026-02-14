import { useRouter } from "next/navigation";
import { IUnit } from "@/core/interfaces";
import styles from "./unit.module.css";

type Props = {
  unit: IUnit;
};

export default function Unit({ unit }: Props) {
  const { name } = unit;

  const router = useRouter();

  const handleClick = () => {
    router.push("/lesson");
  };

  return (
    <li key={unit.id} className={styles.unit}>
      <button className={styles.btn} onClick={handleClick}>
        {name}
      </button>
    </li>
  );
}
