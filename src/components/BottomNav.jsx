import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovieIcon from '@mui/icons-material/Movie';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles=makeStyles({
    root:{
        width:320,
        position:'fixed',
        bottom:0,
        zIndex:100,
        backgroundColor:'rgb(127, 168, 255)!important',
        boxShadow:'0 -6px 10px -6px white',
        borderRadius:'7px'

    }
})

export const BottomNav=()=>{
    const classes=useStyles()

  return (
    <Box sx={{display:'flex',justifyContent: 'center'}}>
      <BottomNavigation
        showLabels
        value={useLocation().pathname}
        className={classes.root}
        sx={{"& .Mui-selected, .Mui-selected > svg": {color: "white" },"& svg":{color:'#be79eee6'}}}
      >
        <BottomNavigationAction label="Trendings" icon={<TrendingUpIcon />} 
            component={NavLink}
            value='/'
            to='/'
        />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} 
             component={NavLink}
             value='/movies'
             to='/movies'
        />
        <BottomNavigationAction label="Series" icon={<ConnectedTvIcon />} 
             component={NavLink}
             value='/series'
             to='/series'
        />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} 
             component={NavLink}
             value='/search'
             to='/search'
        />
      </BottomNavigation>
    </Box>
  );
}