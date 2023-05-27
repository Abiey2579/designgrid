import * as React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 bg-dgPurple py-12 text-center">
      <h2 className="text-dgLightPurple lg:text-5xl md:text-4xl text-3xl font-bold mb-6 max-w-2xl m-auto">
        Join <span className="text-dgDarkPurple">DesignGrid</span> Community
      </h2>
      <p className="text-dgLightPurple text-base mb-6 max-w-2xl m-auto leading-relaxed">
        Join our community and embark on your frontend development journey with
        like-minded individuals. Experience collaboration, inspiration, and
        support as you become a frontend development expert.
      </p>
      <Link to={"/signup"}>
        <span className="bg-dgLightPurple px-10 py-4 font-normal text-dgDarkPurple rounded-full text-base block w-fit m-auto">
          Register
        </span>
      </Link>
    </div>
  );
};

export default CTA;
