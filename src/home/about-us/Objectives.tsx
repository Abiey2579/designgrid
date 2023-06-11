import {
  ListBulletIcon,
  HandThumbUpIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
const Objectives = () => {
  return (
    <div className="lg:px-24 md:px-10 px-3 md:my-20 my-16 flex flex-col">
      <div className="mb-6">
        <p className="text-dgDarkPurple_Opacity text-base font-bold tracking-widest">
          MISSION & GOAL
        </p>
        <h1 className="text-dgDarkPurple lg:text-5xl md:text-5xl text-4xl font-bold my-6">
          Our Objectives
        </h1>
        <p className="text-dgDarkPurple max-w-[527px]">
          Our objectives: Empower learners, foster collaboration, and fuel
          knowledge sharing for educational growth and idea generation.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <div className="lg:col-span-2 md:col-span-2 col-span-1 bg-dgDarkPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgLightPurple_Opacity grid place-items-center mb-8">
            <ListBulletIcon className="w-6 text-dgLightPurple" />
          </div>
          <h3 className="text-dgLightPurple text-xl font-bold mb-4">
            Our Objectives
          </h3>
          <p className="text-dgLightPurple">
            Our objectives revolve around empowering learners to take control of
            their educational journey, fostering a collaborative environment
            where knowledge is shared and ideas flourish, staying current with
            the ever-evolving trends and technologies.
          </p>
        </div>
        <div className="bg-dgLightPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgPurple_Opacity grid place-items-center mb-8">
            <HandThumbUpIcon className="w-6 text-dgPurple" />
          </div>
          <h3 className="text-dgDarkPurple text-xl font-bold mb-4">
            Our Mission
          </h3>
          <p className="text-dgDarkPurple_Opacity">
            We empower aspiring frontend developers with the knowledge, skills,
            and resources to succeed in the digital landscape.
          </p>
        </div>
        <div className="bg-dgLightPurple rounded p-6">
          <div className="w-12 h-12 rounded bg-dgPurple_Opacity grid place-items-center mb-8">
            <CheckBadgeIcon className="w-6 text-dgPurple" />
          </div>
          <h3 className="text-dgDarkPurple text-xl font-bold mb-4">Our Goal</h3>
          <p className="text-dgDarkPurple_Opacity">
            We aim to foster a vibrant learning community, offer comprehensive
            resources, and equip individuals to thrive in the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
