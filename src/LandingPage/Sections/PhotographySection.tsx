import { CarouselProvider, Slider, Slide, DotGroup} from 'pure-react-carousel';
import './Sections.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

import  Party1 from '../../assets/nyjah-party.png';
import  Party2 from '../../assets/nyjah-party-2.png';

export const PhotographySection = () => {
    return (
        // Carousel should replace containing Box
        <CarouselProvider
            className='section'
            naturalSlideWidth={495}
            naturalSlideHeight={743}
            visibleSlides={2}
            totalSlides={2}
            step={2}
        >
            <Slider>
                <Slide index={0} id='left-split'> <img src={Party1} alt='Baddies>' /> </Slide>
                <Slide index={1} id='right-split'> <img src={Party2} alt='Baddies>' /> </Slide>
            </Slider>
            <DotGroup />
        </CarouselProvider>

    );
}