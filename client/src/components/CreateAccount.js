import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function CreateAccount() {
  const initialValues = {
    given_name: "",
    family_name: "",
    full_name: "",
    dob: "",
    notes: "",
    username: "",
    password_hash: "",
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
    notes: yup.string().max(500, "Notes must be 500 or fewer characters"),
    username: yup
      .string()
      .min(5, "Username must be at least 5 characters")
      .max(75, "Username may not be more than 70 characters")
      .required("Username is required"),
    password_hash: yup
      .string()
      .min(10, "Password must be at least 10 characters")
      .max(50, "Password may not be more than 50 characters")
      .required("Password is required"),
  });

  const onSubmit = values => {
    fetch("/create_account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error("Failed to create new account");
        }
      })
      .then(newClient => console.log(newClient))
      .catch(error => {
        console.error("Error creating new account", error);
      });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="given_name">Given Name:</label>
          <br />
        </div>
        <div>
          <label htmlFor="family_name">Family Name or Surname:</label>
          <br />
        </div>
        <div>
          <label htmlFor="full_name">Full Name:</label>
          <br />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <br />
        </div>
        <div>
          <label htmlFor="notes">Optional notes for the guide:</label>
          <br />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <br />
        </div>
        <div>
          <label htmlFor="password_hash">Password:</label>
          <br />
        </div>
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
