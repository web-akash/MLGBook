import React from "react";
import Heading from "../Heading";
import Images from "../Images";
import "./info.css";

const Info = ({ img, titel, where, year, details }) => {
  return (
    <>
      <div className="info-de">
        <div>
          <Images src={img} />
        </div>
        <div className="info-deatils">
          <Heading as="h3" titel={titel} />
          <Heading as="p" titel={where} />
          <Heading as="p" titel={year} />
          <Heading as="p" titel={details} />
        </div>
      </div>
    </>
  );
};

export default Info;
