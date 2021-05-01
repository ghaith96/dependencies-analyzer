import React from 'react'
import styled from 'styled-components';

export const WrongUrl: React.FC = () => {
    return (
        <Content>
            <Msg>Wrong URL format <span role='img' aria-label='dont-know'>🤷‍♂</span></Msg>
            <Status>Check the following valid examples <span role='img' aria-label='point-down'>👇</span></Status>
            <ReasonsContainer>
                <Row>• https://github.com/ghaith96/dependencies-analyzer (<em>given the repository has package.json in the base folder</em>)</Row>
                <Row>• https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json</Row>
                <Row>• https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json</Row>
            </ReasonsContainer>
        </Content>
    );
}

const Content = styled.div`
    margin: 8px 16px;
`;

const Msg = styled.div`
    font-size: 35px;
    color: #FF6B6B;
`;

const Status = styled.div`
    font-size: 20px;
    margin: 4px;
`;

const ReasonsContainer = styled.div`
    font-size: 20px;
    margin: 8px 0px;
`;

const Row = styled.div`
    font-size: 20px;
    margin: 8px 0px;
`;
