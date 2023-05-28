import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("645dd92a90424d7387a7"); // Your project ID

export const account = new Account(client);
