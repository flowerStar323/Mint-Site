import React from "react";
import {
  StoryPartOut, StoryPart, OurStory, MainStory, StoryLeft, StoryText, StoryTitle, StorySub, StoryRightItem, StoryImg, StoryRight,
} from "./story.style";
const StoryContainer = () => {
  return (
    <>
      <StoryPartOut>
        <StoryPart>
          <OurStory>OUR SToRY</OurStory>
          <MainStory>
            <StoryLeft>
              <StoryTitle>
                For three generations, our family has been one of the largest rabbit farms in North America.
              </StoryTitle>
              <StorySub>
                Well, at least we were. For years, PETA and the Rabbit Advocacy Network have waged a war against us, protesting outside grocery stores and shaming young people to stop eating rabbit meat.
              </StorySub>
            </StoryLeft>
            <StoryRight>
              <StoryRightItem>
                <StoryImg src='img/bear.png' alt='' />
                <StoryText>
                  PETA won. We lost our two largest grocers, and we’ve been bleeding money ever since. Do you know what happens to the animals when a farm has to close? <span>They die painful, horrible deaths.</span>
                </StoryText>
              </StoryRightItem>
              <StoryRightItem>
                <StoryImg src='img/greenheart.png' alt='' />
                <StoryText>
                  We're going to turn this bunny farm into The Sanctuary where anyone can come visit these little cuties, but we need your help! Save the bunnies!
                </StoryText>
              </StoryRightItem>
            </StoryRight>
          </MainStory>
        </StoryPart>
      </StoryPartOut>
    </>
  );
};
export default StoryContainer;
