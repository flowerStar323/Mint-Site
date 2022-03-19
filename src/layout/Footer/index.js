import React from "react";
import { Link } from "react-router-dom";
import {
    FooterOut, FooterPart, FooterTop, FooterLogoImg, FooterNav, FooterItem, SocialIconImg, SocialItems, FooterBottom, FBLeft, FBRight, FBItem,
} from "./footer.style";
const FooterContainer = () => {
    return (
        <FooterOut>
            <FooterPart>
                <FooterTop>
                    <FooterLogoImg src='img/footerlogo.svg' alt='' />
                    <FooterNav>
                        <FooterItem>Our Story</FooterItem>
                        <FooterItem>Roadmap</FooterItem>
                        <FooterItem>Benefits</FooterItem>
                        <FooterItem>Team</FooterItem>
                        <FooterItem>FAQ</FooterItem>
                    </FooterNav>
                    <SocialItems>
                        <SocialIconImg src='img/footertwitter.svg' alt='' />
                        <SocialIconImg src='img/footerinstagram.svg' alt='' />
                        <SocialIconImg src='img/footerdiscord.svg' alt='' />
                        <SocialIconImg src='img/footeropensea.svg' alt='' />
                    </SocialItems>
                </FooterTop>
                <FooterBottom>
                    <FBLeft>© 2022 Save the Bunnies. All rights reserved.</FBLeft>
                    <FBRight>
                        <FBItem>Privacy</FBItem>
                        <FBItem>Terms</FBItem>
                        <FBItem>Do Not Sell My Info</FBItem>
                    </FBRight>
                </FooterBottom>
            </FooterPart>
        </FooterOut>
    );
};
export default FooterContainer;
