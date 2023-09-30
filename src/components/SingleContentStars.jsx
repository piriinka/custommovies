import React from 'react'
import { img_300 } from '../util'
import { imgUnavailable } from '../util'
import './SingleContent.css'
import {StarsModal} from './StarsModal'

export const SingleContentStars = ({id,poster,title,type,}) => {
  return (
    <div style={{display:'flex'}}>
      <StarsModal type={type} 
      id={id}>
       <div className='singleContent' id={id}>
        <img src={poster ? img_300+poster : imgUnavailable} alt={title} />
        <h3>{title}</h3>
        </div>
      </StarsModal>
    </div>
   
  )
}

