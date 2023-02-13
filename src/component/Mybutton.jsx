import { Button } from "@mui/material";
import React from "react";

const Mybutton = ({ variant, titel, sx, onClick }) => {
  return (
    <>
      <Button sx={sx} variant={variant} onClick={onClick}>
        {titel}
      </Button>
    </>
  );
};

export default Mybutton;
