import React from "react";
import "../Style/background.css";

const BG = ({ holeRef, holePosition }) => {
  const getClipPathRule = () => {
    const radius = 148;
    const circumference = Math.PI * radius;
    const step = (Math.PI * 2) / circumference;
    const startStep = circumference * (5 / 8);

    let innerPath = [];
    for (let i = startStep; i < circumference + startStep; i++) {
      const angle = step * i;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      innerPath.push(`${holePosition.x + x}px ${holePosition.y + y}px`);
    }
    innerPath.push(innerPath[0]);

    return `polygon( evenodd,
        /* outer rect */
        0 0,       /* top - left */
        100% 0,    /* top - right */
        100% 100%, /* bottom - right */
        0% 100%,   /* bottom - left */
        0 0,       /* and top - left again */
        ${innerPath.join(",")}
      )`;
  };

  const holeStyle = {
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "530vh",
    top: 0,
    left: 0,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,

    clipPath: getClipPathRule(),
  };

  const holeFilterStyle = {
    top: holePosition.y - 150,
    left: holePosition.x - 150,
  };

  return (
    <div className="bg">
      <div className="hole" ref={holeRef} style={holeStyle}></div>
      <div style={holeFilterStyle} className="hole-fliters"></div>
    </div>
  );
};

export default BG;
