import React ,{useEffect, useState}from 'react'
import Pagination from'@mui/material/Pagination';
import {Box,Stack,Typography}from'@mui/material/'
import {exerciseOptions, fetchData} from "../utils/fetchData"
import ExercisesCard from './ExercisesCard';
const Exercises = (props) => {
  const [currentPage ,setCurrentPage]=useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage* exercisesPerPage;
  console.log('11',indexOfLastExercise ,currentPage )
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage ;
  console.log('22',indexOfFirstExercise )
  const currentExercises = props.exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate =(e , value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1590 , behavior:"smooth"})
  }
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (props.bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${props.bodyPart}`, exerciseOptions);
      }

      props.setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [props.bodyPart]);
  
  return (
    <Box id="#exercises" m="0 40px">
<Typography variant='h3' mt="50px" mb="50px" textAlign='center'>
  showing results
</Typography>
<Stack direction='row' flexWrap='wrap' justifyContent='center'>
{currentExercises.map((exercise)=>(
  <ExercisesCard key={exercise.id} exercise={exercise}/> 
))}
</Stack>
<Stack mt="100px" alignItems='center'>
  {props.exercises.length > 9 && (
    <Pagination color='standard'shape="rounded"
    defaultPage={1}
    count={Math.ceil(props.exercises.length/exercisesPerPage)}
    page={props.currentPage}
    onChange={paginate}/>
    
  )}

</Stack>
    </Box>
  )
}

export default Exercises