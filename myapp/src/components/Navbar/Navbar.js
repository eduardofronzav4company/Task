import { ContainerHeader, ContainerList, ItemList, Logo, Navegation } from "./style"


function Navbar({UrlLogo}) {
    return (
        <>
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
        </>
    )
}

export default Navbar