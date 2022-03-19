import React from "react";
import {
  TitlePart, TLeft, SaveBunniText, SaveBunniSub, SaveBunniBtnRight, SaveBunniBtns, TRight, SaveBunniBtnLeft
} from "./titlepart.style";
const TitleContainer = () => {
  return (
    <>
      <TitlePart>
        <TLeft>
          <SaveBunniText>
            <span>SAVe</span> THe BuNNIeS!
          </SaveBunniText>
          <SaveBunniSub>
            A collection of 8,160 NFTs with unreal consequences. Each NFT minted saves a bunny life. Any unminted NFTs equals the number of bunnies we'll have to kill. Will you step up and save the bunnies
          </SaveBunniSub>
          <SaveBunniBtns>
            <SaveBunniBtnLeft>
              Mint Date:<br />
              <span>APRIL 17,2022</span>
            </SaveBunniBtnLeft>
            <SaveBunniBtnRight>
              JoIN THE CoMMUNITY
            </SaveBunniBtnRight>
          </SaveBunniBtns>
        </TLeft>
        <TRight src='img/bunni.png' alt='' />
      </TitlePart>
    </>
  );
};
export default TitleContainer;
