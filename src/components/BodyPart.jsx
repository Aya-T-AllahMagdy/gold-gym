import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'; 
const BodyPart = (props) => {
  return (
    <Stack 
    alignItems="center"
    justifyContent='center'
    className="bodyPart-card"
    sx={props.bodyPart === props.item ? 
      { borderTop: '4px solid #FF2625',  background: '#fff', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } :
       { background: '#fff', borderBottomLeftRadius: '20px',  borderBottomRightRadius: '20px',width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    type="button"
    onClick={()=>{
      props.setBodyPart(props.item)
    }}>
      <img src={Icon}/>
      <Typography textTransform="capitalize" fontWeight="bold">
      {props.item}
      </Typography>

      
      </Stack>
  )
}

export default BodyPart