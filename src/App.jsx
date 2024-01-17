import React from "react";
import Clock from "./components/Clock";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <Clock city="Stockholm" timeZone="Europe/Stockholm" />
      <Timer initialSeconds={60} />
      <Timer initialSeconds={120} />
      <Timer initialSeconds={300} />
      <Timer initialSeconds={600} />
    </div>
  );
}

export default App;
