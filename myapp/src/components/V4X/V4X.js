import Button from '../Button/Button';
import { ContainerV4X, SubContainer, ImageV4X, TextV4X, TitleV4X, DescriptionV4X } from './style';
import V4XLogo from '../../assets/V4XLogo.png'

function V4X() {
    return (
        <>
            <ContainerV4X>
                <SubContainer>
                    <ImageV4X>
                        <img src={V4XLogo} />
                    </ImageV4X>

                    <TextV4X>
                        <TitleV4X>
                            <p>Tenha um time exclusivo de<span>especialistas em Growth Marketing</span></p>
                            <hr></hr>
                        </TitleV4X>
                        <DescriptionV4X>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et nibh at eros molestie mollis nec facilisis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut interdum turpis, sed mollis augue.
                            </span>
                            <Button text={"conheca a v4 company"} height={"60px"} width={"300px"} backgroundColor={'rgba(237, 196, 114, 1)'} />
                        </DescriptionV4X>
                    </TextV4X>
                </SubContainer>
            </ContainerV4X>
        </>
    )
}

export default V4X