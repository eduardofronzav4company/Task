import { ContainerItemBenfits, IconOfBenefits, TextBenefits } from "./style"

export function ItemBenefits({ icon, title, description }) {
    return (
        <>
            <ContainerItemBenfits>
                <IconOfBenefits>
                    {icon}
                </IconOfBenefits>
                <TextBenefits>
                    <p>{title}</p>
                    <span>{description}</span>
                </TextBenefits>
            </ContainerItemBenfits>
        </>
    )
}

export default ItemBenefits