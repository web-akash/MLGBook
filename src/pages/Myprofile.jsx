import { Button, ButtonGroup, Container } from "@mui/material";
import React from "react";
import Images from "../component/Images";
import Heading from "../component/Heading";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Info from "../component/info/Info";
const Myprofile = () => {
  return (
    <>
      <Container maxWidth="xl">
        <div className="banner">
          <div className="banner-photo">
            <Images src="../accets/Cover-600x371.jpg" />
          </div>
          <div className="banner-deatils">
            <div className="profile-pic">
              <Images src={"../accets/Excuses-header-1024x683.jpg"} />
            </div>
            <div>
              <div className="profile-titel">
                <Heading as="h3" titel="Dmitry Kargaev" />

                <Heading
                  className="location"
                  as="h3"
                  titel=" Saint Petersburg, Russian Federation"
                />
              </div>
              <Heading
                className="profile-subtitel"
                as="p"
                titel="Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers."
              />
              <Button sx={{ marginTop: "14px" }} variant="contained">
                Contact info
              </Button>
            </div>
          </div>
        </div>
        <ButtonGroup
          sx={{ width: "100%" }}
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            sx={{
              bgcolor: "white",
              borderColor: "#E7E7E7",
              color: "#000000",
              margin: "20px 0",
            }}
          >
            Profile
          </Button>
          <Button
            sx={{
              bgcolor: "white",
              borderColor: "#E7E7E7",
              color: "#000000",
              margin: "20px 0",
            }}
          >
            Friends
          </Button>
          <Button
            sx={{
              bgcolor: "white",
              borderColor: "#E7E7E7",
              color: "#000000",
              margin: "20px 0",
            }}
          >
            Post
          </Button>
        </ButtonGroup>
        {/* about part start */}
        <div className="about">
          <Heading as="h3" titel="About me" />
          <Heading
            className="about-sub"
            as="p"
            titel="I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. "
          />
          <Heading as="p" titel="See more" />
        </div>
        {/* about part end */}
        {/* project part start */}
        <div className="project">
          <dvi className="project-titel">
            <Heading as="h3" titel="Projects" />
            <Heading as="p" titel="3 of 12" />
          </dvi>
          <div className="slider">
            <Images src="../accets/ext.png" />
            <Images src="../accets/ext.png" />
            <Images src="../accets/ext.png" />
            <Images src="../accets/ext.png" />
          </div>
        </div>
        {/* project part end */}
        <div className="expariance">
          <Heading as="h3" titel="Experience" />
          <Info
            img="../accets/Group (1).png"
            titel="Freelance UX/UI designer"
            where="Self Employed Around the world"
            year="Jun 2016 — Present"
            details="Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.​."
          />
          <Info
            img="../accets/Rectangle 2.2.png"
            titel="UX/UI designer"
            where="Upwork International"
            year="Jun 2019 — Present"
            details="New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research."
          />
        </div>

        <div className="expariance">
          <Heading as="h3" titel="Education" />
          <Info
            img="../accets/Group.png"
            titel="Moscow State Linguistic Universit"
            where="Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assuranc"
            year="2017-2012"
            details="Additional English classes and UX profile courses​."
          />
          <Info
            img="../accets/Group.png"
            titel="Moscow State Linguistic Universit"
            where="Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assuranc"
            year="2017-2012"
            details="Additional English classes and UX profile courses​."
          />
        </div>
      </Container>
    </>
  );
};

export default Myprofile;
