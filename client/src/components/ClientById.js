import React, { useContext } from "react";
import { CurrentUserContext } from "./App.js";
import ClientCarousel from "./ClientCarousel.js";
import ClientSignupForm from "./ClientSignupForm.js";
import ClientReviewForm from "./ClientReviewForm.js";

function ClientById() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id, full_name, dob, waiver, client_trips, reviews } = currentUser;

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayFormatted = `${year}-${month}-${day}`;
  const pastTrips = client_trips.filter(
    trip => trip.start_date < todayFormatted
  );
  const todayTrip = client_trips.filter(
    trip => trip.start_date === todayFormatted
  );
  const upcomingTrips = client_trips.filter(
    trip => trip.start_date > todayFormatted
  );

  function handleSignup(booking) {
    const updatedClientTrips = currentUser.client_trips.concat(booking);
    const updatedClient = { ...currentUser, client_trips: updatedClientTrips };
    setCurrentUser(updatedClient);
  }

  function handleCreateReview(review) {
    console.log(review);
  }

  return (
    <div>
      {todayTrip.length === 1 ? (
        <div id="today_trip_div">
          <h1>
            Get ready to explore, create memories, and embrace new experiences!
            Pack your enthusiasm, curiosity, and a dash of spontaneity - it's
            time for an unforgettable trip! {todayTrip[0].trip.name} embarks
            today!
          </h1>
        </div>
      ) : null}
      <div id="waiver_div">
        {currentUser?.waiver ? (
          <p>Thank you! We have your waiver on file.</p>
        ) : (
          <p>Please return your waiver to us at your earliest convenience.</p>
        )}
      </div>
      <div id="future_trip_div">
        <h1>Future Escapades:</h1>
        {upcomingTrips.length >= 1 ? (
          upcomingTrips.map(trip => (
            <div key={trip.id}>
              <p>{trip.start_date}</p>
              <p>{trip.trip.name}</p>
              <p>{trip.notes}</p>
              {!trip.paid ? (
                <p>
                  Balance Due: Please complete payment 72 hours prior to start
                  date.
                </p>
              ) : (
                <p>Paid in Full</p>
              )}
              <button>Delete Trip</button>
            </div>
          ))
        ) : (
          <p>You don't yet have any upcoming trips. Book an adventure below!</p>
        )}
      </div>
      <div id="book_trip_div">
        <ClientSignupForm id={id} handleSignup={handleSignup} />
      </div>
      <div id="past_trip_div">
        {pastTrips.length >= 1 ? (
          <>
            <h1>Past Experiences:</h1>
            {pastTrips.map(trip => (
              <div key={trip.id}>
                <p>{trip.start_date}</p>
                <p>{trip.trip.name}</p>
                <p>{trip.notes}</p>
              </div>
            ))}
            <div id="add_review_div">
              <ClientReviewForm
                id={id}
                handleCreateReview={handleCreateReview}
              />
            </div>
          </>
        ) : null}
      </div>
      {reviews ? (
        <div id="published_review_div">
          {reviews.map(review => (
            <div key={review.id}>
              <p>{review.date}</p>
              <p>{review.comment}</p>
              <button>Edit Review</button>
              <button>Delete Review</button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default ClientById;
