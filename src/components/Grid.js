import React, { useState } from "react";
import "./Grid.css";
import Projects from "../Assets/data";
import Loader from "./Loader";

export const Grid = () => {
  const [filtredItems, setFiltredItems] = useState(Projects);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

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
        placeholder="Type here to search projects..."
      />
      {loading ? (
        <Loader />
      ) : (
        <div class="cardgrid">
          {filtredItems.map((p) => (
            <a href={p.link} target="_blank" rel="noreferrer">
              <div className="card">
                <img 
                  className="cardimg" 
                  src={p.src} 
                  alt="card" />
                <div className="card-info">
                  <div className="card-title">{p.title}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
