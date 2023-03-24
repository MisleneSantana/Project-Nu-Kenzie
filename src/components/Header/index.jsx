import styles from "./style.module.css";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.img_container}>
          <img src={logo} alt="logo"></img>
        </div>
      </header>
    </>
  );
};
