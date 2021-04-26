import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompleteChallenges.module.css";

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(challengesContext);

  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
