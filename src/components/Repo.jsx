import React from 'react';
import { Divider, Box, Grid, Avatar, Typography, Chip, TextField, MenuItem, Stack } from '@mui/material';
import moment from 'moment';

const Repo = ({ repo }) => {
  return (
    <>
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
    </>
  )
}

export default Repo