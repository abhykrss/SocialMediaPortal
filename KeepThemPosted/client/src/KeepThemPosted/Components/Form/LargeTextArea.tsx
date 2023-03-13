//Crucial Imports
import TextArea from "antd/es/input/TextArea";

export default function LargeTextArea() {
  return (
    <TextArea
      showCount
      maxLength={1500}
      style={{ height: 250, width: 700 }}
      placeholder="Start Typing.."
    />
  );
}
