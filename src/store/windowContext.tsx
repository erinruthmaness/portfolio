import React, { useState } from "react";
import useDragMove, { useDragMoveOutput } from "hooks/useDragMove";

import { types, props } from "models";

interface WindowCtx {
  overlay: {
    display: boolean;
    modalContent: props.ModalProps | null;
    hide: () => void;
    show: () => void;
    modal: (title: string | types.ReactChildren, content: types.ReactChildren) => void;
  };
  dragMove: useDragMoveOutput;
  minimize: {
    isMinimized: boolean;
    down: () => void;
    up: () => void;
  };
}

const windowContext = React.createContext<WindowCtx>({} as WindowCtx);
export default windowContext;

export const WindowCtxProvider = (props: any) => {
  //------overlay------
  const [overlayState, setOverlayState] = useState(false);
  const [overlayContent, setOverlayContent] = useState<props.ModalProps | null>(null);
  const hide = () => {
    if (overlayState) {
      setOverlayState(false);
    }
    if (overlayContent) {
      setOverlayContent(null);
    }
  };
  const show = () => {
    if (!overlayState) {
      setOverlayState(true);
    }
  };
  const modal = (title: string | types.ReactChildren, content: types.ReactChildren) => {
    setOverlayContent({ title, content });
    if (!overlayState) {
      show();
    }
  };
  //------minimize------
  const [isMinimized, setIsMinimized] = useState(false);
  const down = () => {
    setIsMinimized(true);
  };
  const up = () => {
    setIsMinimized(false);
  };
  //------dragMove------
  const dragMove = useDragMove();

  return (
    <windowContext.Provider
      value={{
        overlay: {
          display: overlayState,
          modalContent: overlayContent,
          hide,
          show,
          modal,
        },
        dragMove,
        minimize: {
          isMinimized,
          down,
          up,
        },
      }}>
      {props.children}
    </windowContext.Provider>
  );
};
