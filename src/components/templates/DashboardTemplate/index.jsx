import styles from "./style.module.css";
import { Header } from "../../Header";

export const DashboardTemplate = ({ children }) => {
  return (
    <>
      <Header />

      <main className={styles.main_container}>
        <div className={styles.children_container}>{children}</div>
      </main>
    </>
  );
};
