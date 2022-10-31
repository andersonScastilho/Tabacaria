import React from 'react'
import { HeaderContainer, ItemMenu, MenuHeader, LogoHeader } from './header.styles'
const Header = () => {
    return (
        <HeaderContainer>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <LogoHeader src='https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg' />
            <h1>Maximus Tabacaria</h1>
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