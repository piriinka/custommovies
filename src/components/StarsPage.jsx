import { TextField, createTheme, ThemeProvider, Button } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { StarsSearchResult } from './StarsSearchResult';


export const StarsPage = () => {
  const [searchText,setSearchText] =useState('')
  const [fetchData,setFetchData] = useState(false)

  const darkTheme = createTheme({
    palette: {
      mode:"dark",
    }
  })

  const handleChangeText=(e)=>{
    setFetchData(false)
    setSearchText(e.target.value)
  }

  //console.log(searchText,type)

  return (
    <div>
    <ThemeProvider theme={darkTheme}>
      <div style={{display:'flex', maxWidth:'300px',margin:'15px auto', justifyContent:'center'}}>
        <TextField 
        label="Search" 
        variant="filled"
        onChange={handleChangeText}
        />

      <Button variant='contained' onClick={()=>setFetchData(true)}>
      <SearchIcon />
      </Button>
     </div>
    </ThemeProvider>
    {fetchData && <StarsSearchResult searchText={searchText}/>}
    </div>
  )
}

