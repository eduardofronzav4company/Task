import BackgroundWithImage from '../BackgroundWithImage/BackgroundWithImage';
import { ContainerHeader, Navegation, Logo, ContainerList, ItemList, TextContent } from './style';
import Button from '../Button/Button';
import Fundo from '../../assets/Fundo-Header.png';

function Header({ UrlLogo }) {
    return (
        <>
            <BackgroundWithImage imageBackground={Fundo} altura={'100vh'}>

                <ContainerHeader>
                    <Logo>
                        <img src={UrlLogo}></img>
                    </Logo>

                    <Navegation>
                        <ContainerList>
                            <ItemList><a href='\'>V4 é Marketing</a></ItemList>
                            <ItemList><a href='\'>Educação</a></ItemList>
                            <ItemList><a href='\'>Para Clientes</a></ItemList>
                            <ItemList><a href='\'>Cases V4</a></ItemList>
                            <ItemList><a href='\'>Sobre</a></ItemList>
                            <ItemList><a href='\'>Blog</a></ItemList>
                            <ItemList><a href='\'>Conteúdos</a></ItemList>
                        </ContainerList>
                    </Navegation>
                </ContainerHeader>

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