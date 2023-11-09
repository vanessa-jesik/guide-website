import React, { useEffect, useState } from "react";
import AdminClientTripRow from "./AdminClientTripRow.js";

function AdminClientTrips() {
  const [clientTrips, setClientTrips] = useState(null);

  useEffect(() => {
    fetch("/client_trips_admin")
      .then(response => response.json())
      .then(clientTrips => setClientTrips(clientTrips))
      .catch(error => console.error("Error retrieving client trips:", error));
  }, []);

  return (
    <div className="m-10">
      {clientTrips ? (
        <>
          <div className="flex text-center bg-gray-100">
            <div className="flex-1 font-bold border border-gray-300 p-2">
              ID
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Date
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Trip
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Client
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Waiver
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Paid
            </div>
            <div className="flex-1 font-bold border border-gray-300 p-2">
              Notes
            </div>
          </div>
          {clientTrips.map(clientTrip => (
            <AdminClientTripRow key={clientTrip.id} clientTrip={clientTrip} />
          ))}
        </>
      ) : (
        <p>Loading table of client trips...</p>
      )}
    </div>
  );
}

export default AdminClientTrips;
