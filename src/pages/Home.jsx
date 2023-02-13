import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import PostCard from "../component/PostCard";
import Images from "../component/Images";
import Heading from "../component/Heading";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box className="post-container">
              <Box className="post">
                <Avatar
                  sx={{ height: "80px", width: "80px" }}
                  alt="Remy Sharp"
                  src="./accets/Excuses-header-1024x683.jpg"
                />
                <TextField
                  sx={{ width: "80%", borderBlock: "none" }}
                  id="outlined-multiline-flexible"
                  placeholder="What is your mind?"
                  multiline
                  maxRows={4}
                />
              </Box>
              <Stack flexDirection="row" justifyContent="space-evenly">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ImageIcon color="primary" />
                  <Heading as="h4" titel="Photos" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VideocamIcon color="secondary" />
                  <Heading as="h4" titel="Videos" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmojiEmotionsIcon color="error" />
                  <Heading as="h4" titel="Feeling" />
                </Box>
                <Button variant="contained">Post</Button>
              </Stack>
            </Box>
            <Stack flexDirection="column" gap="20px">
              <PostCard />
              <PostCard />
              <PostCard />
            </Stack>
          </Grid>
          <Grid item xs={0} md={4}>
            <Box
              className="sidProfile"
              sx={{ display: { sm: "none", md: "block" } }}
            >
              <Box className="cover">
                <Images src="./accets/images.jpg" />

                <Box className="profilImg">
                  <Avatar
                    sx={{ height: "100px", width: "100px" }}
                    alt="Remy Sharp"
                    src="./accets/Excuses-header-1024x683.jpg"
                  />
                </Box>
              </Box>
              <Box className="deatils">
                <Heading as="h2" titel="Akash Ahmed" />
                <Heading
                  as="p"
                  titel="Freelance Front-end Developer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers."
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
