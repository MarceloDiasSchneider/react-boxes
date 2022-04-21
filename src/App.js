import { useState } from "react";
import data from "./data";
import Box from "./components/Box";

function App(props) {
  const [squares, setSquares] = useState(data);

  const squareElements = squares.map((square) => (
    <Box on={square.on} key={square.id} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
