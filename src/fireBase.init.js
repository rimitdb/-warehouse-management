import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey || "mock_key",
    authDomain: process.env.REACT_APP_authDomain || "mock_authDomain",
    projectId: process.env.REACT_APP_projectId || "mock_projectId",
    storageBucket: process.env.REACT_APP_storageBucket || "mock_storageBucket",
    messagingSenderId: process.env.REACT_APP_messagingSenderId || "mock_messagingSenderId",
    appId: process.env.REACT_APP_appId || "mock_appId"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;