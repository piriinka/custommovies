import * as React from 'react';
import './ContentModal.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useQuery } from 'react-query';
import { getData, img_500, imgUnavailable } from '../util';
import { StarsCarousel } from './StarsCarousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth:'600px',
  maxHeight:'600px',
  bgcolor: '#f9b469',
  borderRadius: '10px',
  border:'5px dotted #ff5af7',
  fontSize: '1rem',
  color:'#ff5af7',
  boxShadow: 24,
  p: 4,
  fontFamily:'Motserrat',
  overflow:'scroll',
};

export const StarsModal=({children,person,searchText})=>{
  const [open, setOpen] = React.useState(false);
  const urlDetails=`https://api.themoviedb.org/3/${person}?api_key=${import.meta.env.VITE_API_KEY}&query=${searchText}`
  const {data,status}=useQuery(['details',urlDetails],getData)


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //console.log(type,id);
  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {status == 'success' &&
            <div className='content-modal'>
                <img src={data.backdrop_path ? img_500+data.backdrop_path : imgUnavailable} alt={data?.name} />  
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <div className='title'><b>{data?.original_name}</b></div>
                    <div className='tagline'><i>{data.known_for_department}</i></div>
                </Box>  
            </div>
            }
            <div><StarsCarousel/></div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}