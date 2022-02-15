import axios from "axios"
import store from "../store/store"
import getEnv from "../utils/getEnv"

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const login = async (formData: LoginFormData) => {
  // const {data} = await axios.post(
  //   `${getEnv("BACKEND_URL")}/account/login`,
  //   formData
  // );

  // return data;
  return "qqqwweerr";
}

export const register = async (formData: RegisterFormData) => {
  // const {data} = await axios.post(
  //   `${getEnv("BACKEND_URL")}/account/create`,
  //   formData
  // );

  // return data;
  return "qqqwweerr";
}