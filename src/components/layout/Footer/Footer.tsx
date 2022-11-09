import { useContext } from "react";
import win98logo from "assets/win98.svg";
import windowContext from "store/windowContext"
import styles from "./Footer.module.css";

const Footer = () => {
  const windowCtx = useContext(windowContext);
  return (
    <footer className={styles.bg__footer}>
      <button id="windows_start" className={styles.startButton}>
        <img src={win98logo} alt="Windows 98 Logo" /> Start
      </button>
    </footer>
  );
};

export default Footer;
