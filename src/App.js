import { useState } from "react";
import "./App.css";
import TippyTooltip from "./tooltip/TippyTooltip";
import Tooltip from "./tooltip/Tooltip";

function App() {
  // State to control the visibility of the Tippy tooltip
  const [visible, setVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleTippy = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      {/* Four Tooltip components with different positions */}
      <Tooltip position={"right"} />
      <Tooltip position={"top"} />
      <Tooltip position={"left"} />
      <Tooltip position={"bottom"} />

      {/* TippyTooltip component with static visibility and light theme */}
      <TippyTooltip
        content={"This is tippy tooltip 1 on hover of this button"}
        placement={"top-end"}
        delay={200}
        title={"Tippy 1"}
        tippyCalled={false}
        theme={"light"}
      />

      {/* TippyTooltip component with dynamic visibility and material theme */}
      <TippyTooltip
        content={"This is tippy tooltip 2 on click of this button"}
        placement={"right"}
        delay={200}
        title={"Tippy 2"}
        visible={visible}
        toggleTippy={toggleTippy}
        tippyCalled={true}
        animation={"perspective"}
        theme={"material"}
      />
    </div>
  );
}

export default App;
