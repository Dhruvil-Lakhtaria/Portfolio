import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Copyrights = () => {
  return (
    <div className="bottom-section">
      <p>
        Made with <span className="heart"><FontAwesomeIcon className="heart" icon={faHeart} /> </span>by
        Dhruvil Lakhtaria
        <span className="cr"><FontAwesomeIcon icon={faCopyright} /> </span>
      </p>
    </div>
  );
};

export default Copyrights;
