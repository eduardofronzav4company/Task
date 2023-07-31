import { ContainerItemPartners, ImagePartners, TextPartners, Name, About, Description, Logo } from "./style"

function ItemPartners({ imageClient, NameClient, AboutClient, LogoBrand, BackgroundColor }) {
    return (
        <>
            <ContainerItemPartners backgroundColor={BackgroundColor}>
                <ImagePartners>
                    <img src={imageClient} />
                </ImagePartners>

                <TextPartners>
                    <Name>{NameClient}</Name>
                    <About>{AboutClient}</About>

                    <Description>
                        <p>A missão da V4 Company é criar um marketing que vai te ajudar.</p>
                        <span>Vender seu produto, vender mais vezes, vender para mais pessoas e vender pelo maior preço.</span>
                    </Description>
                    <Logo><img src={LogoBrand} alt="legenda"/></Logo>
                </TextPartners>
            </ContainerItemPartners>
        </>
    )
}

export default ItemPartners