import React from "react";
import {FaEnvelopeOpenText} from "react-icons/fa"

export function Feedback(){

    return <div class="feedback">
<h1>
    Feedback
</h1>
<p>
    Please provide your <b>feedback</b>. 
</p>
<p>Your <b>feedback </b>is valuable for me.</p>
<p>It <b>helps</b> me to keep improving this site.</p>
<p>And make it more <b>better</b>.</p>
<h2>
    Thank you !
</h2>
<br/><br/>
<div class="feedback-btn">
<a href="https://docs.google.com/forms/d/e/1FAIpQLSd5Z4oEM4o7Nhl34VAwHGeo9xbt7Ow-fN6nzBtWAkc3RKmk7g/viewform?usp=sf_link" class="btn btn-primary"><FaEnvelopeOpenText style={{marginBottom:"0.4rem", marginRight:"0.2rem"}} fontSize="medium"/> feedback</a>
</div>
    </div>
}