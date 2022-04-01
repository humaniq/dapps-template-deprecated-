import BaseStore from "../base/baseStore";
import { makeAutoObservable } from "mobx";
import { ROUTES } from "../../network/api";

class HomeStore extends BaseStore {
  firstName = "";
  lastName = "";

  constructor() {
    super();
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async onSubmit() {
    console.log(this.firstName, this.lastName);
    if (!this.firstName || !this.lastName) {
      // 'You need to fill all fields'
    } else {
      try {
        const timeStamp = new Date().getTime();
        console.log(
          `ADDRESS ${this.provider.currentAccount} UPDATE PERSONAL INFO TIMESTAMP ${timeStamp}`
        );
        const result = await this.provider.personalMessageRequest(
          `ADDRESS ${this.provider.currentAccount} UPDATE PERSONAL INFO TIMESTAMP ${timeStamp}`
        );
        if (result) {
          const data = {
            query: {
              addressFrom: this.provider.currentAccount,
              timeStamp,
              typeOperation: "UPSERT",
              typeMessage: "humaniqIdentity",
              payload: {
                lastName: this.lastName,
                firstName: this.firstName,
              },
            },
            signature: result,
          };
          try {
            const result = await this.httpService.post<any, any>(
              ROUTES.DAPP.DAPP_PROFILE_UPDATE,
              data
            );
            console.log(result);
            if (result.data.status) {
              //'Your profile successfully updated'
            } else {
              // 'Server error'
            }
          } catch (e) {
            console.log("ERROR", e);
          }
        }
      } catch (e) {
        console.log(e);
        // 'Message has been rejected'
      }
    }
  }

  onReset() {
    this.firstName = "";
    this.lastName = "";
  }
}

export default HomeStore;
