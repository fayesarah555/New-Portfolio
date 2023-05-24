import './App.css';
import SideBar from './Components/SideBar/SideBar';
import About from './Components/About/About';
import TechStack from './Components/TechStack/TechStack';
import Projects from './Components/Projects/Projects';
import WorkExperience from './Components/WorkEperience/WorkExperience';
import Education from './Components/Education/Education';
import VeilleTech from './Components/VeilleTech/VeilleTech';
import AboutO from './Components/AboutO/AboutO';
import TechStack2 from './Components/TechStack2/TechStack2';
import Futur from './Components/Futur/Futur';
import Contact from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useState, createContext } from 'react';


export const ThemeContext = createContext(null);

function App() {

  const [theme,setTheme] = useState("light");

  const changeTheme = () => {
        setTheme((prev) =>(prev ==="light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme,changeTheme}}>
      <div  id={theme}>
      <SideBar changeTheme={changeTheme} theme={theme}/>
   <About/>
   <Education/>
   <AboutO/>
   <WorkExperience/>
   <Projects/>
   <TechStack/>
   <TechStack2/>
   <VeilleTech/>
   <Futur/>
   <Contact/>
      </div>

   
   <ScrollToTop smooth={true} top="20"  color="whitesmoke" height='20' width='20' style={{borderRadius:"90px",backgroundColor: "#38004c", height:"35px"}}/>
   </ThemeContext.Provider>
  );
}

export default App;
