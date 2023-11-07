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

function AdminClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/clients")
      .then(response => response.json())
      .then(clients => setClients(clients))
      .catch(error => console.error("Error retrieving clients:", error));
  }, []);

  return (
    <table className="ml-32 my-12">
      <thead>
        <tr>
          <th className="text-center px-6 py-2 border border-gray-300">ID</th>
          <th className="text-center px-6 py-2 border border-gray-300">
            Family Name
          </th>
          <th className="text-center px-6 py-2 border border-gray-300">
            Given Name
          </th>
          <th className="text-center px-6 py-2 border border-gray-300">DOB</th>
          <th className="text-center px-6 py-2 border border-gray-300">
            Waiver
          </th>
          <th className="text-center px-6 py-2 border border-gray-300">
            # of Outings
          </th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.id}>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.id}
            </td>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.family_name}
            </td>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.given_name}
            </td>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.dob}
            </td>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.waiver ? (
                <img
                  src={images["check-mark.png"]}
                  alt="check mark icon by flaticon"
                  className="h-4 mx-8"
                />
              ) : null}
            </td>
            <td className="text-center px-6 py-2 border border-gray-300">
              {client.client_trips.length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AdminClients;
