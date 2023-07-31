import { styled } from "styled-components"

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