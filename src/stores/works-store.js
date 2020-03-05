import { action, observable, configure, runInAction } from "mobx";
import { useStaticRendering } from "mobx-react";
import remotedev from "mobx-remotedev";

const isServer = typeof window === "undefined";

useStaticRendering(isServer);
configure({ enforceActions: "observed" });

class WorksStore {
  @observable works = [];
  @observable currentWork = {};
  @observable loadingWorks = false;
  @observable loadingWork = false;
  @action.bound async getAllWorks(portfolioService) {
    this.loadingWorks = true;
    const data = await portfolioService.getWorks();
    runInAction(() => {
      this.works = data;
      this.loadingWorks = false;
    });
  }
  @action.bound async getCurrentWork(id, portfolioService) {
    this.loadingWork = true;
    const data = await portfolioService.getWork(id);
    runInAction(() => {
      this.currentWork = data;
      this.loadingWork = false;
    });
  }
}

export default remotedev(WorksStore, { global: true });
