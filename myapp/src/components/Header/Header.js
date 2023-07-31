import BackgroundWithImage from '../BackgroundWithImage/BackgroundWithImage';
import { TextContent } from './style';
import Button from '../Button/Button';
import Fundo from '../../assets/Fundo-Header.png';
import Navbar from '../Navbar/Navbar';

function Header({ UrlLogo }) {
    return (
        <>
            <BackgroundWithImage imageBackground={Fundo} altura={'100vh'}>
            <Navbar UrlLogo={UrlLogo}/>
                <TextContent>
                    <h1>Marketing Digital que </h1>
                    <span>Funciona</span>

                    <p>A missão da V4 Company é criar um marketing que vai te ajudar
                    <span>a vender seu produto, vender mais vezes, vender para mais pessoas e vender pelo maior preço.</span></p>
                    <Button text={'CONHECA A V4 COMPANY'} width={"306px"} height={"61px"}/>
                </TextContent>
            </BackgroundWithImage>
        </>
    )
}

export default Header