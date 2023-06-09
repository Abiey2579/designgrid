import * as uriPaths from "../assets/data/uriPaths";
import { Link } from "react-router-dom";
import StructuredCurriculum from "../assets/images/structured-curriculum.jpg";
import EngagingLessons from "../assets/images/engaging-lessons.jpg";
import HandsOnProject from "../assets/images/hands-on-project.jpg";
import SupportiveCommunity from "../assets/images/supportive-community.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const LearningSystem = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 md:my-20 my-16 flex flex-col">
      <div className="max-w-[527px] m-auto text-center">
        <h1 className="text-dgDarkPurple lg:text-5xl md:text-5xl text-4xl font-bold mb-6">
          Explore Our <br /> Learning System
        </h1>
        <p className="text-dgDarkPurple mb-6">
          Experience our learning system with a structured curriculum, engaging
          lessons, hands-on projects, and a supportive community.
        </p>
      </div>
      <div className="grid mx-auto justify-evenly lg:grid-cols-2 md:grid-cols-1 grid-cols-1 place-items-center gap-6">
        <div className="flex flex-row items-center justify-center bg-dgLightPurple max-w-[452px] h-[213px] rounded">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold text-dgDarkPurple">
              Structured Curriculum
            </h5>
            <p className="font-normal text-dgDarkPurple_Opacity">
              Our Learning System provides a meticulously structured curriculum,
              guiding students through the essential concepts
            </p>
          </div>
          <div
            className="min-w-[180px] min-h-[213px] lg:flex md:flex hidden rounded-tr rounded-br bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${StructuredCurriculum})` }}
          />
        </div>
        <div className="flex flex-row items-center justify-center bg-dgDarkPurple max-w-[452px] h-[213px] rounded">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold text-dgLightPurple">
              Engaging Lessons
            </h5>
            <p className="font-normal text-dgLightPurple">
              We believe in the power of interactive and engaging lessons to
              enhance the learning experience.
            </p>
          </div>
          <div
            className="min-w-[180px] min-h-[213px] lg:flex md:flex hidden rounded-tr rounded-br bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${EngagingLessons})` }}
          />
        </div>
        <div className="flex flex-row items-center justify-center bg-dgDarkPurple max-w-[452px] h-[213px] rounded">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold text-dgLightPurple">
              Hands-On Projects
            </h5>
            <p className="font-normal text-dgLightPurple">
              Our Learning System emphasizes hands-on learning by providing
              numerous project opportunities throughout the curriculum.
            </p>
          </div>
          <div
            className="min-w-[180px] min-h-[213px] lg:flex md:flex hidden rounded-tr rounded-br bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${HandsOnProject})` }}
          />
        </div>
        <div className="flex flex-row items-center justify-center bg-dgLightPurple max-w-[452px] h-[213px] rounded">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold text-dgDarkPurple">
              Supportive Community
            </h5>
            <p className="font-normal text-dgDarkPurple_Opacity">
              We foster a supportive community within our platform, enabling
              students to connect, and learn from their peers.
            </p>
          </div>
          <div
            className="min-w-[180px] min-h-[213px] lg:flex md:flex hidden rounded-tr rounded-br bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${SupportiveCommunity})` }}
          />
        </div>
      </div>
      <div className=" text-center mt-10">
        <Link to={uriPaths.SIGN_UP}>
          <span
            className={`bg-dgDarkPurple inline-block px-6 py-3 font-medium text-dgLightPurple rounded text-base`}
          >
            <span>Now Let's Get Started</span>
            <ArrowRightCircleIcon className="w-6 text-dgLightPurple ml-4 inline-block" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LearningSystem;
