import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import UserProfile from "../assets/svgs/user-profile-lg.svg";
import * as uriPaths from "../assets/data/uriPaths";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../assets/config/functions";
import ToastSuccess from "../components/ToastSuccess";
import ToastWarning from "../components/ToastWarning";
import Spinner from "../components/Spinner";

const UpdateProfile = () => {
  const [country, setCountry] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [phomeNumber, setPhomeNumber] = useState<string>("");
  const navigate = useNavigate();
  const [preventView, setPreventView] = useState<boolean>(true);
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);
  const [requiredFieldsToast, setrequiredFieldsToast] =
    useState<boolean>(false);
  const [spin, setSpin] = useState<boolean>(false);

  type FetchedUser = {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    email: string;
    name: string;
  };
  const [userData, setUserData] = useState<FetchedUser>();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await account.getSession("current");
        setPreventView(false);
        const user = await account.get();
        setUserData(user);
      } catch (err) {
        navigate(uriPaths.SIGN_UP);
      }
    };
    checkSession();
  }, []);

  const handleUpdateProfile = async () => {
    if (
      country.trim() === "" ||
      phomeNumber.trim() === "" ||
      DOB.trim() === ""
    ) {
      setrequiredFieldsToast(true);
      return;
    }
    setSpin(true);
    try {
      const promise = await updateProfile(
        {
          country: country,
          dob: DOB,
          phone_number: phomeNumber,
        },
        userData?.$id ?? ""
      );

      if (promise !== null) {
        setSuccessToast(true);
        setSpin(false);
      } else {
        setErrorToast(true);
        setSpin(false);
      }
    } catch (error) {
      setErrorToast(true);
      setSpin(false);
    }
  };
  return (
    <React.Fragment>
      {successToast && (
        <ToastSuccess
          title="Account Updated Successfully"
          close={() => setSuccessToast(false)}
        />
      )}
      {errorToast && (
        <ToastWarning
          title="An unexpected error occured"
          close={() => setErrorToast(false)}
        />
      )}
      {requiredFieldsToast && (
        <ToastWarning
          title="Fields with * are required"
          close={() => setrequiredFieldsToast(false)}
        />
      )}
      {preventView === false ? (
        <React.Fragment>
          <Navbar pageURI={uriPaths.UPDATE_PROFILE} userName={userData?.name} />
          <div className="lg:px-24 md:px-10 px-6 max-w-4xl mx-auto my-16">
            <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              Profile
            </h1>
            <div className="flex items-center gap-5 mb-14">
              <img src={UserProfile} alt="UserProfile" />
              <div className="flex md:flex-row flex-col gap-5">
                <button className="bg-dgPurple select-none rounded-full border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple">
                  Change
                </button>
                <button className="bg-dgLightPurple select-none rounded-full border border-slate-400 outline-0 px-4 py-2 text-base font-medium text-dgDarkPurple">
                  Remove
                </button>
              </div>
            </div>
            <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              General
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
              <div>
                <span className="mb-1 block">First Name</span>
                <input
                  type="text"
                  readOnly
                  value={
                    userData !== undefined ? userData.name.split(" ")[0] : ""
                  }
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple "
                />
              </div>
              <div>
                <span className="mb-1 block">Last Name</span>
                <input
                  type="text"
                  readOnly
                  value={
                    userData !== undefined
                      ? userData.name
                          .split(" ")
                          .slice(1, userData.name.split(" ").length)
                          .join(" ")
                      : ""
                  }
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple "
                />
              </div>
              <div>
                <span className="mb-1 block">Country *</span>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple"
                >
                  <option value="">Choose</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Chad">Chad</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Uganda">Uganda</option>
                </select>
              </div>
              <div>
                <span className="mb-1 block">Date of Birth *</span>
                <input
                  onChange={(e) => setDOB(e.target.value)}
                  type="date"
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple "
                />
              </div>
            </div>
            <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              Security
            </h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 mb-8">
              <div>
                <span className="mb-1 block">Email</span>
                <input
                  type="email"
                  readOnly
                  value={userData !== undefined ? userData.email : ""}
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple "
                />
              </div>
              <div>
                <span className="mb-1 block">Phone Number *</span>
                <input
                  onChange={(e) => setPhomeNumber(e.target.value)}
                  type="text"
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full bg-dgLightPurple text-dgDarkPurple "
                />
              </div>
            </div>
            <button
              onClick={() => handleUpdateProfile()}
              className="bg-dgPurple select-none rounded-full border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple"
            >
              {spin ? (
                <Spinner className="w-4 h-4 fill-dgPurple text-dgWhite" />
              ) : (
                "Save changes"
              )}
            </button>
          </div>
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdateProfile;
