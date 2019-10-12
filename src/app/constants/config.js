import CONST from "./constants";

const STAG_ENV = {
  URL: "http://18.224.169.160:8080",
  env: "Staging"
};

const PROD_ENV = {
  URL: "http://18.224.169.160:8080",
  env: "Production"
};

const LOCAL_ENV = {
  URL: "http://192.168.30.83:5000",
  env: "Local"
};

const COMMON_ENV = {
  // Add here if there is any `COMMON ENVIRONMENT VARIABLES`
};

let app_env = process.env.REACT_APP_ENV;

let ENV = {};

switch (app_env) {
  case CONST.ENV_TYPES.PROD:
    ENV = { ...PROD_ENV, ...COMMON_ENV };
    break;

  case CONST.ENV_TYPES.STAG:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;

  case CONST.ENV_TYPES.LOCAL:
    ENV = { ...LOCAL_ENV, ...COMMON_ENV };
    break;

  default:
    ENV = { ...STAG_ENV, ...COMMON_ENV };
    break;
}

export default ENV;
