import { styled } from "styled-components";

export const ContainerNews = styled.section`
    display: flex;
    justify-content: space-around;
    background-color: rgba(235, 235, 235, 1);
`
export const ItemNews = styled.div`
    -background-color: red;
    width: 400px;

`

export const ContainerTitleNews = styled.div`
    display: flex;
`

export const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    font-size: 64px;
    color:rgba(64, 58, 58, 1);
`

export const TextTitle = styled.div`
    color:rgba(64, 58, 58, 1);
    span {
        font-size: 44px;
    }
`

export const ContainerDescription = styled.div`
    color: rgba(64, 58, 58, 1);
`