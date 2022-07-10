import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExercisesCard = (props) => {
  return (
    <Link
      to={`/exercise/${props.exercise?.id}`}
      className="exercise-card"
      // ml="20px"
      // mr="20px"
    >  
      <img src={props.exercise?.gifUrl} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {props.exercise?.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {props.exercise?.target}
        </Button>
      </Stack>
      <Typography
        mL="21px"
        color="#000"
        fontweight="bold"
        mt="11px"
        mb="11px"
        pb="10px"
        pl="20px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {props.exercise?.name}
      </Typography>
    </Link>
  );
};

export default ExercisesCard;
