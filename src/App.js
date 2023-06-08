import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  

  return (
    <div class="bg-gradient-to-r from-purple-900 via-60% via-blue-800 to-sky-600 background-animate" >
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;