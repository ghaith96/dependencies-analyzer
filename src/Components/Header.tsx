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
`
const Title = styled.p`
    font-size: 2em;
    color: #47BBB3;
`
const Description = styled.div`
    font-size: 1.2em;
    padding-left:4px;
    padding-right: 4px;
`
