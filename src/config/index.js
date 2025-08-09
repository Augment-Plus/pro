import axios from "axios";

const config = {
  app: {
    id: "pro",
    name: ".Pro App",
  },
};

function getAppInfo() {
  return config.app;
}

function configureAxios() {
}

configureAxios();

export default { getAppInfo, axios };
