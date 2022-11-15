import { useState } from "react";
import MainMenu from "components/layout/MainMenu";

import win98logo from "assets/win98.svg";
import styles from "styles/layout.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.bg__footer}>
      {isMenuOpen && <MainMenu />}
      <button id="windows_start" className={styles.startButton} onClick={() => setIsMenuOpen((prev) => !prev)}>
        <img src={win98logo} alt="Windows 98 Logo" /> Start
      </button>
    </nav>
  );
};

export default Nav;
