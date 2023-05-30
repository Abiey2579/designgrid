import { CreateUserProfile, FinishOnboarding } from "../Model/mode";
import {
  database,
  DATABASE_ID,
  USER_PROFILE_COLLECTION,
  ONBOARDING_QA_COLLECTION,
} from "./appwrite-auth";
import { ID } from "appwrite";

export const createUserProfile = async (DataModel: CreateUserProfile) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      USER_PROFILE_COLLECTION,
      ID.unique(),
      {
        ...DataModel,
        country: "",
        dob: "",
        email: "",
        phone_number: "",
        first_name: "",
        last_name: "",
      }
    );

    return promise;
  } catch (err) {
    return null;
  }
};

export const finishOnboarding = async (DataModel: FinishOnboarding) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      ONBOARDING_QA_COLLECTION,
      ID.unique(),
      DataModel
    );

    return promise;
  } catch (err) {
    return null;
  }
};
