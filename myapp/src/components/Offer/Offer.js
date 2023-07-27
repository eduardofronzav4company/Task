import ItemContentOffer from '../ItemContentOffer/ItemContentOffer'
import { ContainerOffer, TitleOffer, ContentOffer } from './style'
import { BsNewspaper } from 'react-icons/bs';
import { CiMonitor } from "react-icons/ci";
import { PiChartLineUpLight } from "react-icons/pi";
import { LuNetwork } from "react-icons/lu";

const Cards = [
    {
        icon: <BsNewspaper />,
        title: 'Copywriting',
        text: 'Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing.',
        secondText: 'É necessário conhecer o público-alvo e usar técnicas de persuasão para gerar  engajamento e conversão.'
    },

    {
        icon: <CiMonitor />,
        title: 'Design',
        text: 'Produzir anúncios e lading pages visualmente impactantes que gerem conversões em vendas.',
        secondText: 'Personalizando o design dos materiais para atrair o seu cliente ideal e acelerar os resultados das suas campanhas.'
    },

    {
        icon: <PiChartLineUpLight />,
        title: 'Gestão de Tráfego',
        text: 'Garantir que as campanhas sejam vistas pelas pessoas corretas e no momento certo, fazendo com que os clientes cheguem até você.',
        secondText: 'O gestor de tráfego deve monitorar os resultados da campanha e fazer ajustes para otimizar o retorno sobre o investimento (ROI).'
    },
    {
        icon: <LuNetwork />,
        title: 'Vendas',
        text: 'O papel do vendedor em uma campanha de marketing é converter os leads gerados pela campanha em vendas.',
        secondText: 'Ele deve ter habilidades de negociação e persuasão para conduzir o cliente pelo funil de vendas e fechar negócios'
    }
]

function Offer() {
    return (
        <>
            <ContainerOffer>
                <TitleOffer>
                    <h1>
                        O
                        QUE
                        NÓS
                        OFE
                        RE
                        CEM
                        OS
                    </h1>
                </TitleOffer>

                <ContentOffer>
                    {Cards.map((card, index) => {
                        const {icon, title, text, secondText } = card;
                        return <ItemContentOffer key={index} icon={icon} title={title} text={text} secondText={secondText} />;
                    })}
                </ContentOffer>
            </ContainerOffer>
        </>
    )
}

export default Offer