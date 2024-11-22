import About from "./components/about/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";
import Projects from "./components/projects/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
