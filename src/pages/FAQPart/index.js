import React from "react";
import {
  FAQOut, FAQPart, FAQLeft, FAQTitle, FAQList, FAQItem, PlusImg, FAQRight
} from "./faq.style";
const MainPage = () => {
  return (
    <>
      <FAQOut>
        <FAQPart>
          <FAQLeft>
            <FAQTitle>FAQ</FAQTitle>
            <FAQList>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />When will save the bunnies actually launch?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />How can I buy a save the bunnies nft?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />What are the rarity properties like?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />What is the mint price?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />How many can I mint?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />When is the reveal?
              </FAQItem>
              <FAQItem>
                <PlusImg src='img/plus.svg' alt='' />What's the deal with royalty sharing?
              </FAQItem>
            </FAQList>
          </FAQLeft>
          <FAQRight src='img/carrot.png' alt='' />
        </FAQPart>
      </FAQOut>
    </>
  );
};
export default MainPage;
