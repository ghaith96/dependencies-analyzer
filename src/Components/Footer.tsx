import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
    return (
        <Content>
            <Footer1>Made with <span role='img' aria-label='heart'>💖</span> by </Footer1>
            <Footer2 href='https://github.com/ghaith96' target='_blank'>ghaith</Footer2>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
`;

const Footer1 = styled.div`
    font-size: 1.2em;
    padding-right: 0.5em;
`;

const Footer2 = styled.a`
    color: #5475AB;
    font-size: 1.2em;
    font-weight: 600;
    text-decoration: none;
`;
