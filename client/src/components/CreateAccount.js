import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CurrentUserContext } from "./App.js";

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./signin_images", false, /\.(png|jpe?g|svg)$/)
);

function CreateAccount() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    given_name: "",
    family_name: "",
    full_name: "",
    dob: "",
    username: "",
    password: "",
    confirm_password: "",
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
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password may not be more than 50 characters")
      .required("Password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
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
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => setError(err.error));
        } else {
          response.json().then(newClient => {
            setCurrentUser(newClient);
            navigate("/trips");
          });
        }
      })
      .catch(error => {
        console.error("Error creating account:", error);
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div
      style={{ backgroundImage: `url(${images["meadow.jpg"]})` }}
      className="bg-cover bg-no-repeat bg-center bg-fixed w-screen h-screen"
    >
      <div className="flex flex-col items-start">
        <div className="mx-5 mt-16 p-5 rounded-lg bg-white bg-opacity-70">
          <h1 className="text-2xl font-bold m-2">Create Account</h1>
          <p className="m-2 text-lg">
            With an account, you will be able to sign up for trips! Let the
            adventure begin!
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="m-2">
              <label
                htmlFor="given_name"
                className="font-semibold tracking-wide"
              >
                Given Name:
              </label>
              <br />
              <input
                id="given_name"
                name="given_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.given_name}
                className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
              />
              <p className="text-shimmer">
                {formik.touched.given_name && formik.errors.given_name}
              </p>
            </div>
            <div className="m-2">
              <label
                htmlFor="family_name"
                className="font-semibold tracking-wide"
              >
                Family Name or Surname:
              </label>
              <br />
              <input
                id="family_name"
                name="family_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.family_name}
                className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
              />
              <p className="text-shimmer">
                {formik.touched.family_name && formik.errors.family_name}
              </p>
            </div>
            <div className="m-2">
              <label
                htmlFor="full_name"
                className="font-semibold tracking-wide"
              >
                Full Name:
              </label>
              <br />
              <input
                id="full_name"
                name="full_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
                className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
              />
              <p className="text-shimmer">
                {formik.touched.full_name && formik.errors.full_name}
              </p>
            </div>
            <div className="m-2">
              <label htmlFor="dob" className="font-semibold tracking-wide">
                Date of Birth:
              </label>
              <br />
              <DatePicker
                id="dob"
                name="dob"
                format="YYYY-MM-DD"
                onChange={date => {
                  if (date) {
                    formik.setFieldValue(
                      "dob",
                      date.toISOString().split("T")[0]
                    );
                  } else {
                    formik.setFieldValue("dob", null);
                  }
                }}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
              />
              <p className="text-shimmer">
                {formik.touched.dob && formik.errors.dob}
              </p>
            </div>
            <div className="m-2">
              <label htmlFor="username" className="font-semibold tracking-wide">
                Username (not case sensitive):
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
              <label htmlFor="password" className="font-semibold tracking-wide">
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
            <div className="m-2">
              <label
                htmlFor="confirm_password"
                className="font-semibold tracking-wide"
              >
                Confirm Password:
              </label>
              <br />
              <input
                id="confirm_password"
                name="confirm_password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
                className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-sky-dark"
              />
              <p className="text-shimmer">
                {formik.touched.confirm_password &&
                  formik.errors.confirm_password}
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-lapis text-parchment px-4 py-2 mx-4 my-2 border-solid border-2 border-lapis-dark rounded-md hover:bg-lapis-dark"
              >
                SUBMIT
              </button>
            </div>
            <p className="text-shimmer">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
