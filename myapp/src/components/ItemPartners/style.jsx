import { styled } from "styled-components";


export const ContainerItemPartners = styled.div`
    display: flex;
    width: 506px;
    background-color: ${(props) => props.backgroundColor};
    box-sizing:border-box;
    color: white;
`
export const ImagePartners = styled.div`
    img {
        height: 100%;
        width: 250px;
    }
`
export const TextPartners = styled.div`
    margin: 20px;

`
export const Name = styled.div`
    font-weight: 600;
    font-size: 24px;

`
export const About = styled.div`
    font-size: 14px;
    margin: 10px 0px 0px 0px;

`
export const Description = styled.div`
    font-size:15px;
    line-height: 35px;
    p {
        margin: 10px 0px 10px 0px;
    }
`
export const Logo = styled.div`
    margin-top: 30px;
`