import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function ClientReviewForm({ id, handleCreateReview }) {
  const [error, setError] = useState(null);

  const initialValues = {
    comment: "",
    client_id: id,
  };

  const validationSchema = yup.object().shape({
    comment: yup
      .string()
      .max(1000, "Review may only be 1000 or fewer characters")
      .required("Please write your review before submitting"),
  });

  const onSubmit = values => {
    setError(null);
    fetch("/reviews_client", {
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
          response.json().then(review => {
            {
              handleCreateReview(review);
            }
          });
        }
      })
      .catch(error => console.error("Error creating review", error));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      <h1>Write a Review:</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="m-2">
          <label htmlFor="comment" className="font-semibold">
            We invite you to share your thoughts about your excursion(s). These
            are shared on our home page. Your name will be attached.
          </label>
          <br />
          <textarea
            id="comment"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
            className="border border-gray-300 p-2 mb-2 w-full resize-y rounded-md focus:outline-sky-dark"
            rows="8"
          ></textarea>
          <p className="text-shimmer">
            {formik.touched.comment && formik.errors.comment}
          </p>
          <button
            type="submit"
            className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-lapis-dark"
          >
            PUBLISH REVIEW
          </button>
        </div>
      </form>
    </div>
  );
}
export default ClientReviewForm;
