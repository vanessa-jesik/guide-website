import React, { useEffect, useState } from "react";
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./home_images", false, /\.(png|jpe?g|svg)$/)
);

function Home() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch("/reviews")
      .then(response => response.json())
      .then(reviews => setReviews(reviews))
      .catch(error => {
        console.error("Error retrieving reviews:", error);
      });
  }, []);

  return (
    <div>
      <header className="bg-cover bg-center h-40 md:h-60 lg:h-80 relative mb-10">
        <img
          src={images["ep_panoramic.jpeg"]}
          alt="Panoramic view Estes Park, Colorado"
          className="w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center p-8 bg-hunter-dark bg-opacity-50 text-alice-light text-opacity-100">
            ESTES PARK MOUNTAIN GUIDE
          </h1>
        </div>
      </header>
      {/* Carousel from TW Elements*/}
      <div className="max-w-2xl mx-auto">
        <div
          id="carouselExampleControls"
          className="relative"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          {/* <!--Carousel items--> */}
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {/* <!--First item--> */}
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active
            >
              <img
                src={images["kiddos.jpg"]}
                className="block w-full"
                alt="Selfie with guide and climbing kiddo"
              />
            </div>
            {/* <!--Second item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["diamond_steep.jpg"]}
                className="block w-full"
                alt="Looking down at climbing on steep face"
              />
            </div>
            {/* <!--Third item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["boarder.jpg"]}
                className="block w-full"
                alt="Snowboarder on open powder field"
              />
            </div>
            {/* <!--Fourth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["thumbs.jpg"]}
                className="block w-full"
                alt="Climber on a ledge giving two thumbs up"
              />
            </div>
            {/* <!--Fifth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["shrope.jpg"]}
                className="block w-full"
                alt="Guide short-roping two clients on snow"
              />
            </div>
            {/* <!--Sixth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["longs.jpeg"]}
                className="block w-full"
                alt="Person climbing with Longs Peak in background"
              />
            </div>
            {/* <!--Seventh item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["steep_skinning.jpg"]}
                className="block w-full"
                alt="Skiers walking uphill with smiles"
              />
            </div>
            {/* <!--Eighth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["rappel.jpg"]}
                className="block w-full"
                alt="Climber on a free-hanging rappel"
              />
            </div>
            {/* <!--Ninth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["bubbles.jpeg"]}
                className="block w-full"
                alt="Ice climber above ravine"
              />
            </div>
            {/* <!--Tenth item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["summit.jpeg"]}
                className="block w-full"
                alt="Climbers displaying sign on summit"
              />
            </div>
            {/* <!--11 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["capable.jpeg"]}
                className="block w-full"
                alt="Climber on steep snow with snowy mountains in background"
              />
            </div>
            {/* <!--12 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["petit.jpeg"]}
                className="block w-full"
                alt="Climber on steep face above lake"
              />
            </div>
            {/* <!--13 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["rainier.jpg"]}
                className="block w-full"
                alt="Climber crosses snow slope at sunrise"
              />
            </div>
            {/* <!--14 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["smiles.jpg"]}
                className="block w-full"
                alt="Smiling climbers"
              />
            </div>
            {/* <!--15 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["dim.jpg"]}
                className="block w-full"
                alt="Ice climber"
              />
            </div>
            {/* <!--16 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["terrain.jpg"]}
                className="block w-full"
                alt="Climber with mountain range in background"
              />
            </div>
            {/* <!--17 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["ridge.jpg"]}
                className="block w-full"
                alt="Climbers on snowy ridge"
              />
            </div>
            {/* <!--18 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["beginner.jpg"]}
                className="block w-full"
                alt="Smiling climber in the sun"
              />
            </div>
            {/* <!--19 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["mini.jpeg"]}
                className="block w-full"
                alt="Ice climber on steep terrain"
              />
            </div>
            {/* <!--20 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["free_hanging.jpg"]}
                className="block w-full"
                alt="Climber hanging on by only one arm"
              />
            </div>
            {/* <!--21 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["ski.jpg"]}
                className="block w-full"
                alt="Skier making turns"
              />
            </div>
            {/* <!--22 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["diamond_pano.jpg"]}
                className="block w-full"
                alt="Climbers on a cliff face over lakes"
              />
            </div>
            {/* <!--23 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["winter.jpeg"]}
                className="block w-full"
                alt="Climber on steep ice"
              />
            </div>
            {/* <!--24 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["uphill.jpg"]}
                className="block w-full"
                alt="Distant view of climbers hiking up snow slope"
              />
            </div>
            {/* <!--25 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["slopes.jpg"]}
                className="block w-full"
                alt="Climber on sloping terrain"
              />
            </div>
            {/* <!--26 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["waterfall.jpeg"]}
                className="block w-full"
                alt="Climber on frozen waterfall"
              />
            </div>
            {/* <!--27 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["good_times.jpg"]}
                className="block w-full"
                alt="Skiers hiking up a slope smiling"
              />
            </div>
            {/* <!--28 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["lumpy.jpeg"]}
                className="block w-full"
                alt="Two smiling climbers with Longs Peak in background"
              />
            </div>
            {/* <!--29 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["steep_ice.jpg"]}
                className="block w-full"
                alt="Ice climber on steep ice"
              />
            </div>
            {/* <!--30 item--> */}
            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
            >
              <img
                src={images["pedestal.jpg"]}
                className="block w-full"
                alt="Climbers smiling on small summit"
              />
            </div>
          </div>
          {/* <!--Carousel controls - prev item--> */}
          <button
            className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="prev"
          >
            <span className="inline-block h-8 w-8">
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          {/* <!--Carousel controls - next item--> */}
          <button
            className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleControls"
            data-te-slide="next"
          >
            <span className="inline-block h-8 w-8">
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </div>
      {/* End of carousel */}
      <div className="w-full h-full my-10">
        <div
          style={{ backgroundImage: `url(${images["light.jpeg"]})` }}
          className="bg-cover bg-no-repeat h-full w-full"
        >
          <div className="flex flex-col w-1/2">
            {reviews ? (
              reviews.map(review => (
                <div key={review.id} className="px-10 py-10">
                  <blockquote className="relative bg-white bg-opacity-20 rounded-xl p-1">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-300"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="relative z-10">
                      <p className="text-black sm:text-xl">
                        <em>{review.date}</em>
                        <br />
                        <em>
                          {review.comment} -- {review.client.full_name}
                        </em>
                      </p>
                    </div>
                  </blockquote>
                </div>
              ))
            ) : (
              <p>Loading reviews...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
