import { Family } from "./cmps/Family";
import { Footer } from "./cmps/Footer";
import { Hero } from "./cmps/Hero";
import { Highlight } from "./cmps/Highlight";
import { Info } from "./cmps/Info";
import { NavBar } from "./cmps/NavBar";
import { Ready } from "./cmps/Ready";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Family />
      <Highlight />
      <Info />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
