import BackgroundWithImage from '../BackgroundWithImage/BackgroundWithImage';
import backgroundWhatWeDo from '../../assets/backgroundWhatWeDo.png';
import { ContainerVideo } from './style';

function WhatWeDo() {
    return (
        <>
            <BackgroundWithImage imageBackground={backgroundWhatWeDo} altura={'65vh'}>
                <ContainerVideo>
                    <iframe
                        width="550"
                        height="340"
                        src="https://www.youtube.com/embed/1yIm_udlad0"
                        title="O que a V4 Company faz?"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                    <p> what we do</p>
                </ContainerVideo>
            </BackgroundWithImage>
        </>
    )
}

export default WhatWeDo