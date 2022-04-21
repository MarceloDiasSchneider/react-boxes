import { useState } from "react";
import data from "./data";

function Boxes() {
  const [squares, setSquares] = useState(data)

  const squareElements = squares.map(square => (
    <div className="box" key={square.id}></div>
  ))

  return (
    <main>
      {squareElements}
    </main>
  );
}

export default Boxes;
