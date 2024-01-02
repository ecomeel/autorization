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

export const addUserToDatabase = async (user: any) => {
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
};

export const getUserFromDatabase = async (uid: string) => {
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
};

// export const createUser = async () => {
//     createUserWithEmailAndPassword(auth, user.email, user.password).then(
//         (userCredential) => {
//             // Signed up
//             const person = userCredential.user;

//             dispatch(
//                 loginUser({
//                     id: person.uid,
//                     name: user.name,
//                     surname: user.surname,
//                     email: user.email,
//                     // token: person.accessToken,
//                     phone: user.phone,
//                 })
//             );

//             addUserToDatabase({
//                 id: person.uid,
//                 name: user.name,
//                 surname: user.surname,
//                 email: user.email,
//                 phone: user.phone,
//             });

//             navigate("/");

//             // ...
//         }
//     );
//     // .catch((error) => {
//     //     const errorCode = error.code;
//     //     const errorMessage = error.message;
//     // });
// };
