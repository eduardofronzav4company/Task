import { ContainerItemContentOffer, IconItemContentOffer, TextItemContentOffer, Description } from './style'

function ItemContentOffer({ icon, title, text, secondText }) {
    return (
        <>
            <ContainerItemContentOffer>
                <IconItemContentOffer>
                    {icon}
                </IconItemContentOffer>

                <TextItemContentOffer>
                    <p>{title}</p>
                    <Description>
                        {text}
                        <span>{secondText}</span>
                    </Description>

                </TextItemContentOffer>
            </ContainerItemContentOffer>
        </>
    )
}

export default ItemContentOffer