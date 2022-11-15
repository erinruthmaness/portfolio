import { useContext } from "react";
import windowContext from "store/windowContext";
import TitleBar from "./TitleBar";
// import Overlay from "./Overlay";
import styles from "styles/window.module.css";

const Window = () => {
  const windowCtx = useContext(windowContext);

  return (
    <article
      className={`focusable ${styles.window}} ${windowCtx.minimize.isMinimized ? styles["window--minimized"] : ""}`}
      tabIndex={0}
      style={{
        transform: windowCtx.minimize.isMinimized
          ? "none"
          : `translateX(${windowCtx.dragMove.translate.x}px) translateY(${windowCtx.dragMove.translate.y}px)`,
      }}>
      {windowCtx.minimize.isMinimized ? null : (
        <>
          <header>
            {/* <Overlay /> */}
            <TitleBar />
            <nav className={styles.optionsBar}>
              {/* <OptionButtonWrapper buttonText={"Game"} /> */}
              {/* <OptionButtonWrapper buttonText={"Help"} /> */}
            </nav>
          </header>
          <div>contents</div>
        </>
      )}
    </article>
  );
};

export default Window;
