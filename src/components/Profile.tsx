import { useContext } from "react";
import { challengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/59458404?v=4"
        alt="jose alisson"
      />
      <div>
        <strong>José Alisson</strong>

        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
