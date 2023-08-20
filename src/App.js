
import './App.css';
// import "./styles.css";
import {  Routes, Route } from 'react-router-dom';
import Header from './components/Home/Header';
import Particle from './components/Particle';
import Fun from "./components/Fun";
import Navbar from './components/Navbar';
// import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AboutMe from './components/About/AboutMe';
import  Resume  from './components/Resume';
import { AnimCursor } from './components/AnimCursor';



function App() {


  return <div className='background container-fluid'>
  <AnimCursor/>
  <Navbar/> 


  <Routes>
    <Route path="/" element = {<Header/>}/>
    <Route path="/fun" element = {<Fun/>}/>
    <Route path="/about" element = {<AboutMe/>}/>
    <Route path="/resume" element={<Resume/>}/>
    {/* <Route path="/contact" element = {<ContactMe/>}/> */}
    {/* <Route path="/" element = {<Header/>}/> */}

    
  </Routes>
{/* <ContactMe/> */}

  {/* <section id="header" class="container-fluid"> <Header/></section>
 <section id="section1" class='container-fluid'></section>
 <section id="fun" class='container-fluid'><Fun/></section>
 <section id="aboutme" class='container-fluid'><h1><AboutMe></AboutMe></h1></section>*/}
 <Footer/>
 <Particle/>
 
  </div>
}

export default App;




















// (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );