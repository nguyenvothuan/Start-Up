import React,{useState} from 'react'
import Video from '../../videos/english.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroBtnWrapper, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {setHover(!hover)}
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Your affordable and flexible English support
                </HeroH1>
                <HeroP>
                    We translate and tutor English at affordable cost.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}  onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
