import React from "react";
import { CheckCircle, Clock, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_top_labels">
          <Chip text="Frontend" color="green" />
        </div>
        <MoreHorizontal />
      </div>
      <div className="card_title">httht</div>
      <div className="card_footer">
      <p> <Clock/>29 sept </p>
      <p><CheckCircle/>1/4</p>
      </div>
  
    </div>
  );
};

export default Card;
