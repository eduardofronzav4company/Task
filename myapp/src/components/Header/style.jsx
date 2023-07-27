import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 80%;
    margin: auto;   
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid white;
`

export const Navegation = styled.nav`
    font-size: 18px;
`
export const Logo = styled.div`
    margin: 15px 10px;
> img {
    width: 125px;
    height: 32px;
}
`
export const ContainerList = styled.ul`
    display: flex;
    list-style:none;
    
`

export const ItemList = styled.li`
    margin: 0 0 0 25px;
    
> a {
    color: #FFFFFF;
    text-decoration: none;
}

a:hover {
    background-color: #FFFFFF33;
    padding: 25px 5px;

}
`

export const TextContent = styled.div`
    color: #FFFFFF;
//  background-color: red;
    margin:50vh 10vw;

    h1, span {
        font-size: 64px;
        font-weight:700;
        line-height: 30px;
    }

    p span {
        display:block;
        font-size: 16.5px;
        text-transform: uppercase;
    }
`