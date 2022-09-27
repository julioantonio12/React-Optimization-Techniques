import React, { useCallback, useState } from "react";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowShowParagraph, setAllowShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowShowParagraph) {
      setShowParagraph((prevShowParagraphValue) => !prevShowParagraphValue);
    }
  }, [allowShowParagraph]);

  const allowShowParagraphHandler = () => {
    setAllowShowParagraph(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowShowParagraphHandler}> Allow toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle</Button>
    </div>
  );
}

export default App;
