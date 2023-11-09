import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "./App.js";
import AdminDeleteReviewModal from "./AdminDeleteReviewModal.js";

function AdminReviews() {
  const { reviews, setReviews } = useContext(CurrentUserContext);

  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter(review => review.id !== id);
    setReviews(updatedReviews);
  }

  return reviews ? (
    <table>
      <tbody>
        {reviews.map(review => (
          <tr key={review.id}>
            <td>{review.date}</td>
            <td>{review.comment}</td>
            <td>{review.client.full_name}</td>
            <td>
              <AdminDeleteReviewModal
                id={review.id}
                handleDeleteReview={handleDeleteReview}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Loading table of reviews...</p>
  );
}

export default AdminReviews;
