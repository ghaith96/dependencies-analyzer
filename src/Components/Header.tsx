import React from 'react';
import styled from 'styled-components';

export const Header: React.FC = () => {
    return (
        <Content>
            <Title>Dependencies Analyzer</Title>
            <Description>get fast insight into any NodeJs project on GitHub by peeking at its dependencies</Description>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 25px;
    color: #47BBB3;
`;

const Description = styled.div`
    font-size: 20px;
    margin: 4px 0px;
    margin-left: 8px;
    color: #1A535C;
`;
