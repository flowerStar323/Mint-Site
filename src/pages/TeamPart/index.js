import React from "react";
import {
  TeamOut, TeamPart, TeamTitle, TeamBody, TeamItem, TeamImg, TeamItemName, TeamItemText
} from "./team.style";
const TeamContainer = () => {
  return (
    <>
      <TeamOut>
        <TeamPart>
          <TeamTitle>OUR TEAM</TeamTitle>
          <TeamBody>
            <TeamItem>
              <TeamImg src='img/team.png' alt='' />
              <TeamItemName>FARMeR Jon</TeamItemName>
              <TeamItemText>
                Third generation farmer turned bunny Sanctuary owner. God fearing animal lover.
              </TeamItemText>
            </TeamItem>
            <TeamItem>
              <TeamImg src='img/team.png' alt='' />
              <TeamItemName>FARMeR Jon</TeamItemName>
              <TeamItemText>
                Third generation farmer turned bunny Sanctuary owner. God fearing animal lover.
              </TeamItemText>
            </TeamItem>
            <TeamItem>
              <TeamImg src='img/team.png' alt='' />
              <TeamItemName>FARMeR Jon</TeamItemName>
              <TeamItemText>
                Third generation farmer turned bunny Sanctuary owner. God fearing animal lover.
              </TeamItemText>
            </TeamItem>
          </TeamBody>
        </TeamPart>
      </TeamOut>
    </>
  );
};
export default TeamContainer;
