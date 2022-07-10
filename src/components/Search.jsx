import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
const Search = (props) => {
  const [search, setSearch] = useState("");
  
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      props.setExercises(searchedExercises);
    }
  };
  return (
    <Stack justifyContent="center" mt="37px" alignItems="center" p="20px">
      <Typography
      textTransform={"capitalize"}
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        awesome exercise you <br />
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              bprder: "none",
              borderRadius: "4px",
            },
            backgroundColor: "#fff",
            borderRadius: "40px",
            width: { lg: "800px", xs: "350px" },
          }}
          height="76px"
          placeholder="search for an exercise"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
        
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "capitalize",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyParts}setBodyPart={props.setBodyPart} bodyPart={props.bodyPart} isShowBodyPart/>
      </Box>
    </Stack>
  );
};

export default Search;
