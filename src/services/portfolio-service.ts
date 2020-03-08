import { IPortfolioService, IWorkDetails } from "./../interfaces/index";
import firebase from "../lib/db";

export default class portfolioService implements IPortfolioService {
  getWork = async (id: number): Promise<IWorkDetails> => {
    const workRef = firebase
      .database()
      .ref("works")
      .orderByChild("id")
      .equalTo(id);
    let result: firebase.database.DataSnapshot = await new Promise(resolve => {
      workRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    return Object.values(result.val())[0] as IWorkDetails;
  };
  getWorks = async (): Promise<IWorkDetails[]> => {
    const worksRef = firebase
      .database()
      .ref("works")
      .orderByKey();
    let result: firebase.database.DataSnapshot = await new Promise(resolve => {
      worksRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });
    return result.val() as IWorkDetails[];
  };
}
