import styled from "styled-components";

export const RoadMapOut = styled.div`
    width: 100vw;
    display: flex;
    margin-top: 80px;
    justify-content: center;
`;
export const Roadmap = styled.div`
    width: 1440px;
`;
export const RoadmapTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #2E1E00;
     z-index: 2;
    position: relative;
    ::after{
        content: url('img/roadmapline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
    }
`;
export const RoadmapFirstLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const RoadmapFirstPart = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${(props) => props.mt};
`;
export const RoadCard = styled.div`
    display: flex;
    padding: 52px 0 52px 74px;
    background: #FFFFFF;
    width: 980px;
    border-radius: 30px;
`;
export const RoadProImg = styled.img`
    margin-right: 74px;
`;
export const RoadCardRight = styled.div`
    width: 504px;
`;
export const RoadRightText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    margin-top: 12px;
    font-size: 18px;
    line-height: 28px;
    color: #625744;

`;
export const RoadRightTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 42px;
    color: #2E1E00;
`;
export const RoadmapFirstRight = styled.img`
    width: 420px;
    margin-left: -30px;
`;
export const RoadmapSecPart = styled.div`
    display: flex;
    margin-top: 28px;
    align-items: center;
    justify-content: space-between;
`;
export const RoadmapSecLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const RoadmapSecRight = styled.img`
    margin-left: -50px;
`;