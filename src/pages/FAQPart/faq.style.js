import styled from "styled-components";

export const FAQOut = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 156px;
`;
export const FAQPart = styled.div`
    display: flex;
    width: 1440px;
    justify-content: space-between;
    align-items: flex-start;
`;
export const FAQLeft = styled.div`
    
`;
export const FAQTitle = styled.div`
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
        content: url('img/faqline.svg');
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: -13px;
    }
`;
export const FAQList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 40px;
`;
export const FAQItem = styled.div`
    background: #FFFFFF;
    border-radius: 16px;
    width: 864px;
    height: 82px;
    display: flex;
    align-items: center;
    padding: 0 28px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #101828;
`;
export const PlusImg = styled.img`
    margin-right: 19.94px;
`;
export const FAQRight = styled.img`
    width: 500px;
`;