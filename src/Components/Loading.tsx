import React from 'react';
import styled from 'styled-components';

interface IProps {
    percentage: number;
}

export const Loading: React.FC<IProps> = ({ percentage }) => {
    return (
        <Content>
            <Percentage>LOADING... {percentage}%</Percentage>
            <ProgressBar percentage={percentage} />
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Percentage = styled.div`
    font-size: 15px;
    margin: 0px 16px;
`;

const ProgressBar = styled.div<{ percentage: number }>`
    width: ${({ percentage }) => percentage}%;
    height: 1px;
    background: red;
    transition: width 0.3s;
    margin: 4px;
`;
