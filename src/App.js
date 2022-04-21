import { useState } from "react";
import data from "./data";
import Box from "./components/Box";

function App(props) {
  const [squares, setSquares] = useState(data);

  const squareElements = squares.map((square) => (
    <Box square={square} key={square.id} toggle={() => toggle(square.id)} />
  ));

  function toggle(id) {
    setSquares((prevSquares) => {
      console.log(prevSquares);
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  return <main>{squareElements}</main>;
}

export default App;
