import React from "react";
// --------------layer----------------
import Header from "../layout/Header";
import Footer from "../layout/Footer";

// ---------------------pages------------------
import TitlePart from "./TitlePart";
import TimerPart from "./TimerPart";
import StoryPart from "./StoryPart";
import BenefitPart from "./BenefitPart";
import RoadmapPart from "./RoadmapPart";
import LegenPart from "./LegenPart";
import TeamPart from "./TeamPart";
import FAQPart from "./FAQPart";
import SavePart from "./SavePart";

import {
    BunniPart
} from "./main.style";
const MainPage = () => {
    return (
        <>
            <BunniPart>
                <Header />
                <TitlePart />
                <TimerPart />
            </BunniPart>
            <StoryPart />
            <BenefitPart />
            <RoadmapPart />
            <LegenPart />
            <TeamPart />
            <FAQPart />
            <SavePart />
            <Footer />
        </>
    );
};
export default MainPage;
