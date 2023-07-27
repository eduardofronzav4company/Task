import { styled } from "styled-components";


export const ContainerV4X = styled.section`
    background: rgb(0,0,0);
    background: linear-gradient(321deg, rgba(0,0,0,1) 45%, rgba(48,48,48,1) 94%);
    height: 40vh;
    display: flex;
    align-items: center;    
    
`

export const SubContainer = styled.div`
    color:white;
    display: flex;
    width: 85%;
    margin: auto;
`

export const ImageV4X = styled.div`
    display: flex;
    align-items: center;
`
export const TextV4X = styled.div`
    margin: 0px 0px 0px 25px;
    p {
        display: flex;
        flex-direction: column;

        font-weight: 700;
        font-size: 30px;
    }

    hr{
        display:flex;
        justify-content: start;
        width: 42%;
        border:1px rgba(237, 196, 114, 1) solid;
        margin:0;
    }

`
export const TitleV4X = styled.div`
  p {
    margin: 0px 0px 10px 0px;
  }
`
export const DescriptionV4X = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        width: 70%;
        margin-top: 20px;
    }
`
