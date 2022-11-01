import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #8fa080;
    padding: 10px;
    justify-content: space-between;
`
export const TitleHeader = styled.h1`
    color: #e30224;
`
export const LogoHeader = styled.img`
     height: 6rem;
     width: 10rem;
`
export const MenuHeader = styled.menu`
    display: flex;
    gap: 10px;
    padding: 5px;
`
export const ItemMenu = styled.div`
        border-radius: 5px;
        border: 2px solid transparent;
        padding: 3px;
        box-shadow: 2px 2px 2px #222;
    &:hover {
        cursor: pointer;
        border: 2px solid black;

}
`