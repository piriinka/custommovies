import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getData, img_300 } from '../util';
import { ContentPagination } from './ContentPagination';
import { SingleContentStars } from './SingleContentStars';

export const StarsSearchResult = ({ searchText }) => {
  const [page, setPage] = useState(1);

  const urlStarSearch = `https://api.themoviedb.org/3/search/person?api_key=${import.meta.env.VITE_API_KEY}&query=${searchText}`;
  const { data, status } = useQuery(['searchedStars', urlStarSearch], getData);

  return (
    <div>
      <div className='content'>
        {status === 'success' && data.results.length > 0 ? (
          data.results.map((obj) =>
            obj.profile_path ? (
              <SingleContentStars
                key={obj.id}
                id={obj.original_name}
                poster={img_300 + obj.profile_path}
                title={obj.original_name}
              />
            ) : null
          )
        ) : (
          <div>No media found with this actor.</div>
        )}
        {status === 'success' && (
          <ContentPagination page={page} setPage={setPage} numOfPage={data.total_pages} />
        )}
      </div>
    </div>
  );
};
