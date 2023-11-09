import React, { useContext } from "react";
import { CurrentUserContext } from "./App.js";
import {
  TEPopover,
  TEPopoverToggler,
  TEPopoverContent,
  TERipple,
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
  require.context("./trip_images", false, /\.(png|jpe?g|svg)$/)
);

function Trips() {
  const { trips } = useContext(CurrentUserContext);
  const image1 = images["1.jpg"];
  const image2 = images["2.jpeg"];
  const image3 = images["3.jpg"];
  const image4 = images["4.jpeg"];
  const image5 = images["5.jpg"];
  const image6 = images["6.jpg"];
  const image7 = images["7.jpg"];
  const image8 = images["8.jpg"];
  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-4">
      {trips ? (
        trips.map((trip, index) => (
          <div
            key={trip.id}
            className="relative bg-white border shadow-sm rounded-full "
          >
            <img
              className="w-full h-auto rounded-full"
              src={imageArray[index]}
              alt="Mountain Image"
            />
            <div className="absolute top-0 left-0 right-0">
              <div className="p-4 md:p-5">
                <h3 className="text-2xl font-bold text-gray-800 bg-white bg-opacity-50">
                  {trip.name}
                </h3>
              </div>
            </div>
            <TEPopover className="py-10 md:text-center" trigger="focus">
              <TERipple rippleColor="light">
                <TEPopoverToggler className="inline-block rounded bg-hunter px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-parchment shadow-[0_4px_9px_-4px_#60A86E] transition duration-150 ease-in-out hover:bg-hunter-dark focus:bg-hunter-dark focus:outline-none focus:ring-0 active:bg-hunter-dark">
                  Learn More!
                </TEPopoverToggler>
              </TERipple>

              <TEPopoverContent>
                <div className="p-4 text-[#212529] rounded-b-lg shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)] bg-white bg-clip-padding border border-t-0 border-neutral-100 empty:hidden">
                  {trip.description}
                </div>
              </TEPopoverContent>
            </TEPopover>
          </div>
        ))
      ) : (
        <p>Loading trips...</p>
      )}
    </div>
  );
}

export default Trips;
