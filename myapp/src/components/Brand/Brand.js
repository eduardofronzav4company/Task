import {ContainerBrand, ItemsBrand} from './style'
import foto19 from '../../assets/19.png'
import foto20 from '../../assets/20.png'
import foto21 from '../../assets/21.png'
import foto22 from '../../assets/22.png'
import foto23 from '../../assets/23.png'
import foto24 from '../../assets/24.png'
import foto25 from '../../assets/25.png'
import foto26 from '../../assets/26.png'
import foto27 from '../../assets/27.png'

let Imagens = [
    {
        image: foto19,
        legenda: "legenda"
    },
    {
        image: foto20,
        legenda: "legenda"
    },
    {
        image: foto21,
        legenda: "legenda"
    },
    {
        image: foto22,
        legenda: "legenda"
    },
    {
        image: foto23,
        legenda: "legenda"
    },
    {
        image: foto24,
        legenda: "legenda"
    },
    {
        image: foto25,
        legenda: "legenda"
    },
    {
        image: foto26,
        legenda: "legenda"
    },
    {
        image: foto27,
        legenda: "legenda"
    },
    {
        image: foto19,
        legenda: "legenda"
    },
    {
        image: foto20,
        legenda: "legenda"
    },
    {
        image: foto21,
        legenda: "legenda"
    },
    {
        image: foto22,
        legenda: "legenda"
    },
    {
        image: foto23,
        legenda: "legenda"
    },
    {
        image: foto24,
        legenda: "legenda"
    },
    {
        image: foto25,
        legenda: "legenda"
    },
    {
        image: foto26,
        legenda: "legenda"
    },
    {
        image: foto27,
        legenda: "legenda"
    },
    {
        image: foto19,
        legenda: "legenda"
    },
    {
        image: foto20,
        legenda: "legenda"
    },
    {
        image: foto21,
        legenda: "legenda"
    },
    {
        image: foto22,
        legenda: "legenda"
    },
    {
        image: foto23,
        legenda: "legenda"
    },
    {
        image: foto24,
        legenda: "legenda"
    },
    {
        image: foto25,
        legenda: "legenda"
    },
    {
        image: foto26,
        legenda: "legenda"
    },
    {
        image: foto27,
        legenda: "legenda"
    },
]

export function Brand() {
    return (
        <>
            <ContainerBrand>
                {Imagens.map(( item, index) =>{
                    const {image, legenda} = item;
                    return <ItemsBrand key={index}><img src={image} alt={legenda}/></ItemsBrand>
                })}
            </ContainerBrand>
        </>
    )
}

export default Brand