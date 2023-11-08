import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AdminCreateTripForm({ handleCreateTrip, setShowCreateTripForm }) {
  const [error, setError] = useState(null);

  const initialValues = {
    name: "",
    description: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(40, "Trip name must be 40 or fewer characters")
      .required("Trip name is required"),
    description: yup
      .string()
      .max(500, "Trip description must be 500 or fewer characters")
      .required("Trip description is required"),
  });

  const onSubmit = values => {
    setError(null);
    fetch("/trips_admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => setError(err.error));
        } else {
          response.json().then(newTrip => {
            {
              handleCreateTrip(newTrip);
              setShowCreateTripForm(false);
            }
          });
        }
      })
      .catch(error => console.error("Error adding trip:", error));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div className="w-3/5 border border-gray-300 rounded-md mt-5">
      <h1 className="text-xl font-bold px-4 py-2">Enter new trip details!</h1>
      <form onSubmit={formik.handleSubmit} className="m-4">
        <div className="m-2">
          <label htmlFor="name" className="font-semibold">
            Trip name:
          </label>
          <br />
          <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
          />
          <p className="text-shimmer">
            {formik.touched.name && formik.errors.name}
          </p>
        </div>
        <div className="m-2">
          <label htmlFor="description" className="font-semibold">
            Description:
          </label>
          <br />
          <input
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
          />
          <p className="text-shimmer">
            {formik.touched.description && formik.errors.description}
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
          >
            CREATE TRIP
          </button>
        </div>
        <p className="text-shimmer">{error}</p>
      </form>
    </div>
  );
}

export default AdminCreateTripForm;
