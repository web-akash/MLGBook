import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Images from "./Images";

const Fotter = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#F1F1F1",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          marginTop: "50px",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Typography color="black" variant="h5">
                <Images src="accets/Screenshot_3-removebg-preview.png" />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Fotter;
