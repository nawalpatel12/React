import React from "react";

const Card = ( props ) => {
  return (
    <div className="card">
      <h2>Dit University</h2>

      <img src={props.img} alt="img" />
      <h1>{props.user}</h1>

      <div className="detail">
        <div>Program:-B.Tech CSE</div>
        <div>Roll No:-220102876</div>
        <div>Address:-Mussorie Road, Makkawala</div>
      </div>

      <button>View Profile</button>
    </div>
  );
};

export default Card;