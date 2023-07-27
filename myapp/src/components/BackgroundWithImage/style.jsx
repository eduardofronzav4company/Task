import styled from 'styled-components';

export const ContaienrBackground= styled.div`
    height: ${(props) => props.height};
    background: url(${(props)=>props.imgUrl}); 
    background-repeat: no-repeat;
    background-size: 100%;
  
`