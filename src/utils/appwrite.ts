import { Account, Client, Databases, Storage } from "appwrite";

// import { APPWRITE_ID } from '@/app.constants';

export const client = new Client();
export const account = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('6596a39b4557c31fbc67');