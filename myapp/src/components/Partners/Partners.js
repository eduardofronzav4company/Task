import ItemPartners from '../ItemPartners/ItemPartners';
import {ContainerPartners} from './style';
import ImagemCliente from '../../assets/ClientMcDonalds.png';
import LogoCliente from '../../assets/McDonaldsLogo.png';

const InformationClient = [
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: LogoCliente,
        imageClient: ImagemCliente,
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: LogoCliente,
        imageClient: ImagemCliente,
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: LogoCliente,
        imageClient: ImagemCliente,
    },
]

function Partners() {
    return(
        <>
           <ContainerPartners>
                {InformationClient.map((information, index) =>{
                    const  {NameClient, AboutClient, LogoBrand, imageClient} = information;
                    return <ItemPartners NameClient={NameClient} AboutClient={AboutClient} LogoBrand={LogoBrand} imageClient={imageClient}/>
                })}
           </ContainerPartners>
        </>
    )
}

export default Partners