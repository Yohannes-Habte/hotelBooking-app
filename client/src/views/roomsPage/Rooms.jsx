import React from 'react';
import './Rooms.scss';
import Fetch from '../../hooks/Fetch';

const Rooms = () => {
  // Global useEffect
  const { data, loading, error } = Fetch(
    `http://localhost:9900/api/pages/rooms`
  );
  console.log(data)
  return (
    <main className="rooms-page">
      <section className="rooms-page-container">
        <h1 className="title"> Welcome to Your Rooms</h1>

        {loading ? (
          'Loading...'
        ) : error ? (
          <div> {error} </div>
        ) : (
          <div className="rooms-container">
            {data.map((room, index) => {
              return (
                <figure key={index} className="image-container">
                  <img src={room.image} alt={room.title} className="image" />
                </figure>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Rooms;
