import React from 'react'
import { HeaderContainer, ItemMenu, MenuHeader, LogoHeader, TitleHeader } from './header.styles'
const Header = () => {
    return (
        <HeaderContainer>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <LogoHeader src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />
            <TitleHeader>Maximus LoungeBar</TitleHeader>
            <MenuHeader>
                <ItemMenu>
                    Desenvolvendo
                </ItemMenu>
                <ItemMenu>
                    Desenvolvendo
                </ItemMenu>
            </MenuHeader>
        </HeaderContainer>
    )
}
export default Header