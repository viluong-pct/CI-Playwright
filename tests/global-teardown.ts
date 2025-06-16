import axios from "axios";

export default async () => {
  console.log("Cleaning up test data (globalTeardown)...");
  await axios.post(`${process.env.BASE_URL}/test-utils/cleanup`, {
    token: process.env.ADMIN_TOKEN,
  });
};
