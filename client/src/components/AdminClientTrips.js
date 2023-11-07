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
  require.context("./icons", false, /\.(png|jpe?g|svg)$/)
);

function AdminClientTrips() {
  const [clientTrips, setClientTrips] = useState(null);

  useEffect(() => {
    fetch("/client_trips")
      .then(response => response.json())
      .then(clientTrips => setClientTrips(clientTrips))
      .catch(error => console.error("Error retrieving client trips:", error));
  }, []);

  return clientTrips ? (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Trip</th>
          <th>Client</th>
          <th>Waiver</th>
          <th>Paid</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {clientTrips.map(clientTrip => (
          <tr key={clientTrip.id}>
            <td>{clientTrip.id}</td>
            <td>{clientTrip.start_date}</td>
            <td>{clientTrip.trip.name}</td>
            <td>
              {clientTrip.client.full_name}
              <br />
              {clientTrip.client.dob}
            </td>
            <td>
              {clientTrip.client.waiver ? (
                <img
                  src={images["check-mark.png"]}
                  alt="check mark icon by flaticon"
                  className="h-7 mx-4"
                />
              ) : (
                <img
                  src={images["x.png"]}
                  alt="x icon by flaticon"
                  className="h-7 mx-4"
                />
              )}
            </td>
            <td>
              {clientTrip.paid ? (
                <img
                  src={images["check-mark.png"]}
                  alt="check mark icon by flaticon"
                  className="h-7 mx-4"
                />
              ) : (
                <img
                  src={images["x.png"]}
                  alt="x icon by flaticon"
                  className="h-7 mx-4"
                />
              )}
            </td>
            <td>{clientTrip.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Loading table of client trips...</p>
  );
}

export default AdminClientTrips;
