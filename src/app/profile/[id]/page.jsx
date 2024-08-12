import React from "react";

const Myprofile = ({ params }) => {
  return (
    <div>
      <h1>page page my profile</h1>
      <h1>{params.id}</h1>
    </div>
  );
};

export default Myprofile;
