import { useContext } from "react";
import windowContext from "store/windowContext";
import Modal from "components/common/Window/Modal";
import styles from "styles/window.module.css";

const Overlay = () => {
  const windowCtx = useContext(windowContext);

  const handleClick = () => {
    windowCtx.overlay.hide();
  };

  return (
    <div className={windowCtx.overlay.display ? styles.overlay : styles.overlay_hide}>
      {windowCtx.overlay.modalContent ? (
        <Modal dismiss={handleClick} title={windowCtx.overlay.modalContent.title}>
          {windowCtx.overlay.modalContent.content}
        </Modal>
      ) : null}
    </div>
  );
};

export default Overlay;
