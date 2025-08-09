import axios from "axios";

  const isProd = process.env.NODE_ENV === "production";
  const devBaseURL =
    import.meta.env.VITE_DEV_URL || "http://localhost:3000";

  axios.defaults.baseURL = isProd
    ? `https://${window.location.hostname}/api`
    : `${devBaseURL}/api`;

  // Optionally set headers, timeouts, etc.
  axios.defaults.timeout = 10000;
  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});
