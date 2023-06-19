import React from 'react';
import './HotelType.scss';
import Fetch from '../../hooks/Fetch';
import PreLoader from '../preLoader/PreLoader';

const HotelType = () => {
  // Global state variables
  const { data, loading, error } = Fetch(
    `http://localhost:9900/api/hotels/countByType/details`
  );
  return (
    <div className="hotel-type">
      {loading ? (
        <PreLoader />
      ) : error ? (
        <div> {error} </div>
      ) : (
        
        data.map((hotel, index) => {
          return (
            <section key={index} className="type-container">
              <figure className="image-container">
                <img src={hotel.image} alt={hotel.type} className="image" />
              </figure>

              <article className="title-props">
                <h2 className="title"> {hotel.type} </h2>
                <p className="props"> {hotel.count} {hotel.type} </p>
              </article>
            </section>
          );
        })
      )}
    </div>
  );
};

export default HotelType;
