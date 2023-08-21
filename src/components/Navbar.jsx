import React from "react";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import { Avatar } from "@mui/material";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

function Navbar(){






    return <nav class="navbar navbar-expand-lg NAVBAR" style={{position:"sticky",top:"1%",zIndex:"1"}}>
    <div class="container-fluid">
     
      <Link class="nav1 navbar-brand  navbarname" to="/" ><Avatar style={{backgroundColor:"rgb(0, 84, 84)",textEmphasisColor:"black"}}>NS</Avatar></Link>
      <button class="navbar-toggler nav1 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-right container-fluid">
       
<Link class = "nav-link nav1" to="/" ><HomeOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>Home</Link>
<Link class = "nav-link nav1" to="/fun" ><InsertEmoticonOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>Fun</Link>
<Link class = "nav-link nav1" to="/about" ><PortraitOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>About</Link>
<Link class = "nav-link nav1" to="/resume"><ArticleOutlinedIcon style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/>My CV</Link>
<Link class = "nav-link nav1" to="/feedback"><FeedbackOutlinedIcon style={{marginBottom:"0.2rem", marginRight:"0.2rem"}} fontSize="medium"/>Feedback</Link>

       
        </div>
      </div>
    </div>
  </nav>}
export default Navbar;