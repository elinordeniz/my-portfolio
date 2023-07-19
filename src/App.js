import { useState, useEffect } from "react";
import { trackingID } from "./data/tracking";
import ReactGA from "react-ga4";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (trackingID !== "") {
      console.log(trackingID);
      ReactGA.initialize(trackingID);
      ReactGA.send("pageview");
    }
  }, []);

  return (
    <span className={darkMode ? "dark" : null}>
      <Home setDarkMode={setDarkMode} />
    </span>
  );
}

export default App;
