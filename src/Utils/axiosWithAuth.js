import axios from "axios";

export const axiosWithAuth = () => {
  // t-t-t-TOKEN?!
  const token = localStorage.getItem("Token");

  return axios.create({
    baseURL: "https://django-cs-unit1-nasra-mack.herokuapp.com/api/",
    headers: {
      authorization: token,
    },
  });
};
