import React from 'react'
import styled from 'styled-components';

export const NotFound: React.FC = () => {
    return (
        <Content>
            <Header>
                <Msg>GitHub responded with </Msg>
                <Status>404 NOT FOUND</Status>
            </Header>
            <Description>Take note of the following <span role='img' aria-label='point-down'>👇</span> while investigating <span role='img' aria-label='investigate'>🧐</span></Description>
            <ReasonsContainer>
                <Row>• Make sure the repository is NodeJs project. (i.e: has <code>package.json</code> file)</Row>
                <Row>• Try to submit an absolute url to the <code>package.json</code> file in the repository.</Row>
                <Row>• Double check the submitted URL <span role='img' aria-label='luck'>🤞</span>.</Row>
                <Row>• Private repositories are <em>NOT</em> supported.</Row>
            </ReasonsContainer>
        </Content>
    );
}

const Content = styled.div`
    margin: 8px 16px;
`;

const Msg = styled.div`
    font-size: 35px;
`;

const Status = styled.div`
    color: #FF6B6B;
    font-size: 35px;
`;

const Header = styled.div`
    display: flex;
`;

const Description = styled.div`
    font-size: 20px;
    margin: 4px;
`;

const ReasonsContainer = styled.div`
    margin: 4px;
    margin-left: 12px;
`;

const Row = styled.div`
    font-size: 20px;
    margin: 8px 0px;
`;
