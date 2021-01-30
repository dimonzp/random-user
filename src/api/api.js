import axios from "axios";

const proxy = "https://cors-anywhere.herokuapp.com/";

const instanse = axios.create({
  baseURL: `${proxy}https://randomuser.me/api/`,
  responseType: "json",
});

export const usersAPI = {
  async getUsers() {
    const res = await instanse.get(
      "?results=20&inc=name,gender,picture,login,location,email,phone,dob"
    );
    return res.data;
  },
};
