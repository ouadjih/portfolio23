import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error">
      <div className="title">404 : Page Not Found</div>
      <div>
        <p className="bullet">
          Sorry! We can't find the page you're looking for. Here's some ways to
          go that might help you:
          <br />
        </p>
        <p className="bullet">
         
          Start over from the Home page{" "}
          <Link className="here hvr-buzz" to="/">
            here
          </Link>
          .<br />
          We do our best to avoid broken links but we're not perfect. In case
          you find an error, please report it in this <Link  className="here hvr-buzz"to ="/Contact">page</Link>.
        </p>
      </div>
    </div>
  );
};

export default Error;
