import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import { Avatar } from "@mui/material";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

function Navbar(){

const [isClicked, setClicked] = useState(false)

const handleClick=()=>{
  setClicked(!isClicked)
}



    return <nav class="navbar navbar-expand-lg NAVBAR" style={{position:"sticky",top:"1%",zIndex:"1"}}>
    <div class="container-fluid">
      {/* <a class="nav1 navbar-brand  navbarname" href="#header">NS</a> */}
      <Link class="nav1 navbar-brand  navbarname" to="/" ><Avatar style={{backgroundColor:"rgb(0, 84, 84)",textEmphasisColor:"black"}}>NS</Avatar></Link>
      <button class="navbar-toggler nav1 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-right container-fluid">
          {/* <a class="nav-link nav1" href="#section1">new</a>    aria-current="page" this is inside it   */}
<Link class = "nav-link nav1" to="/" ><HomeOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>Home</Link>
<Link class = "nav-link nav1" to="/fun" ><InsertEmoticonOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>Fun</Link>
<Link class = "nav-link nav1" to="/about" ><PortraitOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>About</Link>
<Link class = "nav-link nav1" to="/resume"><ArticleOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>Resume</Link>
<Link class = "nav-link nav1" to="https://docs.google.com/forms/d/e/1FAIpQLSd5Z4oEM4o7Nhl34VAwHGeo9xbt7Ow-fN6nzBtWAkc3RKmk7g/viewform?usp=sf_link"><FeedbackOutlinedIcon style={{marginBottom:"0.2rem", marginRight:"0.2rem"}} fontSize="medium"/>Feedback</Link>

          {/* <a class="nav-link nav1" href="#fun">Fun</a>
          <a class="nav-link nav1" href="#aboutme">About</a>
          
          <a class="nav-link nav1" href="#contact">Contact</a> */}
        </div>
      </div>
    </div>
  </nav>}
export default Navbar;