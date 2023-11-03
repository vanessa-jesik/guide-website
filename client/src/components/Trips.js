import React, { useEffect, useState } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/trips")
      .then(response => response.json())
      .then(trips => setTrips(trips))
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {trips
        ? trips.map(trip => (
            <div
              key={trip.id}
              className="relative bg-white border shadow-sm rounded-full "
            >
              <img
                className="w-full h-auto rounded-full"
                src={images["mountains.jpeg"]}
                alt="Mountain Image"
              />
              <div className="absolute top-0 left-0 right-0">
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {trip.name}
                  </h3>
                  <p className="mt-1 text-black">
                    {trip.length === 0.5
                      ? "half day"
                      : trip.length > 1
                      ? `${trip.length} days`
                      : `${trip.length} day`}
                  </p>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Trips;
