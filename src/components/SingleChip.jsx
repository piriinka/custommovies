import { Chip } from '@mui/material'
import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export const SingleChip = ({id,name,selectedGenres,setSelectedGenres}) => {
    const [selected,setSelected]=useState(false)

    const handleClick=()=>{
       //console.log('clicked on chip')
        if(selectedGenres.indexOf(id) === -1) {
            setSelected(true)
            setSelectedGenres((prev)=>[...prev,id])
        }else{
            setSelected(false)
            setSelectedGenres(selectedGenres.filter(item=>item !=id))
        }
    }
  return (
    <Chip label={name}
    sx={{color:'white',}}
    clickable
    size="small"
    onClick={handleClick}
    icon={selected ? <DoneIcon/> : <RadioButtonUncheckedIcon/>}
    />  
)
}