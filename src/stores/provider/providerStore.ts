import { makeAutoObservable } from 'mobx';

class ProviderStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialized = false;
  currentAccount = null;
  hasProvider = false;
  counter = 0;

  async init() {
    // if (window.ethereum) {
    //   this.hasProvider = true;
    //
    //   window.ethereum.on('accountsChanged', (accounts) => {
    //     this.currentAccount = accounts[0];
    //   });
    //
    //   window.ethereum.on('disconnect', () => {
    //     this.currentAccount = null;
    //   });
    //
    //   window.ethereum.on('connect', (accounts) => {
    //     this.currentAccount = accounts[0];
    //   });
    //
    //   try {
    //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     this.currentAccount = accounts[0];
    //   } catch (e) {
    //     console.log('ERROR', e);
    //   }
    // }
    // this.initialized = true;
  }
}

export default ProviderStore