import styled from "styled-components";

export const TitlePart = styled.div`
    width: 1440px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;
export const TLeft = styled.div`

`;
export const SaveBunniText = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    line-height: 110px;
    letter-spacing: -0.02em;
    color: #2E1E00;
    width: 460px;
    span{
        z-index: 2;
        position: relative;
        ::after{
            content: url('img/yellowline.svg');
            z-index: -1;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
`;
export const SaveBunniSub = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top: 15px;
    width: 510px;
    line-height: 28px;
    color: #625744;
`;
export const SaveBunniBtnRight = styled.div`
    background: #FFD600;
    width: 239px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 12px;
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2E1E00;
`;
export const SaveBunniBtns = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 36px;
    align-items: center;
`;
export const TRight = styled.img`

`;
export const SaveBunniBtnLeft = styled.div`
    background: #FFFFFF;
    border: 2px solid #DDEDC9;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #625744;
    padding: 15px 0 0 23px;
    width: 160px;
    height: 78px;
    span{
        font-family: 'Luckiest Guy';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #2E1E00;
    }
`;