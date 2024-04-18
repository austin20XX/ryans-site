import { Box, Typography } from "@mui/material";
import  RyanFullBody from '../assets/RyanFullBody.png';
import NyjahPartyOne from '../assets/nyjah-party.png';
import NyjahPartyTwo from '../assets/nyjah-party-2.png';

import './LandingPage.css';

interface LandingPageProps {
    exceptionThrown?: boolean
}

export const LandingPage = ({exceptionThrown, ...props}: LandingPageProps) => {
    return (
        <div className='container'>
            <Box id='landing-page'
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
            <Box id='photography'
             maxWidth='xl'
             sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Box id='left-split'><img src={NyjahPartyOne} alt='Baddies>' /> </Box>
            <Box id='right-split'><img src={NyjahPartyTwo} alt='Baddies'/></Box>
        </Box>
    </div>
    )
};