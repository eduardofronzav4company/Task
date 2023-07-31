import ItemPartners from '../ItemPartners/ItemPartners';
import {ContainerPartners} from './style';
import ClientMc from '../../assets/ClientMc.png';
import LogoCliente from '../../assets/McDonaldsLogo.png';
import G4Logo from '../../assets/G4Logo.png';
import ClientG4 from '../../assets/ClientG4.png';
import RockinRio from '../../assets/RockinRio.png';
import ClientRockInRio from '../../assets/ClientRockInRio.png';
import XPLogo from '../../assets/XPLogo.png';
import ClientXP from '../../assets/ClientXP.png';
import Client1 from '../../assets/Client1.png';
import Client2 from '../../assets/Client2.png';

const InformationClient = [
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: LogoCliente,
        imageClient: ClientMc,
        BackgroundColor: "rgba(45, 38, 38, 1)"
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: G4Logo,
        imageClient: ClientG4,
        BackgroundColor: "rgba(69, 61, 61, 1)"
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: RockinRio ,
        imageClient: ClientRockInRio,
        BackgroundColor: "rgba(45, 38, 38, 1)"
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: XPLogo ,
        imageClient: ClientXP,
        BackgroundColor: "rgba(100, 94, 94, 1)"
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: G4Logo ,
        imageClient: Client1,
        BackgroundColor: "rgba(45, 38, 38, 1)"
    },
    {
        NameClient: "Nome",
        AboutClient: "About",
        LogoBrand: G4Logo ,
        imageClient: Client2,
        BackgroundColor: "rgba(117, 116, 116, 1)"
    },
]

function Partners() {
    return(
        <>
           <ContainerPartners>
                {InformationClient.map((information, index) =>{
                    const  {NameClient, AboutClient, LogoBrand, imageClient, BackgroundColor} = information;
                    return <ItemPartners key={index} NameClient={NameClient} AboutClient={AboutClient} LogoBrand={LogoBrand} imageClient={imageClient} BackgroundColor={BackgroundColor}/>
                })}
           </ContainerPartners>
        </>
    )
}

export default Partners