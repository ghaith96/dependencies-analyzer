import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
    const goToMyGithub = () => window.open('https://github.com/ghaith96', '_blank');

    return (
        <Content>
            <Msg>Made with <span role='img' aria-label='heart'>💖</span> by </Msg>
            <BoldText onClick={goToMyGithub}>ghaith</BoldText>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 8px;
    user-select: none;
`;

const Msg = styled.div`
    font-size: 18px;
`;

const BoldText = styled.div`
    color: #5475AB;
    font-size: 18px;
    font-weight 600;
    padding-left: 4px;
    cursor: pointer;
`;
