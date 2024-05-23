import React from "react";
import "./tooltip.css";
function Tooltip({ position }) {
  return (
    <>
      <div className="tooltip-trigger">
        Trigger Tooltip to the {position}
        <div className={`tooltip tooltip-${position}`}>
          Tooltip Text with position {position}
        </div>
      </div>
    </>
  );
}

export default Tooltip;
