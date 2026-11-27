import React from "react";
import { Barcode } from "lucide-react";

const Card = (props) => {
  console.log(props.name);

  return (
    <div className="card">
      <h3>{props.schoolname}</h3>

      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <div className="detail">
        <p>Class: {props.class}</p>
        <p>Roll No: {props.rollNo}</p>
        <p>Contact: {props.contactNo}</p>
        <p>Address: {props.address}</p>
      </div>

      <div className="card-barcode">
        <Barcode className="card-barcode-icon" preserveAspectRatio="none" />
      </div>
    </div>
  );
};
export default Card;
