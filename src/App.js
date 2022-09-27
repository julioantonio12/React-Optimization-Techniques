import React, { useCallback, useState, useMemo } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowShowParagraph, setAllowShowParagraph] = useState(false);

  // console.log("APP RUNNING");

  // const toggleParagraphHandler = useCallback(() => {
  //   if (allowShowParagraph) {
  //     setShowParagraph((prevShowParagraphValue) => !prevShowParagraphValue);
  //   }
  // }, [allowShowParagraph]);

  // const allowShowParagraphHandler = () => {
  //   setAllowShowParagraph(true);
  // };

  // return (
  //   <div className="app">
  //     <h1>Hi there!</h1>
  //     <DemoOutput show={showParagraph} />
  //     <Button onClick={allowShowParagraphHandler}> Allow toggle</Button>
  //     <Button onClick={toggleParagraphHandler}>Toggle</Button>
  //   </div>
  // );

  const [listTitle, setListTitle] = useState("My list");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New title");
  }, []);

  const listItems = useMemo(() => [5, 3, 2, 20, 55, 34, 21], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={ listItems } />
      <Button onClick={changeTitleHandler}>Cambiar el título</Button>
    </div>
  );
}

export default App;
