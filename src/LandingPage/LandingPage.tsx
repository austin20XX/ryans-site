import { Box, Typography } from "@mui/material";
import  RyanFullBody from '../assets/RyanFullBody.png'

interface LandingPageProps {
    exceptionThrown?: boolean
}

export const LandingPage = ({exceptionThrown, ...props}: LandingPageProps) => {
    return (
        <Box id='landing-page'
             maxWidth='xl'
             sx={{display: 'flex', justifyContent: 'space-evenly'}}
        >
            <Box id='left-split'><img src={RyanFullBody} alt='Ryan Watts Full Body Shot>' /> </Box>
            <Box id='right-split'>
                <Typography variant="h2">Ryan Watts</Typography>
                <Typography variant="h2">Photographer</Typography>
                <Typography variant="h2">Videographer</Typography>
                <Typography variant="h2">Chicago Confessionals Co-Founder</Typography>
            </Box>
        </Box>
    )
};