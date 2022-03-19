import React from "react";
import { Link } from "react-router-dom";
import {
    HeaderOut, LogoImg, NavMenu, NavItem, SocialIconImg, SocialItems,
} from "./header.style";
const HeaderContainer = () => {
    return (
        <HeaderOut>
            <LogoImg src='img/logo.png' alt='' />
            <NavMenu>
                <NavItem>OuR STORY</NavItem>
                <NavItem>ROADMAP</NavItem>
                <NavItem>BeNeFITS</NavItem>
                <NavItem>TeAM</NavItem>
                <NavItem>FAQ</NavItem>
            </NavMenu>
            <SocialItems>
                <SocialIconImg src='img/twitter.svg' alt='' />
                <SocialIconImg src='img/instagram.svg' alt='' />
                <SocialIconImg src='img/discord.svg' alt='' />
                <SocialIconImg src='img/opensea.svg' alt='' />
            </SocialItems>
        </HeaderOut>
    );
};
export default HeaderContainer;
