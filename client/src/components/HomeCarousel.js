import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

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

function HomeCarousel() {
  return (
    <>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["kiddos.jpg"]}
              className="block w-full"
              alt="Selfie with guide and climbing kiddo"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["diamond_steep.jpg"]}
              className="block w-full"
              alt="Looking down at climbing on steep face"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["boarder.jpg"]}
              className="block w-full"
              alt="Snowboarder on open powder field"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={4}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["thumbs.jpg"]}
              className="block w-full"
              alt="Climber on a ledge giving two thumbs up"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={5}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["shrope.jpg"]}
              className="block w-full"
              alt="Guide short-roping two clients on snow"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={6}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["longs.jpeg"]}
              className="block w-full"
              alt="Person climbing with Longs Peak in background"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={7}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["steep_skinning.jpg"]}
              className="block w-full"
              alt="Skiers walking uphill with smiles"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={8}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["rappel.jpg"]}
              className="block w-full"
              alt="Climber on a free-hanging rappel"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={9}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["bubbles.jpeg"]}
              className="block w-full"
              alt="Ice climber above ravine"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={10}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["summit.jpeg"]}
              className="block w-full"
              alt="Climbers displaying sign on summit"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={11}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["capable.jpeg"]}
              className="block w-full"
              alt="Climber on steep snow with snowy mountains in background"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={12}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["petit.jpeg"]}
              className="block w-full"
              alt="Climber on steep face above lake"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={13}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["rainier.jpg"]}
              className="block w-full"
              alt="Climber crosses snow slope at sunrise"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={14}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["smiles.jpg"]}
              className="block w-full"
              alt="Smiling climbers"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={15}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["dim.jpg"]}
              className="block w-full"
              alt="Ice climber"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={16}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["terrain.jpg"]}
              className="block w-full"
              alt="Climber with mountain range in background"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={17}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["ridge.jpg"]}
              className="block w-full"
              alt="Climbers on snowy ridge"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={18}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["beginner.jpg"]}
              className="block w-full"
              alt="Smiling climber in the sun"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={19}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["mini.jpeg"]}
              className="block w-full"
              alt="Ice climber on steep terrain"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={20}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["free_hanging.jpg"]}
              className="block w-full"
              alt="Climber hanging on by only one arm"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={21}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["ski.jpg"]}
              className="block w-full"
              alt="Skier making turns"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={22}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["diamond_pano.jpg"]}
              className="block w-full"
              alt="Climbers on a cliff face over lakes"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={23}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["winter.jpeg"]}
              className="block w-full"
              alt="Climber on steep ice"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={24}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["uphill.jpg"]}
              className="block w-full"
              alt="Distant view of climbers hiking up snow slope"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={25}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["slopes.jpg"]}
              className="block w-full"
              alt="Climber on sloping terrain"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={26}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["waterfall.jpeg"]}
              className="block w-full"
              alt="Climber on frozen waterfall"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={27}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["good_times.jpg"]}
              className="block w-full"
              alt="Skiers hiking up a slope smiling"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={28}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["lumpy.jpeg"]}
              className="block w-full"
              alt="Two smiling climbers with Longs Peak in background"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={29}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["steep_ice.jpg"]}
              className="block w-full"
              alt="Ice climber on steep ice"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={30}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={images["pedestal.jpg"]}
              className="block w-full"
              alt="Climbers smiling on small summit"
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}

export default HomeCarousel;
