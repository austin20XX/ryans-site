import { useState, FC} from "react";
import { Box } from "@mui/material";
import { SplashSection } from './Sections/Splash';
import { PhotographySection } from "./Sections/PhotographySection";

import './LandingPage.css';

interface LandingPageProps {
    exceptionThrown?: boolean
}

export const LandingPage = ({exceptionThrown, ...props}: LandingPageProps) => {
    // const [focusedSection, setFocusedSection] = useState<FC>()

    return (
        <Box className='container'>
            <SplashSection />
            <PhotographySection />
        </Box>
    )
};