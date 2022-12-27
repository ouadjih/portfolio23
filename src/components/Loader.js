import React from "react";
import './Loader.css'
const Loader = () => {
  return (
    <div className="loader" role="status">
      <svg>
  	<path d="m 12.5,20 15,0 0,0 -15,0 z" class="led one"/>
  	<path d="m 32.5,20 15,0 0,0 -15,0 z" class="led two"/>
  	<path d="m 52.5,20 15,0 0,0 -15,0 z" class="led three"/>
  	<path d="m 72.5,20 15,0 0,0 -15,0 z" class="led four"/>
</svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;