//Create a React app from scratch. (done)
//Show a single h1 that says "Good morning" if between midnight and 12PM. (done)
//or "Good Afternoon" if between 12PM and 6PM. (done)
//or "Good evening" if between 6PM and midnight. (done)
//Apply the "heading" style in the styles.css (done)
//Dynamically change the color of the h1 using inline css styles. (done)
//Morning = red, Afternoon = green, Night = blue. (done)

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();

let message = "Its me ya boi, Kongming ٩(＾◡＾)۶";
let dateHour = date.getHours();
let headerStyle = {
  color: "black"
};

if (dateHour >= 0 && dateHour < 12) {
  message = "Good Morning ／(=✪㉨✪=)＼";
  headerStyle.color = "red";
} else if (dateHour >= 12 && dateHour < 17) {
  message = "Good Afternoon (⌾⃝ ౪ ⌾⃝ ๑)⊃━";
  headerStyle.color = "green";
} else {
  message = "Good Evening (`°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥｀)";
  headerStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={headerStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
