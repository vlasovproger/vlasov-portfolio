import firebase from "../lib/db";

export default class portfolioService {
  getWork = async id => {
    const workRef = firebase
      .database()
      .ref("works")
      .orderByChild("id")
      .equalTo(+id);
    let result = await new Promise(resolve => {
      workRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });

    return Object.values(result.val())[0];
  };
  getWorks = async () => {
    const worksRef = firebase
      .database()
      .ref("works")
      .orderByKey();
    let result = await new Promise(resolve => {
      worksRef.on("value", snapshot => {
        resolve(snapshot);
      });
    });
    return result.val();
  };
}
