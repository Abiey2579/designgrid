import * as Model from "../Model/mode";
import {
  account,
  database,
  DATABASE_ID,
  USER_PROFILE_COLLECTION,
  ONBOARDING_QA_COLLECTION,
} from "./appwrite-auth";
import { ID } from "appwrite";

export const createUserProfile = async (DataModel: Model.CreateUserProfile) => {
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

export const finishOnboarding = async (DataModel: Model.FinishOnboarding) => {
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

export const updateProfile = async (DataModel: Model.UpdateProfile) => {
  try {
    const promise = await database.createDocument(
      DATABASE_ID,
      ONBOARDING_QA_COLLECTION,
      ID.unique(),
      DataModel
    );

    return promise;
  } catch (error) {
    return null;
  }
};

export const logout = () => {
  try {
    const promise = account.deleteSessions();
    return promise;
  } catch (err) {
    return null;
  }
};
