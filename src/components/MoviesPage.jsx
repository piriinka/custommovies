import React, { useState } from 'react'
import { Genres } from './Genres'
import { Movies } from './Movies'


export const MoviesPage = () => {
  const [urlForGenre,setUrlForGenre] =useState('')
  return (
    <>
    <h3>Movies</h3>
    <div className='content'>
      <Genres type='movie' setUrlForGenre={setUrlForGenre}/>
      <Movies urlForGenre={urlForGenre}/>
      </div>
      
    </>  
    )
}

