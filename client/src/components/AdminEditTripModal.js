import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
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

function AdminEditTripModal({ trip, setError, handleEditTrip }) {
  const { id, name, description } = trip;
  const [showModal, setShowModal] = useState(false);

  const initialValues = {
    name,
    description,
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
    fetch(`/trips/${id}`, {
      method: "PATCH",
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
          response.json().then(updatedTrip => {
            handleEditTrip(updatedTrip);
            setShowModal(false);
          });
        }
      })
      .catch(error => console.error("Error updating trip:", error));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="inline-block rounded px-6 pb-2 pt-2.5 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-asparagus-light hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-asparagus focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-asparagus active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => setShowModal(true)}
        >
          <img
            src={images["edit.png"]}
            alt="edit icon by flaticon"
            className="h-7 mx-8"
          />
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-lg font-semibold leading-normal">
                Edit Trip Details:
              </h5>
              {/* <!--Close X button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <div className="m-2">
                <label htmlFor="name" className="font-semibold">
                  Name:
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
                <textarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className="border border-gray-300 p-2 mb-2 w-full resize-y rounded-md focus:outline-sky-dark"
                  rows="8"
                ></textarea>
                <p className="text-shimmer">
                  {formik.touched.description && formik.errors.description}
                </p>
              </div>
            </TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="submit"
                  className="ml-1 inline-block rounded bg-lapis px-6 pb-2 pt-2.5 text-parchment shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-hunter hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-hunter focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-hunter active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  CONFIRM CHANGE
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </form>
  );
}

export default AdminEditTripModal;
