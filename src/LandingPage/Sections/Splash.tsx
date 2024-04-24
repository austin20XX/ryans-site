import { Box, Typography } from '@mui/material';
import './Sections.css';

import  RyanFullBody from '../../assets/RyanFullBody.png';

export const SplashSection = () => {
    return (
        <Box className='section'
            maxWidth='xl'
            sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Box id='left-split'><img src={RyanFullBody} alt='Ryan Watts Full Body Shot>' /> </Box>
            <Box id='right-split'>
                <Typography variant="h2">Ryan Watts</Typography>
                <Typography variant="h2">Photographer</Typography>
                <Typography variant="h2">Videographer</Typography>
                <Typography variant="h2">Chicago Confessionals Co-Founder</Typography>
            </Box>
        </Box>

    );
}