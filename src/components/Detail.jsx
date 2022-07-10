import React from 'react'
import { Typography,Stack,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
const Detail = (props) => {
    console.log(props.exerciseDetail,'props')
    const extraDetail = [
        {
          icon: BodyPartImage,
          name: props.exerciseDetail.bodyPart,
        },
        {
          icon: TargetImage,
          name: props.exerciseDetail.target,
        },
        {
          icon: EquipmentImage,
          name: props.exerciseDetail.equipment,
        },
      ];
  return (
    <Stack gap='60px'sx={{flexDirection:{lg:"row"},p:'20px',alignItems:"center"}}> 
    <img src={props.exerciseDetail.gifUrl}alt={props.exerciseDetail.name}loading='lazy'className='detail-image'/>
    <Stack sx={{gap:{lg:"35px" ,xs:"20px"}}}>
        <Typography>
            {props.exerciseDetail.name}
        </Typography>
        <Typography variant='h6'>
        Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{props.exerciseDetail.name}</span> bup is one
          of the best <br /> exercises to target your {props.exerciseDetail.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        
        </Typography>
        {extraDetail.map((item) =>(
            <Stack key={item.index} direction='row' gap='24px' alignItems='center'>
         <Button sx={{background:"#fff2db" , borderRadius:"50%",width:"100px",height:"100px"}}>
            <img src={item.icon} alt={item.name}style={{width:'50px',height:"50px"}}/>
         </Button>
         <Typography variant='h5'textTransform='capitalize'>
            {item.name}
         </Typography>
         
          </Stack>
        ))}
    </Stack>
    </Stack>
    
  )
}

export default Detail