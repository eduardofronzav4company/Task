import { styled } from "styled-components";

export const ContainerItemGraphic = styled.div`
    p {
        display: flex;
        justify-content: space-between;
    }

    span {
        color: rgba(116, 116, 116, 1);
    }
`;
export const GradientLine = styled.hr`
    margin: 5px 0px 30px 0px;
    height: 5px;
    border: none;
    background: linear-gradient(to right, red ${(props) => props.Porcent}, gray 0%);
`;