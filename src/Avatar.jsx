import React, { Fragment } from "react";
import image from "./img/react.jpeg";
import "./css/style.css";

export default function Avatar({ size = "s", type = "square" }) {
  return (
    <Fragment>
      <div className="card">
        <div className="image-container">
          <img className={`${size} ${type}`} src={image} alt="avatar" />
        </div>
      </div>
      <div className="textContent">
        <p>
          size <strong>{size}</strong>
        </p>
        <p>
          type <strong>{type}</strong>
        </p>
      </div>
    </Fragment>
  );
}
