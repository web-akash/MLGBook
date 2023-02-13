import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExtraLink = ({ to, content, titel }) => {
  return (
    <Typography variant="subtitle1" gutterBottom mt={2}>
      {titel}{" "}
      <Link to={to} underline="none">
        {content}
      </Link>
    </Typography>
  );
};

export default ExtraLink;
