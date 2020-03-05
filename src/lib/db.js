import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.PORTFOLIO_API_KEY,
  authDomain: process.env.PORTFOLIO_AUTH_DOMAIN,
  databaseURL: process.env.PORTFOLIO_DATABASE_URL,
  projectId: process.env.PORTFOLIO_PROJECT_ID,
  storageBucket: process.env.PORTFOLIO_STORAGE_BUCKET,
  messagingSenderId: process.env.PORTFOLIO_MESSAGEING_SENDER_ID,
  appId: process.env.PORTFOLIO_APP_ID,
  measurementId: process.env.PORTFOLIO_MEASUREMENT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
