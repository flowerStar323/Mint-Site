import React from "react";
import {
  RoadMapOut, Roadmap, RoadmapTitle, RoadmapFirstLeft, RoadmapFirstPart, RoadCard, RoadProImg, RoadCardRight, RoadRightText, RoadRightTitle, RoadmapFirstRight,
  RoadmapSecPart, RoadmapSecLeft, RoadmapSecRight
} from "./roadmap.style";
const MainPage = () => {
  return (
    <>
      <RoadMapOut>
        <Roadmap>
          <RoadmapTitle>RoADMAP</RoadmapTitle>
          {/* -----------first part---------------- */}
          <RoadmapFirstPart mt='40px'>
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src='img/onepro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>816 Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    While that’s not nothin’, it also ain’t much. That’s gonna be a lot of work killing 7,344 bunnies, and we’re liable to get carpal tunnel in the process. We know you can save more bunnies than that!
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src='img/twopro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>1,632 Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    Did you know it takes 30 rabbit hides to make a fur coat? Guess we’ll be making 217 coats unless you can save some more bunnies.
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRight src='img/roadfirst.png' alt='' />
          </RoadmapFirstPart>
          {/* ------------sec part---------------------- */}
          <RoadmapSecPart>
            <RoadmapSecRight src='img/secroadmap.png' alt='' />
            <RoadmapSecLeft>
              <RoadCard>
                <RoadProImg src='img/fourpro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>3,264 Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    Now we’re cooking with fire! A bonfire, that is. Do you know how long it would take to pan fry 4,896 bunnies? About 816 hours. We don’t have time for that!
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src='img/sixpro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>4,896 Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    Hey, good job! I guess we could sell the remaining 3,264 bunnies to an animal testing facility like Covance where they will be used for toxicity testing of drugs, chemicals, and medical devices. PETA has some great articles on Covance, if you’re interested.
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapSecLeft>
          </RoadmapSecPart>
          {/* -----------third part--------------- */}
          <RoadmapFirstPart mt='30px'>
            <RoadmapFirstLeft>
              <RoadCard>
                <RoadProImg src='img/eightpro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>6,528 Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    Now we’re talking! That’s only 1,632 left to be slaughtered. Heck, we’ll probably just skin them and toss ‘em in the freezer. That’s some good eatin’!
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
              <RoadCard>
                <RoadProImg src='img/hundredpro.svg' alt='' />
                <RoadCardRight>
                  <RoadRightTitle>ALL Bunnies Saved</RoadRightTitle>
                  <RoadRightText>
                    Well, if you make it this far, we’ll be impressed. Get ready to see a whole lot of happy and healthy bunnies at the sanctuary!
                  </RoadRightText>
                </RoadCardRight>
              </RoadCard>
            </RoadmapFirstLeft>
            <RoadmapFirstRight src='img/thirdroad.png' alt='' />
          </RoadmapFirstPart>
        </Roadmap>
      </RoadMapOut>
    </>
  );
};
export default MainPage;
