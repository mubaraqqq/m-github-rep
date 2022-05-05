import { useState, useEffect } from 'react'
import './App.css';
import png from './GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png'
import { app, analytics } from './config/firebase-config';
import { githubProvider } from './config/authMethod';
import { githubSignOutAuth } from './service/auth';
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useGetReposQuery, useGetUserQuery } from './services/reposApi';
import { Card, Box, CardContent, CircularProgress } from '@mui/material';
import Profile from './components/Profile';

function App() {
  const [tokens, setTokens] = useState('');
  const { data, isFetching } = useGetReposQuery(tokens);
  const { data: users, isLoading } = useGetUserQuery(tokens);
  const repos = data;

  const signIn = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setTokens(token);

        // The signed-in user info.
        const user = result.user;
        // console.log(user)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });
  }


  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
  }

  if(isFetching || isLoading) return <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <CircularProgress /></Box>

  return (
    <div>
      {
        repos?.length > 0
        ? <Profile repos={repos} user={users} />
        : (
          <Box className="App" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card>
              <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                <img src={png} height='auto' width='100%' alt="" />
                <button className='home-button' onClick={() => signIn(githubProvider)}>Login with Github</button>
              </CardContent>
            </Card>
          </Box>
        )
      }
    </div>
  );
}

export default App;
