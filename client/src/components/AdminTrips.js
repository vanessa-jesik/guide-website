import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./App.js";
import AdminCreateTripForm from "./AdminCreateTripForm.js";
import AdminEditTripModal from "./AdminEditTripModal.js";

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./icons", false, /\.(png|jpe?g|svg)$/)
);

function AdminTrips() {
  const { trips, setTrips } = useContext(CurrentUserContext);
  const [showCreateTripForm, setShowCreateTripForm] = useState(false);
  const [error, setError] = useState(null);

  function handleCreateTrip(newTrip) {
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    setError(null);
  }

  function handleEditTrip(updatedTrip) {
    const updatedTrips = trips.map(trip => {
      if (trip.id === updatedTrip.id) {
        return updatedTrip;
      }
      return trip;
    });
    setTrips(updatedTrips);
  }

  function handleDeleteTrip(id) {
    setError(null);
    fetch(`/trips/${id}`, { method: "DELETE" })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => setError(err.error));
        } else {
          const updatedTrips = trips.filter(trip => trip.id !== id);
          setTrips(updatedTrips);
        }
      })
      .catch(error => {
        console.error("Error deleting trip:", error);
      });
  }

  return (
    <>
      <div className="flex flex-col items-center">
        {!showCreateTripForm ? (
          <div>
            <button
              onClick={() => setShowCreateTripForm(true)}
              className="bg-lapis text-parchment px-4 py-2 mt-4 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
            >
              Create New Trip
            </button>
          </div>
        ) : (
          <>
            <div>
              <button
                onClick={() => setShowCreateTripForm(false)}
                className="bg-lapis text-parchment px-4 py-2 m-4 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
              >
                Close Form
              </button>
            </div>
            <AdminCreateTripForm
              handleCreateTrip={handleCreateTrip}
              setShowCreateTripForm={setShowCreateTripForm}
            />
          </>
        )}
      </div>
      <div className="mx-10 mt-10 mb-20">
        {error ? (
          <p className="text-shimmer ml-5 mb-5">
            Error editing or deleting trip: {error}
          </p>
        ) : null}
        {trips ? (
          <table>
            <thead>
              <tr>
                <th className="border border-gray-100 w-16 p-4">ID</th>
                <th className="border border-gray-100 p-4">Name</th>
                <th className="border border-gray-100 p-4">Description</th>
                <th className="border border-gray-100 w-32 p-4">Edit Trip</th>
                <th className="border border-gray-100 w-32 p-4">Delete Trip</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(trip => (
                <tr key={trip.id} className="h-16">
                  <td className="text-center border border-gray-100">
                    {trip.id}
                  </td>
                  <td className="text-center border border-gray-100 px-2">
                    {trip.name}
                  </td>
                  <td className="border border-gray-100 p-2">
                    {trip.description}
                  </td>
                  <td className="border border-gray-100">
                    <AdminEditTripModal
                      trip={trip}
                      setError={setError}
                      handleEditTrip={handleEditTrip}
                    />
                  </td>
                  <td className="border border-gray-100">
                    <button type="button">
                      <img
                        src={images["delete.png"]}
                        alt="trash can icon by flaticon"
                        className="h-8 mx-10"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading table of trips...</p>
        )}
      </div>
    </>
  );
}

export default AdminTrips;
