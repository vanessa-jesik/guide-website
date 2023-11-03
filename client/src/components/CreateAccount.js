import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { CurrentClientContext } from "./App.js";

function CreateAccount() {
  const [error, setError] = useState([]);
  const initialValues = {
    given_name: "",
    family_name: "",
    full_name: "",
    dob: "",
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    given_name: yup
      .string()
      .max(35, "Given name must be 35 or fewer characters")
      .required("Given name is required"),
    family_name: yup
      .string()
      .max(35, "Family name or Surname must be 35 or fewer characters")
      .required("Family name or Surname is required"),
    full_name: yup
      .string()
      .max(70, "Full name must be 70 or fewer characters")
      .required("Full name is required"),
    dob: yup.string().required("Date of birth is required"),
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters")
      .max(75, "Username may not be more than 70 characters")
      .required("Username is required"),
    password: yup
      .string()
      .min(10, "Password must be at least 10 characters")
      .max(50, "Password may not be more than 50 characters")
      .required("Password is required"),
  });

  const onSubmit = values => {
    setError([]);
    fetch("/create_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    }).then(response => {
      if (!response.ok) {
        response.json().then(err => setError(err.error));
      } else {
        response.json().then(newClient => {
          console.log(newClient);
        });
      }
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      <h1>Create Account</h1>
      <h2>
        Creating an account will log you in where you will be able to sign-up
        for trips.
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="given_name">Given name:</label>
          <br />
          <input
            id="given_name"
            name="given_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.given_name}
          />
          <p className="text-shimmer">
            {formik.touched.given_name && formik.errors.given_name}
          </p>
        </div>
        <div>
          <label htmlFor="family_name">Family name or Surname:</label>
          <br />
          <input
            id="family_name"
            name="family_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.family_name}
          />
          <p className="text-shimmer">
            {formik.touched.family_name && formik.errors.family_name}
          </p>
        </div>
        <div>
          <label htmlFor="full_name">Full name:</label>
          <br />
          <input
            id="full_name"
            name="full_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.full_name}
          />
          <p className="text-shimmer">
            {formik.touched.full_name && formik.errors.full_name}
          </p>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <br />
          <input
            id="dob"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          <p className="text-shimmer">
            {formik.touched.dob && formik.errors.dob}
          </p>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <p className="text-shimmer">
            {formik.touched.username && formik.errors.username}
          </p>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <p className="text-shimmer">
            {formik.touched.password && formik.errors.password}
          </p>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
      {error ? <p className="text-shimmer">{error}</p> : null}
    </div>
  );
}

export default CreateAccount;
