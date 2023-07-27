import { ContainerItemInformation, NumberItemInfo, TextItemInfo } from './style';

function ItemInformation({ textOfItem, NumberOfItem }) {
    return (
        <>
            <ContainerItemInformation>
                <NumberItemInfo>
                    {NumberOfItem}
                </NumberItemInfo>

                <TextItemInfo>
                    {textOfItem}
                </TextItemInfo>
            </ContainerItemInformation>
        </>
    )
}

export default ItemInformation