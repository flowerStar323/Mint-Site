import styled from "styled-components";

export const BenefitOut = styled.div`
    background: url('img/grass.png');
    background-repeat: no-repeat;
    margin-top: -10px;
    background-size: 100% 100%;
    width: 100vw;
    display: flex;
    padding: 120px 0;
    justify-content: center;
`;

export const Benefit = styled.div`
    width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BenefitLeft = styled.div`

`;

export const BenefitTitle = styled.div`
    font-family: 'Luckiest Guy';
    font-style: normal;
    font-weight: 400;
    font-size: 78px;
    line-height: 80px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    z-index: 2;
    position: relative;
    ::after{
        content: url('img/graphic_line.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -15px;
    }
`;

export const BenefitUL = styled.ul`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const BenefitLi = styled.li`
    width: 602px;
    ::marker {
        color: #FFD600;
        width: 12px;
        height: 12px;
    }
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
`;

export const BenefitRight = styled.img`
    width: 500px;
`;
