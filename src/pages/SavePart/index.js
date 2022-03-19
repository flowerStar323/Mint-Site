import React from "react";

import {
  SaveOut, SavePart, SaveTitle, SaveBtn,
} from "./save.style";

const SaveContainer = () => {
  return (
    <>
      <SaveOut>
        <SavePart>
          <SaveTitle>Save the Bunnies!</SaveTitle>
          <SaveBtn>Join the Community</SaveBtn>
        </SavePart>
      </SaveOut>
    </>
  );
};
export default SaveContainer;
