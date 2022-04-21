function Box(props) {
  const styles = {
    backgroundColor: props.square.on ? "#222222" : "#cccccc",
  };

  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.toggle()}
    ></div>
  );
}

export default Box;
