export const API_URL = "https://api.node.psec.pro";

const timeout = 10000;

export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  timeout,
};

export const ROUTES = {
  TX: {
    GET_TRANSACTION_DATA: "v1/api/node/:type/helper/transaction",
    SEND_TRANSACTION: "/v1/api/node/:type/broadcast/raw",
  },
  DAPP: {
    DAPP_PROFILE_UPDATE: "/v1/api/dapp/profile/update",
  },
};
