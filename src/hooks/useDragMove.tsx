import React, { useState } from "react";

export interface dragCoordinates {
  x: number;
  y: number;
}

export interface useDragMoveOutput {
  isDragging: boolean;
  grab: () => void;
  drag: (e: React.PointerEvent) => void;
  drop: () => void;
  translate: dragCoordinates;
}

const useDragMove = () => {
  const [translate, setTranslate] = useState<dragCoordinates>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const grab = () => {
    setIsDragging(true);
  };
  const drag = (e: React.PointerEvent) => {
    if (isDragging) {
      const minMargin = 20;
      if (e.clientY > minMargin && e.clientX > minMargin /*&& e.clientX < e.view.innerWidth - minMargin*/) {
        setTranslate((prevState) => {
          return {
            x: prevState.x + e.movementX,
            y: prevState.y + e.movementY,
          };
        });
      } else {
        setTranslate({
          x: 0,
          y: 0,
        });
        drop();
      }
    }
  };
  const drop = () => {
    setIsDragging(false);
  };

  return {
    isDragging,
    grab,
    drag,
    drop,
    translate,
  };
};

export default useDragMove;
