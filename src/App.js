
import './App.css';
// import "./styles.css";
import {  Routes, Route,Navigate } from 'react-router-dom';
import Header from './components/Home/Header';
import Particle from './components/Particle';
import Fun from "./components/MyWork";
import Navbar from './components/Navbar';
// import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import AboutMe from './components/About/AboutMe';
import  Resume  from './components/Resume';
import { AnimCursor } from './components/AnimCursor';
import { Feedback } from './components/Feedback';



function App() {


  return <div className='background container-fluid'>
  
  <Navbar/> 


  <Routes>
    <Route path="/" element = {<Header/>}/>
    <Route path="/fun" element = {<Fun/>}/>
    <Route path="/about" element = {<AboutMe/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
    
<Route path="*" element={<Navigate to="/"/>}/>
    
  </Routes>
  
 <Footer/>
 <Particle/>
 <AnimCursor/>
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