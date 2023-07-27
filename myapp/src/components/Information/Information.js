import { ContainerInformation, ContentInformation} from './style';
import ItemInformation from '../ItemInformation/ItemInformation';

function Information() {
    return (
        <>
            <ContainerInformation>
                <ContentInformation>
                    <ItemInformation  NumberOfItem={"4568"} textOfItem={"clientes ativos"} />
                    <ItemInformation  NumberOfItem={"221"} textOfItem={"escritorios pelo Brasil"} />
                    <ItemInformation  NumberOfItem={"822"} textOfItem={"milhos investidos em media digital"} />
                    <ItemInformation  NumberOfItem={"2bi"} textOfItem={"de faturamento gerados para clientes"} />
                </ContentInformation>
            </ContainerInformation>
        </>
    )
}

export default Information