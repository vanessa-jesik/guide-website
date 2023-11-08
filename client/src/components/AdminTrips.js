import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./App.js";
import AdminCreateTripForm from "./AdminCreateTripForm.js";
import AdminEditTripModal from "./AdminEditTripModal.js";
import AdminDeleteTripModal from "./AdminDeleteTripModal.js";

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
  const editIcon = images["edit.png"];
  const deleteIcon = images["delete.png"];

  function handleCreateTrip(newTrip) {
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
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
    const updatedTrips = trips.filter(trip => trip.id !== id);
    setTrips(updatedTrips);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <button
            onClick={() => setShowCreateTripForm(!showCreateTripForm)}
            className="bg-lapis text-parchment px-4 py-2 mt-4 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
          >
            {showCreateTripForm ? "CLOSE FORM" : "CREATE NEW TRIP"}
          </button>
        </div>
        {showCreateTripForm ? (
          <AdminCreateTripForm
            handleCreateTrip={handleCreateTrip}
            setShowCreateTripForm={setShowCreateTripForm}
          />
        ) : null}
      </div>
      {trips ? (
        <table className="mx-10 mt-10 mb-20">
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
                    editIcon={editIcon}
                    trip={trip}
                    handleEditTrip={handleEditTrip}
                  />
                </td>
                <td className="border border-gray-100">
                  <AdminDeleteTripModal
                    id={trip.id}
                    deleteIcon={deleteIcon}
                    handleDeleteTrip={handleDeleteTrip}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading table of trips...</p>
      )}
    </>
  );
}

export default AdminTrips;
