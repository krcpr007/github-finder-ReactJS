import React from "react";
import spiner from "./assets/spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img src={spiner} className="text-center mx-auto" alt="Laoding..." />
    </div>
  );
}

export default Spinner;
