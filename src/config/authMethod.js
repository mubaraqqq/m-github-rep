// import analytics from './firebase-config';

// export const githubProvider = analytics.auth.GithubProvider();

import { GithubAuthProvider } from 'firebase/auth';

export const provider = new GithubAuthProvider();