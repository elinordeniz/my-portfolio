import {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {trackingID} from './data/tracking'
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import seo from './data/seo.json';

function App() {
const [darkMode, setDarkMode]=useState(false)
  useEffect(()=>{

    if(trackingID!==""){
      ReactGA.initialize(trackingID);
      ReactGA.send("pageview");
    }
  },[])

return (
  <>
  <Helmet>
  <title>{seo.title}</title>
				<meta name="description" content={seo.home.description} />
				<meta
					name="keywords"
					content={seo.home.keywords.join(", ")}
				/>
  </Helmet>
      <span className={(darkMode ? "dark" : null)}>
      <div className="min-h-screen scroll-smooth dark:bg-slate-600" >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
    </span>
    </>
  )
}

export default App;
