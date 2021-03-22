import { Family } from "./cmps/Family";
import { Footer } from "./cmps/Footer";
import { Hero } from "./cmps/Hero";
import { Highlight } from "./cmps/Highlight";
import { Info } from "./cmps/Info";
import { Ready } from "./cmps/Ready";

function App() {
  return (
    <div className="app">
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
