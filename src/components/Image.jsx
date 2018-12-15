import React from "react";
import PropTypes from "prop-types";
import "../App";

const Image = props => {
  return (
    <div>
      <div className="asset-description">
        <p>{props.description}</p>
      </div>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

Image.propTypes = {};

export default Image;
