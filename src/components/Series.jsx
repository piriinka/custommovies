import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { getData } from '../util'
import { SingleContent } from './SingleContent'
import { CircularProgress } from '@mui/material'
import { ContentPagination } from './ContentPagination'

const urlTV=`https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_API_KEY}&include_adult=false`

export const Series = ({urlForGenre}) => {
  const [page,setPage]=useState(1)

  const {data,status,isLoading,isError}=useQuery(["series",urlTV+"&page="+page+"&with_genres="+urlForGenre],getData)

if(isLoading) 
return <div><CircularProgress color="secondary" />
</div>
if(isError)
return <div>Error while fetching data.</div>

status =='success' && console.log(data.results)

  return (
    <>
    <div className='content'>
      {status =='success' && data.results.length>0 ?
      data.results.map(obj=>(
        <SingleContent
        key={obj.id}
        id={obj.id}
        poster={obj.poster_path}
        title={obj.title || obj.name}
        type='tv series'
        date={obj.release_date || obj.first_air_date}
        vote={obj.vote_average}
        />
      ))
    :
    <div>No TV series found under the selected genres.</div>}
  
      <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages}/>

      </div>
      
    </>  
    )
}
