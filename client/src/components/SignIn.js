import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { CurrentUserContext } from "./App.js";

function SignIn() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required to sign in"),
    password: yup.string().required("Password is required to sign in"),
  });

  const onSubmit = values => {
    setError([]);
    fetch("/sign_in", {
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
          response.json().then(user => {
            setCurrentUser(user);
            navigate("/trips");
          });
        }
      })
      .catch(error => {
        console.error("Error signing in:", error);
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      <h1 className="text-xl font-bold px-4 py-2">Sign In</h1>
      <form onSubmit={formik.handleSubmit} className="mx-4 mb-28">
        <div className="m-2">
          <label htmlFor="username" className="font-semibold">
            Username:
          </label>
          <br />
          <input
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
          />
          <p className="text-shimmer">
            {formik.touched.username && formik.errors.username}
          </p>
        </div>
        <div className="m-2">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
          />
          <p className="text-shimmer">
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-hunter"
          >
            SUBMIT
          </button>
        </div>
        {error ? <p className="text-shimmer">{error}</p> : null}
      </form>
    </div>
  );
}

export default SignIn;
