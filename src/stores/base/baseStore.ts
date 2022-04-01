import CompositeDisposable from "../../network/CompositeDisposable";
import Disposable from "../../network/Disposable";
import HttpService from "../../services/httpService";
import ProviderStore from "../provider/providerStore";

export default class BaseStore {
  protected compositeDisposable: CompositeDisposable<any>;
  protected httpService: HttpService;
  protected provider: ProviderStore;

  protected constructor() {
    this.provider = new ProviderStore();
    this.httpService = new HttpService();
    this.compositeDisposable = new CompositeDisposable<any>();
  }

  addDisposable = (disposable: Disposable<any>): void => {
    this.compositeDisposable.add(disposable);
  };

  clearDisposable = (disposable: Disposable<any>): void => {
    this.compositeDisposable.remove(disposable);
  };

  clearComposite = (): void => {
    this.compositeDisposable.clearDisposables();
  };

  public onDestroy = (): void => {
    if (!this.compositeDisposable.isEmpty()) {
      this.compositeDisposable.clear();
    }
  };
}
