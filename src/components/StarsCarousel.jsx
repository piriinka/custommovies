import React from 'react';
import { useQuery } from 'react-query';
import { getData, img_300 } from '../util';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 3 },
  512: { items: 5 },
  1024: { items: 7 },
};

export const StarsCarousel = ({ person, searchText }) => {
  const urlCredits = `https://api.themoviedb.org/3/search/${person}?api_key=${import.meta.env.VITE_API_KEY}&query=${searchText}&include_adult=false&language=en-US&page=1`;
  const { data, status } = useQuery(['knownFor', urlCredits], getData);

  const items =
    status === 'success'
      ? data.results
          .filter((obj) => obj.poster_path) // Filter out items without a poster
          .map((obj) => (
            <div className='carousel-item' key={obj.id}>
              <img
                className='carousel-img'
                src={img_300 + obj.poster_path}
                alt={obj?.title}
                onDragStart={handleDragStart}
              />
              <b className='carousel-text'>{obj?.title || obj?.name}</b>
            </div>
          ))
      : [];

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableButtonsControls
      disableDotsControls
      items={items}
      responsive={responsive}
    />
  );
};
