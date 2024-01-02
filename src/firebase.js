import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function addUserToDatabase(user) {
    try {
        await setDoc(doc(db, "users", user.id), {
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            email: user.email,
        });
    } catch (e) {
        console.error("Error adding user: ", e);
    }
}

export async function getUserFromDatabase(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            name: docSnap.data().name,
            surname: docSnap.data().surname,
            email: docSnap.data().email,
            phone: docSnap.data().phone,
        };
    } else {
        console.log("No such user");
    }
}
