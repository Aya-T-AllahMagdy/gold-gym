import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroBannerImg from "../assets/image/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2526" fontWeight="600" fontSize="26px" textTransform={"capitalize"}>
        fitness club
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        fontWeight={700}
        mb="23px"
        mt="30px"textTransform={"capitalize"}
      >
        sweat, smile <br /> and repeat
      </Typography>
      <Typography
        lineHeight="35px"
        textTransform={"capitalize"}
        mb="4px"
        fontSize="22px"
        fontFamily="Alegreya"
      >
        check out the most effective exercises
      </Typography>
      <Typography fontWeight={600}
      color="#ff2625"
      // textTransform={"capitalize"}
      fontSize="200px"
      sx={{opacity:0.1,
      display:{lg:"block" , xs:"none"}}}>
        exercises</Typography>
      <Button variant="contained" color="error" href="#exercises"sx={{backgroundColor:"#FF2625",padding:"10px"}}>
        explore exercises
      </Button>
      <img src={HeroBannerImg} alt="hero-banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
