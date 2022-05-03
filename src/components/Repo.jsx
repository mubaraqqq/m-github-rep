import React from 'react';
import { Divider, Box, Grid, Avatar, Typography, Chip, TextField, MenuItem, Stack } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import moment from 'moment';

const Repo = ({ repo }) => {
    const firstLetterUpperCase = (str) => {
        let arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }
  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '2em 0'}}>
            <Box>
                <Stack direction='column' spacing={2}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Typography sx={{color: 'blue', fontWeight: '700', marginRight: '1em'}}>{repo.name}</Typography>
                        <Chip label={firstLetterUpperCase(repo.visibility)} variant='outlined' sx={{fontSize: '10px', height: '17px', width: 'auto', fontWeight: 'bold'}} />
                    </Box>
                    <Stack direction='row' spacing={3} sx={{alignItems: 'center'}}>
                        <Typography variant='caption'>{repo.language}</Typography>
                        <Typography variant='caption' sx={{display: 'flex', alignItems: 'center'}}> <StarBorderIcon sx={{width: '0.7em', height: '0.7em'}} />{repo.stargazers_count}</Typography>
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