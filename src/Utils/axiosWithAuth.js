import axios from "axios";

export const axiosWithAuth = () => {
  // t-t-t-TOKEN?!
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "our-api-goes-here",
    headers: {
      authorization: token,
    },
  });
};
