import './App.css';
import png from './GitHub-Mark/GitHub-Mark/PNG/GitHub-Mark-64px.png'
import { app, analytics } from './config/firebase-config';
import { provider } from './config/authMethod';
import githubAuth from './service/auth'
import { Card, Box, CardContent } from '@mui/material'

function App() {
  const handleClick = (provide) => {
    const res = githubAuth(provide);
    console.log(res);
  }

  return (
    <Box className="App" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Card>
        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
          <img src={png} height='auto' width='100%' alt="" />
          <button className='home-button' onClick={() => handleClick(provider)}>Login with Github</button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
