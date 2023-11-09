import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./App.js";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ClientSignupForm({ id, handleSignup }) {
  const { trips } = useContext(CurrentUserContext);
  const [error, setError] = useState(null);

  const initialValues = {
    start_date: "",
    notes: "",
    client_id: id,
    trip_id: "",
  };

  const validationSchema = yup.object().shape({
    start_date: yup.string().required("Please select a start date"),
    notes: yup
      .string()
      .max(500, "Notes for your guide must be 500 or fewer characters"),
    trip_id: yup.number().required("Please select a trip"),
  });

  const onSubmit = values => {
    setError(null);
    fetch("/client_trips", {
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
          response.json().then(booking => {
            {
              handleSignup(booking);
            }
          });
        }
      })
      .catch(error => console.error("Error signing up for trip:", error));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="m-2">
        <label htmlFor="start_date" className="font-semibold">
          Choose a start date:
        </label>
        <br />
        <DatePicker
          id="start_date"
          name="start_date"
          format="YYYY-MM-DD"
          onChange={date => {
            if (date) {
              formik.setFieldValue(
                "start_date",
                date.toISOString().split("T")[0]
              );
            } else {
              formik.setFieldValue("start_date", null);
            }
          }}
          onBlur={formik.handleBlur}
          value={formik.values.start_date}
        />
        <p className="text-shimmer">
          {formik.touched.start_date && formik.errors.start_date}
        </p>
      </div>
      <div className="m-2">
        <label htmlFor="trip_id" className="font-semibold">
          Which outing would you like to enjoy?
        </label>
        <br />
        <select
          id="trip_id"
          name="trip_id"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.trip_id}
          className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
        >
          <option label="Select a trip" />
          {trips
            ? trips.map(trip => (
                <option key={trip.id} value={trip.id} label={trip.name} />
              ))
            : null}
        </select>
        <p className="text-shimmer">
          {formik.touched.trip_id && formik.errors.trip_id}
        </p>
      </div>
      <div className="m-2">
        <label htmlFor="notes" className="font-semibold">
          Optional notes to attach to your trip:
        </label>
        <br />
        <textarea
          id="notes"
          name="notes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
          className="border border-gray-300 p-2 mb-2 w-full resize-y rounded-md focus:outline-sky-dark"
          rows="4"
        ></textarea>
        <p className="text-shimmer">
          {formik.touched.notes && formik.errors.notes}
        </p>
      </div>
      <div>
        <button
          type="submit"
          className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-lapis-dark"
        >
          SUBMIT BOOKING
        </button>
      </div>
      <p className="text-shimmer">{error}</p>
    </form>
  );
}
export default ClientSignupForm;
