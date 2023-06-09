import { TrophyIcon, BookOpenIcon, UsersIcon } from "@heroicons/react/24/solid";
const LikeSchool = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 md:my-20 my-16 flex flex-col">
      <div>
        <h1 className="text-dgDarkPurple lg:text-5xl md:text-5xl text-4xl font-bold mb-6">
          Like School, <br /> Unlike any School
        </h1>
        <p className="text-dgDarkPurple mb-6 max-w-[527px]">
          Escape the limitations of traditional online bootcamps with our unique
          and enriching learning journey.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="lg:col-span-2 md:col-span-2 col-span-1 bg-dgDarkPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgLightPurple_Opacity grid place-items-center mb-8">
            <TrophyIcon className="w-6 text-dgLightPurple" />
          </div>
          <h3 className="text-dgLightPurple text-xl font-bold mb-4">
            Don't Let Learning Gap Hold You Back
          </h3>
          <p className="text-dgLightPurple">
            Our Learning System breaks down barriers to success in frontend
            development. With a well-designed curriculum, we ensure that
            learners can seamlessly progress from foundational topics to more
            advanced concepts.
          </p>
        </div>
        <div className="bg-dgLightPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgPurple_Opacity grid place-items-center mb-8">
            <BookOpenIcon className="w-6 text-dgPurple" />
          </div>
          <h3 className="text-dgDarkPurple text-xl font-bold mb-4">
            Learn by Reading Blogs
          </h3>
          <p className="text-dgDarkPurple_Opacity">
            Stay informed and up-to-date on the latest frontend development
            trends with our curated collection of insightful blogs.
          </p>
        </div>
        <div className="bg-dgLightPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgPurple_Opacity grid place-items-center mb-8">
            <UsersIcon className="w-6 text-dgPurple" />
          </div>
          <h3 className="text-dgDarkPurple text-xl font-bold mb-4">
            Join Dev Community
          </h3>
          <p className="text-dgDarkPurple_Opacity">
            Join our thriving dev community and connect with like-minded
            individuals passionate about frontend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeSchool;
