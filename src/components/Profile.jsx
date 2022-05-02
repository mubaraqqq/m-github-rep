import React, { useState } from 'react';
import { Divider, Box, Grid, Avatar, Typography, Chip, TextField, MenuItem, Stack } from '@mui/material';

const Profile = ({ repos, user }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


  return (
    <div>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2em 0 1em 0', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
            <Typography className='head-text'>Overview</Typography>
            <Typography className='head-text' sx={{borderBottom: '2px solid orange', paddingBottom: '3em'}}>Repositories <Chip label={repos.length} sx={{height: '20px'}}/></Typography>
            <Typography className='head-text'>Projects</Typography>
            <Typography className='head-text'>Packages</Typography>
            <Typography className='head-text'>Stars</Typography>
        </Stack>
        <Grid container spacing={5} sx={{padding: '0 4em'}}>
            <Grid item xs={3}>
                <Stack direction='column'>
                    <Avatar alt='avatar' src={user.avatar_url} sx={{width: '250px', height: '250px'}} />                
                </Stack>
                <Box sx={{padding: '2em 0 1em 0'}}>
                    <Typography>{user.name}</Typography>
                    <Typography>{user.login}</Typography>
                </Box>
                <button className='profile-btn'>Follow</button>
                <Typography sx={{padding: '1em 0'}}>{user.bio}</Typography>
                <Stack direction='row' spacing={2}>
                    <Typography>{user.followers} followers</Typography>
                    <Typography>{user.following} following</Typography>
                </Stack>
                <Stack direction='column' sx={{padding: '1em 0'}}>
                    <Typography>{user.location}</Typography>
                    <Typography>{user.email ? user.mail : ''}</Typography>
                    <Typography>@{user.twitter_username}</Typography>
                </Stack>
                <Divider />
            </Grid>
            <Grid item xs={9}>
                <Stack direction='row' spacing={1}>
                    <input type="text" placeholder='Find a repository...' value={search} onChange={handleSearch} />
                </Stack>
                <Divider />
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Profile