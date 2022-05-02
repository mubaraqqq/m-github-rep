import React, { useState } from 'react';
import { Divider, Box, Grid, Avatar, Typography, Chip, TextField, MenuItem, Stack } from '@mui/material';
import moment from 'moment';

const Profile = ({ repos, user }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


  return (
    <div>
        <Stack direction='row' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2em 0 1em 0', borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}>
            <Typography className='head-text' sx={{fontWeight: 'bold'}}>Overview</Typography>
            <Typography className='head-text' sx={{borderBottom: '2px solid orange', paddingBottom: '3em', fontWeight: 'bold'}}>Repositories <Chip label={repos.length} sx={{height: '20px'}}/></Typography>
            <Typography className='head-text' sx={{fontWeight: 'bold'}}>Projects</Typography>
            <Typography className='head-text' sx={{fontWeight: 'bold'}}>Packages</Typography>
            <Typography className='head-text' sx={{fontWeight: 'bold'}}>Stars</Typography>
        </Stack>
        <Grid container spacing={5} sx={{padding: '0 4em'}}>
            <Grid item xs={3}>
                <Stack direction='column'>
                    <Avatar alt='avatar' src={user.avatar_url} sx={{width: '250px', height: '250px'}} />                
                </Stack>
                <Box sx={{padding: '2em 0 1em 0'}}>
                    <Typography variant='h5'>{user.name}</Typography>
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
                <Box>
                    {
                        repos.slice(1, 22).map(repo => (
                            <Box key={repo.id}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '2em 0'}}>
                                    <Box>
                                        <Stack direction='column' spacing={2}>
                                            <Typography sx={{color: 'blue', fontWeight: '700'}}>{repo.name}</Typography>
                                            <Stack direction='row' spacing={3}>
                                                <Typography variant='caption'>{repo.language}</Typography>
                                                <Typography variant='caption'>{repo.stargazers_count}</Typography>
                                                <Typography variant='caption'>Updated {moment(repo.updated_at).startOf('ss').fromNow()}</Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <button>Star</button>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                        ))
                    }
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default Profile