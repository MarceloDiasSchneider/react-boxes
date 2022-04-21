import { useState } from "react";

function Box(props) {
  const [on, setOn] = useState(props.on);
  const styles = {
    backgroundColor: on ? "#222222" : "#cccccc",
  };
  function toogleOn() {
    setOn((prevOn) => !prevOn);
  }
  return <div className="box" style={styles} onClick={toogleOn}></div>;
}

export default Box;
