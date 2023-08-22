import React from "react";
import Typewriter from "typewriter-effect";

export function Type(){

    return <div>
        <Typewriter 
            
                options={{
        strings: [
          "Web Designer",         
          "Passionate Learner",
          "Cricket Enthusiast",
          "Eternal Optimist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
            }}
        />
    </div>
}