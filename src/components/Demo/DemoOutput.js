import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOUTPUT running")
  return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
}

export default DemoOutput;