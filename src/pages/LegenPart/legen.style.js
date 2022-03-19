import styled from "styled-components";

export const LegenOut = styled.div`
    width: 100vw;
    display: flex;
    margin-top: 150px;
    justify-content: center;
`;
export const LegenPart = styled.div`
    width: 1440px;
`;
export const LegenTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    z-index: 1;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #2E1E00;
    z-index: 2;
    margin-bottom: 40px;
    position: relative;
    ::after{
        content: url('img/legenline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
    }
`;
export const LegenImg = styled.img`
    
`;
export const LegenItem = styled.div`
    padding: 12px 12px 24px;
    background-color: #fff;
    box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.05), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    border-radius: 30px;
`;
export const LegenName = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    margin-top: 18px;
    font-size: 24px;
    line-height: 34px;
    color: #2E1E00;
`;
