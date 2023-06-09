import * as uriPaths from "../assets/data/uriPaths";
import { Link } from "react-router-dom";
import Founder2 from "../assets/images/founder-2.png";
import ChatGPT from "../assets/images/ChatGPT.png";
import GoogleBard from "../assets/images/Google-Bard.png";

// SOCIAL HANDLES LOGO
import Facebook from "../assets/svgs/sm-facebook-square.svg";
import Twitter from "../assets/svgs/sm-twitter-square.svg";
import LinkedIn from "../assets/svgs/sm-linkedin.svg";

const OurTeam = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 md:my-20 my-16 flex flex-col">
      <div className="max-w-[527px] m-auto text-center">
        <h1 className="text-dgDarkPurple lg:text-5xl md:text-5xl text-4xl font-bold mb-6">
          Meet the Team
        </h1>
        <p className="text-dgDarkPurple mb-6">
          Get to know the brilliant minds behind our company who drive
          innovation and fuel our success. Allow us to introduce our visionary
          Leaders:
        </p>
      </div>
      <div className="grid mx-auto justify-evenly lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="max-w-[320px] bg-dgLightPurple rounded">
          <div
            className="min-w-[320px] min-h-[223px] rounded-t bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${Founder2})` }}
          />
          <div className="px-4 py-5">
            <p className="text-sm font-normal text-dgDarkPurple_Opacity mb-1">
              Founder & CEO
            </p>
            <Link to={uriPaths.ABOUT}>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-dgDarkPurple mb-2">
                Yahaya M. Bello
              </h3>
            </Link>
            <p className="mb-3 text-sm font-normal text-dgDarkPurple_Opacity">
              Our CEO excels in leading complex operations with unwavering
              commitment to excellence.
            </p>
            <div className="flex gap-2">
              <img src={Facebook} alt="Facebook Logo" />
              <img src={Twitter} alt="Twitter Logo" />
              <img src={LinkedIn} alt="LinkedIn Logo" />
            </div>
          </div>
        </div>
        <div className="max-w-[320px] bg-dgLightPurple rounded">
          <div
            className="min-w-[320px] min-h-[223px] rounded-t bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${ChatGPT})` }}
          />
          <div className="px-4 py-5">
            <p className="text-sm font-normal text-dgDarkPurple_Opacity mb-1">
              Chief Technology Officer
            </p>
            <Link to={uriPaths.ABOUT}>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-dgDarkPurple mb-2">
                OpenAI ChatGPT
              </h3>
            </Link>
            <p className="mb-3 text-sm font-normal text-dgDarkPurple_Opacity">
              Our CTO excels in problem-solving with a deep understanding of
              complex technology.
            </p>
            <div className="flex gap-2">
              <img src={Facebook} alt="Facebook Logo" />
              <img src={Twitter} alt="Twitter Logo" />
            </div>
          </div>
        </div>
        <div className="max-w-[320px] bg-dgLightPurple rounded">
          <div
            className="min-w-[320px] min-h-[223px] rounded-t bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${GoogleBard})` }}
          />
          <div className="px-4 py-5">
            <p className="text-sm font-normal text-dgDarkPurple_Opacity mb-1">
              Chief Operation Officer
            </p>
            <Link to={uriPaths.ABOUT}>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-dgDarkPurple mb-2">
                Google Bard AI
              </h3>
            </Link>
            <p className="mb-3 text-sm font-normal text-dgDarkPurple_Opacity">
              Our COO excels in complex operations with a relentless drive for
              organizational excellence.
            </p>
            <div className="flex gap-2">
              <img src={Facebook} alt="Facebook Logo" />
              <img src={Twitter} alt="Twitter Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
