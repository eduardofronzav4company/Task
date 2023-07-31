import { styled } from "styled-components";


export const ButtonHeader = styled.button`
    background-color:${(props) => props.backgroundColor || '#E50914'} ;
    color:${(props) => props.color || '#FFFFFF'} ;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin-top:  ${(props) => props.marginTop || '0'};

    border: ${(props) => props.border || 'none'};
    border-radius: 15px 0px 15px 0px;

    font-size:16px;
    font-weight: ${(props) => props.fontWeight || '800'};
    text-transform: uppercase;
`