import React from 'react';
import styled from 'styled-components';

export const GenericError: React.FC = () => {
    return (
        <Content>
            <Title><span role='img' aria-label='sorry'>😓</span> Something went wrong somewhere..</Title>
            <Description>SORRY! This shouldn't be happening.</Description>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px 0px;
`;

const Title = styled.div`
    font-size: 35px;
    color: #FF6B6B;
`;

const Description = styled.div`
    margin: 8px;
    font-size: 20px;
`;
