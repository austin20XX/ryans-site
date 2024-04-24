import { Box } from '@mui/material';
import './Sections.css';

import  Party1 from '../../assets/nyjah-party.png';
import  Party2 from '../../assets/nyjah-party-2.png';
import Pri1 from '../../assets/pri-1.png';
import Pri2 from '../../assets/pri-2.png';

export const PhotographySection = () => {
    return (
        // Carousel should replace containing Box
        <Box className='section'
            maxWidth='xl'
            sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}
        >
            <Box id='left-split'> <img src={Party1} alt='Baddies>' /> </Box>
            <Box id='right-split'> <img src={Party2} alt='Baddies>' /> </Box>
        </Box>

    );
}