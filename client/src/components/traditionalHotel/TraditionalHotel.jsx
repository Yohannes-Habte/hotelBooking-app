import React from 'react';
import './TraditionalHotel.scss';
import Fetch from '../../hooks/Fetch';

const TraditionalHotel = () => {
  // Global state variables
  const { data, loading, error } = Fetch(
    `http://localhost:9900/api/hotels?featured=true&min=10&max=199`
  );
  return (
    <div className="traditional-hotels">
      {loading ? (
        'Loading...'
      ) : error ? (
        <div> {error} </div>
      ) : (
        <React.Fragment>
          {data.map((hotel, index) => {
            return (
              <section key={hotel._id} className="hotel-container">
                <figure className="image-container">
                  <img
                    src={hotel.photos[0]}
                    alt={hotel.name}
                    className="image"
                  />
                </figure>

                <article className="hotel-title-price">
                  <h2 className="title"> {hotel.name} </h2>
                  <p className="price"> Price ${hotel.cheapestPrice} </p>
                  <p> {hotel.city} </p>
                  {hotel.rating && (
                    <div>
                      <span> {hotel.rating} </span>
                      <span> Excellent </span>
                    </div>
                  )}
                </article>
              </section>
            );
          })}
        </React.Fragment>
      )}
    </div>
  );
};

export default TraditionalHotel;
