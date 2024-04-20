import { Account, Client, ID, Avatars, Databases,Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "661e7c5331426627ef06",
  databaseId: "661e7d382ba0175066ad",
  usersCollectionId: "661e7d6475bf91e817d9",
  videosCollectionID: "661e7d912fafbd035446",
  storageId: "661e7ec828cc3c31e3a4",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  // Register User
  try {
    const newAccout = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccout) throw new Error();
    const avatartURls = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      { accountId: newAccout.$id, email, username, avatars: avatartURls }
    );
    return newUser;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (e) {
    throw new Error(e);
  }
}

export const getCurrentuser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query?.equal("accountId", currentAccount.$id)]
    );
    if(!currentUser);
    return currentUser.documets[0]
  } catch (e) {
    throw new Error(e);
  }
};
