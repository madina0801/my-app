import React from "react";

function Heading() {
  let greeting;

  const date = new Date();
  const currentTime = date.getHours();

  const customStyle = {
    color: "green",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>;
}

export default Heading;