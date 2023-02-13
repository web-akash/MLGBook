import React from "react";

const Images = ({ src, alt, sx }) => {
  return (
    <>
      <img sx={sx} src={src} alt={alt} />
    </>
  );
};

export default Images;
