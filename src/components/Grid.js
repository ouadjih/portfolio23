import React, { useState } from "react";
import "./Grid.css";
import Projects from "./data";
import Loader from "./Loader";

export const Grid = () => {
  const [filtredItems, setFiltredItems] = useState(Projects);
  const [loading, setLoading] = useState(true);
  setTimeout(()=>setLoading(false), 1000);
 
  function onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setFiltredItems(
      Projects.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }
  return (
    <div class="grid">
      <input
        class="search"
        onChange={onChange}
        placeholder="Type here to search..."
      />

      {
      loading?
       
       <Loader/>
      :
      <div class="cardgrid">
        {
        filtredItems.map((p) => (
          <div className="card">
            <img className="card-img" src={p.src} alt="card" />
            <div className="card-info">
              <div className="card-title">{p.title}</div>
            </div>
          </div>
        ))}
      </div>
}
    </div>
  );
            
};
