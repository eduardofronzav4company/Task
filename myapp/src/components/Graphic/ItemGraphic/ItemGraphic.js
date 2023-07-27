import { GradientLine, ContainerItemGraphic } from "./style";

export function ItemGraphic({ title, textPorcent, Porcent }) {
    return (
        <>
            <ContainerItemGraphic>
                <p>{title}<span>{textPorcent}</span></p>
                <GradientLine Porcent={Porcent}/>
            </ContainerItemGraphic>
        </>
    )
}

export default ItemGraphic