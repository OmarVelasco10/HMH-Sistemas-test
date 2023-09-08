import axios from "axios";

const GitHubApi = axios.create({
  baseURL: process.env.REACT_APP_GIT_API_URL,
});

//Configure interceptions
GitHubApi.interceptors.request.use((config) => {

  return config;
});

export default GitHubApi;