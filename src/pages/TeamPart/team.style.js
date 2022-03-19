import styled from "styled-components";

export const TeamOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;
export const TeamPart = styled.div`
    width: 1440px;
`;
export const TeamTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;   
    margin-bottom: 35px;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #2E1E00;
    z-index: 2;
    position: relative;
    ::after{
        content: url('img/teamline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
    }
`;
export const TeamBody = styled.div`
    display: flex;
    gap: 48px;
`;
export const TeamItem = styled.div`
    
`;
export const TeamImg = styled.img`
    
`;
export const TeamItemName = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    margin: 28px 0 12px 0;
    font-size: 38px;
    line-height: 42px;
    color: #2E1E00;
`;
export const TeamItemText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    width: 294px;
    color: #625744;
`;