import { ContainerInformation, ContainerItemInformation, ContentInformation, NumberItemInfo, TextItemInfo } from './style';

let InformationItem = [
    {
        number: "4568",
        text: "clientes ativos"
    },
    {
        number: "221",
        text: "escritorios pelo Brasil"
    },
    {
        number: "822",
        text: "milhos investidos em media digital"
    },
    {
        number: "2bi",
        text: "de faturamento gerados para clientes"
    },
]

function Information() {
    return (
        <>
            <ContainerInformation>
                <ContentInformation>
                    {InformationItem.map((item, index) => {
                        const { number, text } = item;
                        return (
                            <ContainerItemInformation key={index}>
                                <NumberItemInfo>
                                    {number}
                                </NumberItemInfo>

                                <TextItemInfo>
                                    {text}
                                </TextItemInfo>
                            </ContainerItemInformation>
                        )
                    })}

                </ContentInformation>
            </ContainerInformation>
        </>
    )
}

export default Information