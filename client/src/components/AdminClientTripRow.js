import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

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

function AdminClientTripRow({ clientTrip }) {
  const { id, start_date, notes, paid, client, trip } = clientTrip;
  //   const [editable, setEditable] = useState(false);
  //   const [error, setError] = useState(null);

  //   const initialValues = {
  //     start_date,
  //     notes,
  //     paid,
  //     client,
  //     trip,
  //   };

  //   const validationSchema = yup.object().shape({
  //     start_date: yup.string().required("Start date is required"),
  //     notes: yup.string().max(500, "Notes must be 500 or fewer characters"),
  //     paid: yup.bool().required("Paid value is required"),
  //     client: yup.object().shape({
  //       waiver: yup.bool().required("Waiver value is required"),
  //     }),
  //     trip: yup.object().shape({
  //       name: yup
  //         .string()
  //         .max(40, "Trip name must be 40 or fewer characters")
  //         .required("Trip name is required"),
  //     }),
  //   });

  //   const onSubmit = values => {
  //     setError(null);
  //     console.log(values);
  //   };

  //   const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div className="flex text-center bg-gray-100">
      <div className="flex-1 border border-gray-300 p-2">{id}</div>
      <div className="flex-1 border border-gray-300 p-2">{start_date}</div>
      <div className="flex-1 border border-gray-300 p-2">{trip.name}</div>
      <div className="flex-1 border border-gray-300 p-2">
        {client.full_name}
        <br />
        {client.dob}
      </div>
      <div className="flex-1 border border-gray-300 p-2">
        <img
          src={client.waiver ? images["check-mark.png"] : images["x.png"]}
          alt={
            client.waiver ? "check mark icon by flaticon" : "x icon by flaticon"
          }
          className="h-7 mx-auto"
        />
      </div>
      <div className="flex-1 border border-gray-300 p-2">
        <img
          src={paid ? images["check-mark.png"] : images["x.png"]}
          alt={paid ? "check mark icon by flaticon" : "x icon by flaticon"}
          className="h-7 mx-auto"
        />
      </div>
      <div className="flex-1 border border-gray-300 p-2">{notes}</div>
    </div>
  );
}

export default AdminClientTripRow;
