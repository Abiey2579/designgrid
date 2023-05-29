import * as React from "react";
import Navbar from "./Navbar";
import UserProfile from "../assets/svgs/user-profile-lg.svg";

const UpdateProfile = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="lg:px-24 md:px-10 px-6 max-w-4xl mx-auto my-16">
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">Profile</h1>
        <div className="flex items-center gap-5 mb-14">
          <img src={UserProfile} alt="UserProfile" />
          <button className="bg-dgPurple rounded-full border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple">
            Change
          </button>
          <button className="bg-dgLightPurple rounded-full border border-slate-400 outline-0 px-4 py-2 text-base font-medium text-dgDarkPurple">
            Remove
          </button>
        </div>
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">General</h1>
        <div className="grid grid-cols-2 gap-5 mb-8">
          <div>
            <span className="mb-1 block">First Name</span>
            <input
              type="text"
              className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 min-w-[340px] bg-dgLightPurple text-dgDarkPurple"
            />
          </div>
          <div>
            <span className="mb-1 block">Last Name</span>
            <input
              type="text"
              className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 min-w-[340px] bg-dgLightPurple text-dgDarkPurple"
            />
          </div>
          <div>
            <span className="mb-1 block">Country</span>
            <select className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] min-w-[340px] bg-dgLightPurple text-dgDarkPurple">
              <option value="">Choose</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Chad">Chad</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Uganda">Uganda</option>
            </select>
          </div>
          <div>
            <span className="mb-1 block">Date of Birth</span>
            <input
              type="date"
              className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 min-w-[340px] bg-dgLightPurple text-dgDarkPurple"
            />
          </div>
        </div>
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">Security</h1>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <span className="mb-1 block">Email</span>
            <input
              type="email"
              className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 min-w-[340px] bg-dgLightPurple text-dgDarkPurple"
            />
          </div>
          <div>
            <span className="mb-1 block">Phone Number</span>
            <input
              type="text"
              className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 min-w-[340px] bg-dgLightPurple text-dgDarkPurple"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateProfile;
