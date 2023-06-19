import React from 'react';
import "./HotelByCity.scss"
import Fetch from '../../hooks/Fetch';
import PreLoader from '../preLoader/PreLoader';

const HotelByCity = () => {
  const { data, loading, error } = Fetch(
    `http://localhost:9900/api/hotels/countByCity/number?cities=Massawa,Hamburg,Nairobi`
  );

  const { data: hotels } = Fetch(
    `http://localhost:9900/api/pages/home/hotels`
  );
  console.log(data);
  return (
    <div className="country-hotels">
      {loading ? (
        <PreLoader />
      ) : error ? (
        <div> {error} </div>
      ) : (
        hotels.map((hotel, index) => {
          return (
            <section key={index} className="hotel-container">
              <figure className="image-container">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="hotel-image"
                />
              </figure>

              <article className="hotel-title-props">
                <h2 className="hotel-title"> {hotel.title} </h2>
                <p className="hotel-props"> {data[index]} Properties </p>
              </article>
            </section>
          );
        })
      )}
    </div>
  );
};

export default HotelByCity;
