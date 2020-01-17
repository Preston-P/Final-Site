import React from "react";

const Coffee = ({ type, descr }) => {
  return (
    <div>
      <h1>{type}</h1>
      <h1>{descr}</h1>
    </div>
  );
};

export default Coffee;

/* The styling component for our state */
