import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/themes/material.css";
import React, { useState } from "react";

// Functional component for a button with a Tippy tooltip
function TippyTooltip({
  content,       // Tooltip content
  placement,     // Tooltip placement (top, bottom, left, right)
  delay,         // Delay before showing/hiding tooltip
  title,         // Button text
  toggleTippy,   // Function to toggle the tooltip visibility
  visible,       // Tooltip visibility state
  tippyCalled,   // Boolean indicating if the toggleTippy function should be called on button click
  animation,     // Tooltip animation
  theme,         // Tooltip theme
}) {
  // State to manage button background color
  const [bg, setBg] = useState("dark");

  // Function to toggle the button background color and optionally toggle the tooltip
  const toggleBg = () => {
    setBg((state) => (state === "light" ? "dark" : "light"));
    // Call toggleTippy if tippyCalled is true
    tippyCalled && toggleTippy();
  };

  return (
    // Tippy component wrapping the button
    <Tippy
      theme={theme ? theme : null}  // Set the theme if provided
      content={content}             // Set the tooltip content
      placement={placement}         // Set the tooltip placement
      delay={delay}                 // Set the delay for showing/hiding tooltip
      visible={visible}             // Control tooltip visibility
      animation={animation}         // Set the tooltip animation
    >
      {/* Button that toggles background color on click */}
      <button onClick={toggleBg} className="tippy-button" bg={bg}>
        {title}
      </button>
    </Tippy>
  );
}

export default TippyTooltip;
