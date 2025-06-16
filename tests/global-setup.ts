import axios from "axios";

export default async () => {
  console.log("Resetting test data (globalSetup)...");
  await axios.post(`${process.env.BASE_URL}/test-utils/init`, {
    token: process.env.ADMIN_TOKEN,
  });
};
