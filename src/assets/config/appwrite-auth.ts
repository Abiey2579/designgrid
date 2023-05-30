import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("645dd92a90424d7387a7"); // Your project ID

export const account = new Account(client);
export const database = new Databases(client);

// DATABASE ID
export const DATABASE_ID = "6474a3626ea4be2e51ac";

// COLLECTION IDs
export const USER_PROFILE_COLLECTION = "6474a7e3c87dec5f0dd0";
export const ONBOARDING_QA_COLLECTION = "6474a391276e9bd239c5";