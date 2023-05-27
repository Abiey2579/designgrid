import * as React from "react";
import LearningPathImage from "../assets/svgs/LearningPathImage.svg";
import Button from "../components/Button";

const LearningPath = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen md:my-20 my-16 flex gap-20 lg:flex-row md:flex-col flex-col justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold lg:text-5xl md:text-4xl text-3xl mb-6">
          Learning Path
        </h2>
        <p className="text-dgDarkPurple_Opacity text-base mb-6 leading-relaxed">
          Embark on our meticulously designed Learning Path, a comprehensive
          guide that transforms beginners into proficient frontend developers.
          Our Learning Path is an ultimate resource for mastering this exciting
          field.
        </p>
        <Button
          name="Explore Learning Path"
          className="block w-fit"
          href="/frontend"
        />
      </div>
      <img src={LearningPathImage} alt="LearningPathImage" className="w-fit" />
    </div>
  );
};

export default LearningPath;
