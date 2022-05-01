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

// apiKey: "AIzaSyCfX4F4QY7v2iXzyA-MZ6sFdB9n3AyUgX0",
// authDomain: "inventory-management-aac2b.firebaseapp.com",
// projectId: "inventory-management-aac2b",
// storageBucket: "inventory-management-aac2b.appspot.com",
// messagingSenderId: "621175736768",
// appId: "1:621175736768:web:f917e55dd16c74f7e52025"


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;