import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import LandingPage from "./LandingPage";
import SplashCursor from "./components/SplashCursor.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <SplashCursor />
      <LandingPage />
    </>
  );
}

export default App;
