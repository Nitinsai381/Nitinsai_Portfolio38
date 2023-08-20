import "../style.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App">
      

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": false,
	            "opacity": 0.05
                // previously 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.5
	        },
	        "size": {
	            "value": 1
                // previously 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
        }
    }
    />
    </div>
  );
}

export default Particle



















// import React from "react";
// import Particles from "react-tsparticles";

// function Particles_bg(){
//     return <Particles
// 	id="tsparticles"
//     params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 60,
// 	            "density": {
// 	                "enable": true,
// 	                "value_area": 1500
// 	            }
// 	        },
// 	        "line_linked": {
// 	            "enable": true,
// 	            "opacity": 0.02
// 	        },
// 	        "move": {
// 	            "direction": "right",
// 	            "speed": 0.05
// 	        },
// 	        "size": {
// 	            "value": 1
// 	        },
// 	        "opacity": {
// 	            "anim": {
// 	                "enable": true,
// 	                "speed": 1,
// 	                "opacity_min": 0.05
// 	            }
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onclick": {
// 	                "enable": true,
// 	                "mode": "push"
// 	            }
// 	        },
// 	        "modes": {
// 	            "push": {
// 	                "particles_nb": 1
// 	            }
// 	        }
// 	    },
// 	    "retina_detect": true
// 	}} />
// }
// export default Particles_bg












{/* <Particles
id="tsparticles"
params={{
	"particles": {
		"number": {
			"value": 60,
			"density": {
				"enable": true,
				"value_area": 1500
			}
		},
		"line_linked": {
			"enable": true,
			"opacity": 0.02
		},
		"move": {
			"direction": "right",
			"speed": 0.05
		},
		"size": {
			"value": 1
		},
		"opacity": {
			"anim": {
				"enable": true,
				"speed": 1,
				"opacity_min": 0.05
			}
		}
	},
	"interactivity": {
		"events": {
			"onclick": {
				"enable": true,
				"mode": "push"
			}
		},
		"modes": {
			"push": {
				"particles_nb": 1
			}
		}
	},
	"retina_detect": true
}} /> */}