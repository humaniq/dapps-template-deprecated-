import { makeAutoObservable } from "mobx";

class ProviderStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialized = false;
  currentAccount = null;
  hasProvider = false;

  async init() {
    // @ts-ignore
    if (window.ethereum) {
      this.hasProvider = true;
      // @ts-ignore
      window.ethereum.on("accountsChanged", (accounts) => {
        this.currentAccount = accounts[0];
      });

      // @ts-ignore
      window.ethereum.on("disconnect", () => {
        this.currentAccount = null;
      });

      // @ts-ignore
      window.ethereum.on("connect", (accounts) => {
        this.currentAccount = accounts[0];
      });

      // @ts-ignore
      window.ethereum.on("message", (payload) => {
        console.log("message", payload);
      });

      try {
        // @ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        this.currentAccount = accounts[0];
      } catch (e) {
        console.log("ERROR", e);
      }
    }
    this.initialized = true;
  }

  personalMessageRequest(message: any): any {
    // @ts-ignore
    return window.ethereum.request({
      method: "personal_sign",
      params: [
        `0x${Buffer.from(message, "utf-8").toString("hex")}`,
        this.currentAccount,
      ],
    });
  }
}

export default ProviderStore;
