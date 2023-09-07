import axios from "axios";
// import 'dotenv/config'

// const { HMH_API_URL } = process.REACT_APP_HMH_API_URL;

const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_HMH_API_URL,
});

//Configure interceptions
AuthApi.interceptors.request.use((config) => {

  return config;
});

export default AuthApi;