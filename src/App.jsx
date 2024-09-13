import styles from "./App.module.css";
import GrowingShape from './components/GrowingShape/GrowingShape';
import Skills from './components/Skills/Skills'; 
// import { Skills } from "./components/Skills/Skills";
import About  from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import  Projects  from "./components/Projects/Projects";
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <GrowingShape />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Resume />
      <Footer />
      
     
    </div>
  );
}

export default App;
