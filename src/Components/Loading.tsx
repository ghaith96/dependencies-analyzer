import React from 'react';
import styled from 'styled-components';

interface IProps {
    percentage: number;
}

export const Loading: React.FC<IProps> = ({ percentage }) => {
    return (
        <Content>
            <Percentage>LOADING... {percentage}%</Percentage>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Percentage = styled.div`
    font-size: 15px;
    margin: 0px 16px;
`;
