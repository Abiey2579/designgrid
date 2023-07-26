import { useState } from "react";
import Topic from "./Topic";
import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import { UserTOCProps, PaymentReference } from "../assets/Model/model";
import { PaystackButton } from "react-paystack";
import {
  updateFullPaymentStatus,
  updatePartialPaymentStatus,
} from "../assets/config/functions";
import { FetchedUser, UserProfileData } from "../assets/Model/model";
import ToastWarning from "../components/ToastWarning";
import ToastSuccess from "../components/ToastSuccess";

const Content = (props: {
  userData: FetchedUser;
  userProfile: UserProfileData;
  profilePicture: string;
  tableOfContent: UserTOCProps;
}) => {
  const [errorToast, setErrorToast] = useState<string>("");
  const [successToast, setSuccessToast] = useState<string>("");

  const calculateProgress = (lessons: any[]) => {
    const totalLessons = lessons.length;
    const completedLessons = lessons.filter(
      (lesson) => lesson.completed === true
    ).length;
    const progressPercentage = (completedLessons / totalLessons) * 100;
    return progressPercentage; // Round the percentage to 2 decimal places
  };

  const sortedTOC = Object.keys(props.tableOfContent).sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return aNum - bNum;
  });

  const fullPaymentConfig = {
    reference: new Date().getTime().toString(),
    email: props.userData.email,
    amount: 2500 * 100,
    publicKey: "pk_test_2976e7cbe3bbfd115e690eb0d7c2b5ef4b7ec71c",
  };

  const partialPaymentConfig = {
    reference: new Date().getTime().toString(),
    email: props.userData.email,
    amount: props.userProfile.partial === true ? 1000 * 100 : 1500 * 100,
    publicKey: "pk_test_2976e7cbe3bbfd115e690eb0d7c2b5ef4b7ec71c",
  };

  const handlePaystackSuccessAction = async (reference: PaymentReference) => {
    try {
      await updateFullPaymentStatus(props.userData.$id, reference.reference);
      setSuccessToast("Congrats 🎉🎉🎉, you've paid");

      window.location.reload();
    } catch (error) {
      setErrorToast((error as Error).message);
    }
  };

  const handlePartialSuccessAction = async (reference: PaymentReference) => {
    try {
      await updatePartialPaymentStatus(props.userData.$id, reference.reference);
      setSuccessToast("Congrats 🎉🎉🎉, you've made partial payment");

      window.location.reload();
    } catch (error) {
      setErrorToast((error as Error).message);
    }
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const fullPaymentBtnProps = {
    ...fullPaymentConfig,
    text: "Full Payment",
    onSuccess: (reference: PaymentReference) =>
      handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  const partialPaymentBtnProps = {
    ...partialPaymentConfig,
    text:
      props.userProfile.partial === true
        ? "Complete Your Payment"
        : "Half Payment",
    onSuccess: (reference: PaymentReference) => {
      if (props.userProfile.partial === true) {
        handlePaystackSuccessAction(reference);
      } else {
        handlePartialSuccessAction(reference);
      }
    },
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      {errorToast && (
        <ToastWarning title={errorToast} close={() => setErrorToast("")} />
      )}
      {successToast && (
        <ToastSuccess title={successToast} close={() => setSuccessToast("")} />
      )}
      <div className="lg:px-24 md:px-10 px-3 max-w-4xl mx-auto my-16">
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">Dashboard</h1>
        <div className="flex items-center gap-5 mb-14">
          <div className=" border-2 border-dgPurple border-spacing-1 p-1 rounded-full">
            <div
              className="profile-picture w-[132px] h-[132px] bg-center bg-no-repeat bg-cover rounded-full"
              style={{
                backgroundImage: `url(${props.profilePicture})`,
              }}
            ></div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-5">
            <Link to={uriPaths.UPDATE_PROFILE}>
              <span className="bg-dgPurple rounded border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple">
                Update profile
              </span>
            </Link>
            {props.userProfile.paid === true ? (
              <p
                className="text-dgPurple font-bold underline cursor-pointer select-none py-2 "
                onClick={() => setSuccessToast("Congrats 🎉🎉🎉, you've paid")}
              >
                🎉 You've Paid
              </p>
            ) : (
              <>
                {props.userProfile.partial === true ? (
                  <PaystackButton
                    className="text-dgPurple font-bold underline py-2"
                    {...partialPaymentBtnProps}
                  />
                ) : (
                  <>
                    <PaystackButton
                      className="text-dgPurple font-bold underline py-2"
                      {...fullPaymentBtnProps}
                    />
                    <PaystackButton
                      className="text-dgPurple font-bold underline py-2"
                      {...partialPaymentBtnProps}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
          Web Development 101
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
          {sortedTOC.map((topic) => {
            const section = props.tableOfContent[topic];
            const progress = calculateProgress(section.lessons);
            const numberOfLessons = section.lessons.length;
            const numberOfCompletedLessons = section.lessons.filter(
              (lesson) => lesson.completed === true
            );
            return (
              <Topic
                key={topic}
                name={topic}
                numberOfLessons={numberOfLessons}
                numberOfCompletedLessons={numberOfCompletedLessons.length}
                percent={progress}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;
