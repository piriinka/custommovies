import React from 'react'
import { img_300 } from '../util'
import { imgUnavailable } from '../util'
import './SingleContent.css'
import {ContentModal} from './ContentModal'

export const SingleContent = ({id,poster,title,type,date,vote}) => {
  return (
    <div style={{display:'flex',}}>
      <ContentModal type={type} id={id}>
       <div className='singleContent' id={id}>
        <img src={poster ? img_300+poster : imgUnavailable} alt={title} />
        <h3>{title}</h3>
        <div className="info">
            <span>{type}</span>
            <span>{date}</span>

        </div>
        <div className='vote'>{vote}</div>
        </div>
      </ContentModal>
    </div>
   
  )
}

