import React from "react";

import notfoundfImg from "../../assets/erro-404.svg";
import "./styles.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={notfoundfImg} alt="Not Found 404" />
    </div>
  );
}
