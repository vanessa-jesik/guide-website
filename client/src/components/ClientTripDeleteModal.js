import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalFooter,
} from "tw-elements-react";

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

function ClientTripDeleteModal({ id, handleDeleteClientTrip }) {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  function handleClick(id) {
    setError(null);
    fetch(`/client_trips/${id}`, { method: "DELETE" })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => setError(err.error));
        } else {
          setShowModal(false);
          handleDeleteClientTrip(id);
        }
      })
      .catch(error => {
        console.error("Error deleting trip:", error);
      });
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
        <button
          type="button"
          className="inline-block rounded px-6 pb-2 pt-2.5 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-shimmer hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-shimmer-dark focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-shimmer-dark active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          onClick={() => setShowModal(true)}
        >
          <img
            src={images["delete.png"]}
            alt="trash can icon by flaticon"
            className="h-8 ml-6 mr-9"
          />
        </button>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-lg font-medium leading-normal">
                Are you sure you want to delete this trip? This action cannot be
                undone.
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
            <TEModalFooter>
              <p className="text-shimmer ml-5 mb-5">{error}</p>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  onClick={() => handleClick(id)}
                  className="ml-1 inline-block rounded bg-shimmer px-6 pb-2 pt-2.5 text-parchment shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-shimmer-dark hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-shimmer-dark focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-shimmer-dark active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  CONFIRM DELETE
                </button>
              </TERipple>
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
}

export default ClientTripDeleteModal;
