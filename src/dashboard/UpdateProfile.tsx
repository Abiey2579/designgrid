import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import * as uriPaths from "../assets/data/uriPaths";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../assets/config/functions";
import ToastSuccess from "../components/ToastSuccess";
import ToastWarning from "../components/ToastWarning";
import Spinner from "../components/Spinner";
import {
  database,
  storage,
  PROFILE_PICTURE_BUCKET,
  USER_PROFILE_COLLECTION,
  DATABASE_ID,
} from "../assets/config/appwrite-auth";
import { ID, Query } from "appwrite";
import { AVATAR } from "../assets/data/constants";

type FetchedUser = {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  email: string;
  name: string;
};

type UserProfileData = {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  country?: string;
  dob?: string;
  phone_number?: string;
};

const UpdateProfile = () => {
  const [country, setCountry] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const navigate = useNavigate();
  const [preventView, setPreventView] = useState<boolean>(true);
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);
  const [requiredFieldsToast, setrequiredFieldsToast] =
    useState<boolean>(false);
  const [saveChangesSpinner, setSaveChangesSpinner] = useState<boolean>(false);
  const [saveProfilePictureSpinner, setSaveProfilePictureSpinner] =
    useState<boolean>(false);

  const [userData, setUserData] = useState<FetchedUser>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [profileImageSuccess, setProfileImageSuccess] =
    useState<boolean>(false);
  const [profileImageError, setProfileImageError] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const user = await account.get();
        const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
        const existingFile = files.files.find(
          (file) => file.name === user?.$id
        );

        if (existingFile) {
          const previewLink = await storage.getFilePreview(
            PROFILE_PICTURE_BUCKET,
            existingFile.$id
          );
          setProfileImage(previewLink.href);
        } else {
          setProfileImage(AVATAR);
        }
      } catch (err) {
        setProfileImageError(true);
        console.log(err);
      }
    };

    getProfilePicture();

    const checkSession = async () => {
      try {
        await account.getSession("current");
        const user = await account.get();
        const searchResponse = await database.listDocuments(
          DATABASE_ID,
          USER_PROFILE_COLLECTION,
          [Query.equal("uid", user.$id), Query.limit(1)]
        );

        const data = searchResponse.documents;

        if (data.length > 0) {
          const userProfileData = data[0] as UserProfileData;
          setPhoneNumber(userProfileData.phone_number ?? "");
          setDOB(userProfileData.dob ?? "");
          setCountry(userProfileData.country ?? "");
        }

        setPreventView(false);
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
      phoneNumber.trim() === "" ||
      DOB.trim() === ""
    ) {
      setrequiredFieldsToast(true);
      return;
    }
    setSaveChangesSpinner(true);
    try {
      const promise = await updateProfile(
        {
          country: country,
          dob: DOB,
          phone_number: phoneNumber,
        },
        userData?.$id ?? ""
      );

      if (promise !== null) {
        setSuccessToast(true);
        setSaveChangesSpinner(false);
      } else {
        setErrorToast(true);
        setSaveChangesSpinner(false);
      }
    } catch (error) {
      setErrorToast(true);
      setSaveChangesSpinner(false);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setSaveProfilePictureSpinner(true);
      const reader = new FileReader();

      reader.onload = async () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(selectedFile);

      // Check if the file already exists
      try {
        if (userData?.$id) {
          const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
          const existingFile = files.files.find(
            (file) => file.name === userData?.$id
          );

          if (existingFile) {
            // Delete the existing file
            await storage.deleteFile(PROFILE_PICTURE_BUCKET, existingFile.$id);
          }

          // Upload the new file
          const file = new File([selectedFile], userData?.$id);
          const fileId = await storage.createFile(
            PROFILE_PICTURE_BUCKET,
            ID.unique(),
            file
          );

          const previewLink = await storage.getFilePreview(
            PROFILE_PICTURE_BUCKET,
            fileId.$id
          );

          // Handle the successful file upload
          setProfileImageSuccess(true);
          setSaveProfilePictureSpinner(false);
          setProfileImage(previewLink.href);
        }
      } catch (error) {
        // Handle any errors that occur during the file upload
        setProfileImageError(true);
        setSaveProfilePictureSpinner(false);
      }
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
      {profileImageSuccess && (
        <ToastSuccess
          title="Profile Picture Uploaded"
          close={() => setProfileImageSuccess(false)}
        />
      )}
      {profileImageError && (
        <ToastWarning
          title="Error Fetching Profile Picture"
          close={() => setProfileImageError(false)}
        />
      )}
      {preventView === false ? (
        <React.Fragment>
          {userData && (
            <Navbar
              pageURI={uriPaths.UPDATE_PROFILE}
              userData={userData}
              profilePicture={profileImage}
            />
          )}
          <div className="lg:px-24 md:px-10 px-6 max-w-4xl mx-auto my-16">
            <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              Profile
            </h1>
            <div className="flex items-center gap-5 mb-14">
              <div className=" border-2 border-dgPurple border-spacing-1 p-1 rounded-full">
                <div
                  className="profile-picture w-[132px] h-[132px] bg-center bg-no-repeat bg-cover rounded-full"
                  style={{
                    backgroundImage: `url(${profileImage ?? imagePreview})`,
                  }}
                ></div>
              </div>

              <div className="flex md:flex-row flex-col gap-5">
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={(e) => handleFileChange(e)}
                  multiple={false}
                />
                <button
                  onClick={handleButtonClick}
                  className="bg-dgPurple select-none rounded border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple"
                >
                  {saveProfilePictureSpinner === true ? (
                    <Spinner className="w-4 h-4 fill-dgPurple text-dgWhite" />
                  ) : (
                    "Change"
                  )}
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
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full text-dgDarkPurple "
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
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full text-dgDarkPurple "
                />
              </div>
              <div>
                <span className="mb-1 block">Country *</span>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] md:min-w-[340px] w-full text-dgDarkPurple"
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
                  value={DOB}
                  type="date"
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full text-dgDarkPurple "
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
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full text-dgDarkPurple "
                />
              </div>
              <div>
                <span className="mb-1 block">Phone Number *</span>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  className="border border-slate-400 rounded font-medium outline-0 px-3 py-2 md:min-w-[340px] w-full text-dgDarkPurple "
                />
              </div>
            </div>
            <button
              onClick={() => handleUpdateProfile()}
              className="bg-dgPurple select-none rounded border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple"
            >
              {saveChangesSpinner ? (
                <Spinner className="w-4 h-4 fill-dgPurple text-dgWhite" />
              ) : (
                "Save changes"
              )}
            </button>
          </div>
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default UpdateProfile;
