import styled from "styled-components";

export const StoryPartOut = styled.div`
    background: url('img/story.png');
    background-position: center;
    background-size: 100% 100%;
    margin-top: -5px;
    padding: 112px 62px;
    display: flex;
    justify-content: center;
`;
export const StoryPart = styled.div`
    width: 1440px;
`;
export const OurStory = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #FFD600;
`;
export const MainStory = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;
export const StoryLeft = styled.div`
    
`;
export const StoryText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    width: 418px;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
    span{
        color: #FFD600;
    }
`;
export const StoryTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    width: 636px;
`;
export const StorySub = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin-top: 25px;
    color: #FFFFFF;
    width: 636px;
`;
export const StoryRightItem = styled.div`
    display: flex;
    align-items: flex-start;
`;
export const StoryImg = styled.img`
    margin-right: 32px;
`;
export const StoryRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;