import React from "react";

// Image import
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./about_images", false, /\.(png|jpe?g|svg)$/)
);

function About() {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-5xl mx-auto mb-20 p-4">
      <div className="flex space-x-4">
        <img
          src={images["buster1.jpg"]}
          alt="Buster Jesik above lakes in RMNP"
          className="rounded-md w-96 h-auto"
        />
        <img
          src={images["buster.jpg"]}
          alt="Buster Jesik with big walls in Yosemite"
          className="rounded-md w-96 h-auto"
        />
      </div>
      <h1 className="text-6xl font-bold text-center my-4">Buster Jesik</h1>
      <div className="flex space-x-8">
        <img
          src={images["IFMGA_International.jpg"]}
          alt="IFMGA certified mountain guide logo"
          className="rounded-full h-16 w-16 md:h-24 md:w-24"
        />
        <img
          src={images["AMGA_color.jpg"]}
          alt="AMGA certified mountain guide logo"
          className="rounded-full h-16 w-16 md:h-24 md:w-24"
        />
      </div>
      <p className="text-lg text-center">
        Buster is currently the only IFMGA/AMGA Certified Mountain Guide living
        in Estes Park.
        <br />
        <br />A native to the Front Range of Colorado, Buster Cruz Jesik began
        climbing at age 10, and has since made ascents of rock, ice, and alpine
        routes in North America, South America, Europe, and Asia. Buster was
        introduced to mountaineering through boy scouts. His troop was active in
        hiking the Colorado 14ers, backcountry skiing and rock climbing. In
        middle school Buster discovered indoor rock climbing. By age 13, he had
        made a winter ascent of the North Face of Longs Peak and began traveling
        to Ouray during the winters to climb ice. During high school, Buster
        continued to attend the Ouray Ice Fest attending clinics from world
        class ice and alpine climbers. After graduating high school in 2004
        Buster began pursuing a career as a musician while attending community
        college. After graduating with an associate’s degree he began working as
        a rock climbing guide while also teaching music lessons. Eventually his
        love of the mountains won out, and Buster became serious about mountain
        guiding.
        <br />
        <br />
        In his personal climbing, Buster has focused on pushing himself in a
        wide variety of climbing styles. He has made speed ascents of classic
        big wall routes in Yosemite, Zion, and the Black Canyon including a 9
        hour ascent of the Nose of El Capitan. He loves to spent time at the
        crag as well, consistently climbing in the 5.12 range and occasionally
        redpointing 5.13 sport routes. Ice and mixed climbing is one of Buster’s
        strong suits. He continues to visit the Ouray area on an annual basis
        and guides experienced ice climbers on many of Colorado’s most classic
        and challenging ice climbs.
        <br />
        <br />
        As an alpinist, he has summited Denali multiple times, climbed classic
        routes in Rocky Mountain National Park, the Canadian Rockies and the
        Alps, and made the first ascent of an unclimbed 17,000 foot peak in a
        seldom visited corner of the Indian Himalayas. In 2012 he was selected
        to participate in the first Alpine Mentors Program started by world
        class alpinist Steve House to train and mentor the next generation of
        alpine climbers. Closer to home he continues to guide and climb in Rocky
        Mountain National park in all seasons. As of 2023, he has 63 summits of
        Longs Peak and 38 ascents of the Diamond.
        <br />
        <br />
        As a guide, Buster loves to teach modern techniques for climbing safely
        and efficiently. He has experience coaching and training rock climbers
        who want to maximize their performance, and used these skills to lead
        the Fountain Valley High School climbing team to a state victory. He
        began his journey with professional guide training in 2007 with one of
        the last AMGA Top Rope Site Manager courses. He worked through the
        entire AMGA Mountain Guide program by earning his Rock Guide
        Certification in 2011, Alpine Guide Certification in 2016 and finally
        Ski Guide Certification in 2018. His work has taken him up and down the
        Front Range of Colorado to the classic ice climbs and backcountry skiing
        of the San Juan’s, the desert rock of Utah and Nevada, and the world
        class alpine climbing of Alaska. Buster’s calm demeanor and expertise is
        ever present, whether its sharing his enthusiasm for climbing with a
        beginner or working with an advanced climber looking to up their game.
        In 2022 Buster took on a new role instructing and mentoring aspiring
        guides as an Instructor Team Member for the American Mountain Guides
        Association.
        <br />
        <br />
        Besides being an IFMGA/AMGA Certified Mountain Guide Buster is also an
        AAI / AIARE Course Leader, AMGA SPI Provider and Instructor Team Member.
        He lives 10 minutes from the Longs Peak trail head with his wife Vanessa
        and their beloved dog, Kiley.{" "}
      </p>
    </div>
  );
}
export default About;
