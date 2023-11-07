import React, { useEffect, useState } from "react";

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./trip_images", false, /\.(png|jpe?g|svg)$/)
);

function Trips() {
  const [trips, setTrips] = useState(null);

  useEffect(() => {
    fetch("/trips")
      .then(response => response.json())
      .then(trips => setTrips(trips))
      .catch(error => {
        console.error("Error retrieving trips:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {trips ? (
        trips.map(trip => (
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
                <h3 className="text-lg font-bold text-gray-800">{trip.name}</h3>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading trips...</p>
      )}
    </div>
  );
}

export default Trips;
