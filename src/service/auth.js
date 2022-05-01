import { getAuth, signOut} from "firebase/auth";


export const githubSignOutAuth = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    console.log('sign out successful')
    }).catch((error) => {
    // An error happened.
    });
}
