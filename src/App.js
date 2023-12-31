import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles 
// ..
AOS.init();
function App() {
  return (
    <div className="bg-black/90">
      <section>
        <Nav />
      </section>
      <section className="md:px-20 px-5  overflow-hidden  text-white">
        <Home />
      </section>
      <section className="md:px-20 px-5 overflow-hidden  text-white">
        <About />
      </section>
      <section className="md:px-20 px-10   overflow-hidden  text-white">
        <Skill />
      </section>
      <section className="px-20  overflow-hidden  text-white">
        <Features />
      </section>
      <section className="md:px-20 px-5  overflow-hidden  text-white">
        <Education />
      </section>
  
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
