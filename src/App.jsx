import { Footer } from "./cmps/Footer";
import { Hero } from "./cmps/Hero";
import { NavBar } from "./cmps/NavBar";
import logo from '../src/assets/img/logo.png'
import hey from '../src/assets/img/Shortly.svg'

function App() {
  return (
    <div className="app">
      <h1>hey man</h1>
      <img src={logo} alt=""/>
      <img src={hey} alt=""/>
      <NavBar />
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
