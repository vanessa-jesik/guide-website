import React, { useContext } from "react";
import { CurrentUserContext } from "./App.js";
import DeleteReviewModal from "./DeleteReviewModal.js";

function AdminReviews() {
  const { reviews, setReviews } = useContext(CurrentUserContext);

  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter(review => review.id !== id);
    setReviews(updatedReviews);
  }

  return (
    <div className="flex justify-center items-center mt-16">
      {reviews ? (
        <table className="table-auto w-4/5 text-center">
          <tbody>
            {reviews.map(review => (
              <tr key={review.id}>
                <td className="px-2 py-4 border-t-2 border-b-2 whitespace-nowrap">
                  {review.date}
                </td>
                <td className="px-3 py-4 border-t-2 border-b-2">
                  {review.comment}
                </td>
                <td className="px-2 py-4 border-t-2 border-b-2 whitespace-nowrap">
                  {review.client.full_name}
                </td>
                <td className="px-2 py-4 border-t-2 border-b-2">
                  <DeleteReviewModal
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
      )}
    </div>
  );
}

export default AdminReviews;
