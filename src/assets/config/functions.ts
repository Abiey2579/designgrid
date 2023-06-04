import * as Model from "../Model/model";
import {
  account,
  database,
  DATABASE_ID,
  USER_PROFILE_COLLECTION,
  ONBOARDING_QA_COLLECTION,
  FRONTEND_101_TOC,
} from "./appwrite-auth";
import { ID, Query } from "appwrite";
import { frontend101TOC } from "../TOC/frontend101TOC";
import { firestore, FRONTEND_101_TOC_COLLECTION } from "./firebase-db";
import { doc, setDoc } from "firebase/firestore";

export const createUserProfile = async (DataModel: Model.CreateUserProfile) => {
  try {
    await database.createDocument(
      DATABASE_ID,
      USER_PROFILE_COLLECTION,
      ID.unique(),
      {
        uid: DataModel.uid,
        country: "",
        dob: "",
        phone_number: "",
      }
    );

    await database.createDocument(DATABASE_ID, FRONTEND_101_TOC, ID.unique(), {
      uid: DataModel.uid,
    });

    return true;
  } catch (err) {
    console.log(err);
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

export const enrollFrontend101 = async (DataModel: Model.CreateUserProfile) => {
  try {
    // Get a reference to the document you want to set
    const docRef = doc(firestore, FRONTEND_101_TOC_COLLECTION, DataModel.uid);
    await setDoc(docRef, frontend101TOC, { merge: true });
    return true;
  } catch (error) {
    return null;
  }
};

export const updateProfile = async (
  DataModel: Model.UpdateProfile,
  uid: string
) => {
  try {
    // Find the document using the unique attribute
    const searchResponse = await database.listDocuments(
      DATABASE_ID,
      USER_PROFILE_COLLECTION,
      [Query.equal("uid", uid)]
    );

    if (searchResponse.documents.length === 0) {
      return null;
    }

    const documentId = searchResponse.documents[0].$id;

    const promise = await database.updateDocument(
      DATABASE_ID,
      USER_PROFILE_COLLECTION,
      documentId,
      DataModel
    );

    return promise;
  } catch (error) {
    return error;
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

export const checkIfUserExist = async (uid: string) => {
  try {
    // Find the document using the unique attribute
    const searchResponse = await database.listDocuments(
      DATABASE_ID,
      USER_PROFILE_COLLECTION,
      [Query.equal("uid", uid)]
    );

    if (searchResponse.documents.length === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const checkIfCompletedOnboarding = async (uid: string) => {
  try {
    // Find the document using the unique attribute
    const searchResponse = await database.listDocuments(
      DATABASE_ID,
      ONBOARDING_QA_COLLECTION,
      [Query.equal("uid", uid)]
    );

    if (searchResponse.documents.length === 1) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

/*


  welcome: [
    {
      lesson_id: "",
      lesson_name: "",
      active: false,
      completed: false,
    }
  ]

*/
