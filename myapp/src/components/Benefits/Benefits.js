import ItemBenefits from "../ItemBenefits/ItemBenefits";
import { ContainerBenefits, CardsBenefits } from "./style"
import { FaGears } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

const Items = [
    {
        icon: <FaGears />,
        title: "Work organization",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    },
    {
        icon: <BsGraphUp />,
        title: "Data analytics",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    },
    {
        icon: <TbTargetArrow />,
        title: "Goals",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    },
    {
        icon: <AiOutlineGlobal />,
        title: "Global trafic",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    },
    {
        icon: <FaGears />,
        title: "Data analytics",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    },
    {
        icon: <RxPerson />,
        title: "Support",
        description: "Escrita de textos persuasivos e criativos para estimular a ação do público-alvo em uma campanha de marketing."
    }
]

export function Benefits() {
    return (
        <>
            <ContainerBenefits>
                <CardsBenefits>
                    {Items.map((item, index) => {
                        const { icon, title, description } = item;
                        return <ItemBenefits  key={index} icon={icon} title={title} description={description} />
                    })}
                </CardsBenefits>
            </ContainerBenefits>
        </>
    )
}

export default Benefits