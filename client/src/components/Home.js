import React, { useEffect, useState } from "react";

function Home() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then(response => response.json())
      .then(reviews => setReviews(reviews));
  }, []);

  console.log(reviews);

  return (
    <div>
      {reviews
        ? reviews.map(review => <div key={review.id}>{review.comment}</div>)
        : null}
    </div>
  );
}

export default Home;
