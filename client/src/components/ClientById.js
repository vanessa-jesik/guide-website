import React, { useContext } from "react";
import { CurrentUserContext } from "./App.js";
// import ClientCarousel from "./ClientCarousel.js";
import ClientSignupForm from "./ClientSignupForm.js";
// import ClientTripDeleteModal from "./ClientTripDeleteModal.js";
import ClientReviewForm from "./ClientReviewForm.js";
// import DeleteReviewModal from "./DeleteReviewModal.js";

function ClientById() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id, full_name, dob, waiver, client_trips, reviews } = currentUser;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayFormatted = `${year}-${month}-${day}`;
  const pastTrips = client_trips?.filter(
    trip => trip.start_date < todayFormatted
  );
  const todayTrip = client_trips?.filter(
    trip => trip.start_date === todayFormatted
  );
  const upcomingTrips = client_trips?.filter(
    trip => trip.start_date > todayFormatted
  );

  function handleSignup(booking) {
    const updatedClientTrips = currentUser.client_trips.concat(booking);
    const updatedClient = { ...currentUser, client_trips: updatedClientTrips };
    setCurrentUser(updatedClient);
  }

  // function handleDeleteClientTrip(trip_id) {
  //   const updatedClientTrips = client_trips.filter(trip => trip.id !== trip_id);
  //   const updatedClient = { ...currentUser, client_trips: updatedClientTrips };
  //   setCurrentUser(prevUser => ({ ...prevUser, ...updatedClient }));
  // }

  function handleCreateReview(review) {
    const updatedReviews = currentUser.reviews.concat(review);
    const updatedClient = { ...currentUser, reviews: updatedReviews };
    setCurrentUser(updatedClient);
  }

  // function handleDeleteReview(review_id) {
  //   const updatedReviews = reviews.filter(review => review.id !== review_id);
  //   const updatedClient = { ...currentUser, reviews: updatedReviews };
  //   setCurrentUser(prevUser => ({ ...prevUser, ...updatedClient }));
  // }

  return currentUser.user_type === "client" ? (
    <div className="flex flex-wrap justify-center">
      {/* Today's Trip Section */}
      {todayTrip.length === 1 ? (
        <div id="today_trip_div" className="bg-lapis-dark text-white p-4">
          <h1>
            Get ready to explore, create memories, and embrace new experiences!
            Pack your enthusiasm, curiosity, and a dash of spontaneity - it's
            time for an unforgettable trip! {todayTrip[0].trip.name} embarks
            today!
          </h1>
        </div>
      ) : null}

      {/* Waiver Section */}
      <div id="waiver_div" className="bg-alice-dark text-hunter-dark p-4">
        {currentUser?.waiver ? (
          <p>Thank you! We have your waiver on file.</p>
        ) : (
          <p>Please return your waiver to us at your earliest convenience.</p>
        )}
      </div>

      {/* Future Trips Section */}
      <div id="future_trip_div" className="bg-sky-dark text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Future Escapades:</h1>
        {upcomingTrips.length >= 1 ? (
          upcomingTrips.map(trip => (
            <div key={trip.id} className="mb-4">
              <p className="text-lg font-semibold">{trip.start_date}</p>
              <p className="text-xl">{trip.trip.name}</p>
              <p>{trip.notes}</p>
              {!trip.paid ? (
                <p className="text-hunter-dark">
                  Balance Due: Please complete payment 72 hours prior to start
                  date.
                </p>
              ) : (
                <p className="text-asparagus-dark">Paid in Full</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-white">
            You don't yet have any upcoming trips. Book an adventure below!
          </p>
        )}
      </div>

      {/* Book Trip Section */}
      <div id="book_trip_div" className="bg-hunter-dark text-white p-4">
        <ClientSignupForm id={id} handleSignup={handleSignup} />
      </div>

      {/* Past Trips Section */}
      <div id="past_trip_div" className="bg-asparagus-dark text-white p-4">
        {pastTrips.length >= 1 ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Past Experiences:</h1>
            {pastTrips.map(trip => (
              <div key={trip.id} className="mb-4">
                <p className="text-lg font-semibold">{trip.start_date}</p>
                <p className="text-xl">{trip.trip.name}</p>
                <p>{trip.notes}</p>
              </div>
            ))}
            <div
              id="add_review_div"
              className="bg-parchment-dark text-hunter-dark p-4"
            >
              <ClientReviewForm
                id={id}
                handleCreateReview={handleCreateReview}
              />
            </div>
          </>
        ) : null}
      </div>

      {/* Published Reviews Section */}
      {reviews ? (
        <div
          id="published_review_div"
          className="bg-shimmer-dark text-white p-4"
        >
          {reviews.map(review => (
            <div key={review.id} className="mb-4">
              <p className="text-lg font-semibold">{review.date}</p>
              <p>{review.comment}</p>
              {/* <button className="bg-lapis-dark text-white py-1 px-2 rounded">
                Edit Review
              </button> */}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  ) : (
    <>
      This displays trip and review information specific to the signed in
      client.
    </>
  );
}
export default ClientById;
