import { useState } from "react";
import { css } from "@emotion/css";

const styles = {
  container: css({
    width: 80,
    height: 80,
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "black",
    userSelect: "none",
    fontSize: "2rem",
    fontWeight: "bold",
    ":hover": {
      color: "black",
      backgroundColor: "white",
    },
  }),
};

function Counter() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      {count}
    </div>
  );
}

export default Counter;
