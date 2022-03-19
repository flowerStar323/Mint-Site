import React from "react";
import {
  BenefitOut, Benefit, BenefitLeft, BenefitTitle, BenefitUL, BenefitLi, BenefitRight
} from "./benefit.style";
const BenefitContainer = () => {
  return (
    <>
      <BenefitOut>
        <Benefit>
          <BenefitLeft>
            <BenefitTitle>BENEFITS</BenefitTitle>
            <BenefitUL>
              <BenefitLi>
                Each NFT minted is a bunny saved. Up to 8,160 precious bunny lives.
              </BenefitLi>
              <BenefitLi>
                5% shared royalties for the original minter for all OpenSea transactions.
              </BenefitLi>
              <BenefitLi>
                10 ultra rare and totally unique Legendary NFT with 10% royalty for the original minter.
              </BenefitLi>
              <BenefitLi>
                Community member access to the Sanctuary.
              </BenefitLi>
              <BenefitLi>
                15% of all sales will go to a DAO treasury reserved for future projects determined by the community.
              </BenefitLi>
              <BenefitLi>
                Integration of NFT breeding.
              </BenefitLi>
              <BenefitLi>
                Whitelist guaranteed for community members for all future projects.
              </BenefitLi>
              <BenefitLi>
                Save the Bunnies game.
              </BenefitLi>
            </BenefitUL>
          </BenefitLeft>
          <BenefitRight src='img/benefit.png' alt='' />
        </Benefit>
      </BenefitOut>
    </>
  );
};
export default BenefitContainer;
