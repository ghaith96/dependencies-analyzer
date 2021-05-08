import React from 'react';
import styled from 'styled-components';

import { Package } from 'src/Api/types';
import { Header, Footer, CardList, UrlInput, Loading } from '../Components';
import { getErrorComponent } from '../Utils/renderHelpers';

interface IProps {
    loading: boolean;
    error: number;
    url: string;
    packages: Package[];
    donePercentage: number;
    onAnalyzeClick: (url: string) => void;
}

export const AppComponent: React.FC<IProps> = ({ loading, error, url, packages, donePercentage, onAnalyzeClick }: IProps) => {
    return (
        <Content>
            <div>
                <Header />
                <UrlInput
                    loading={loading}
                    urlProp={url}
                    handleAnalyzeClick={onAnalyzeClick}
                />
                {
                    Boolean(error) ?
                        getErrorComponent(error)
                        :
                        <>
                            {loading && <Loading percentage={donePercentage} />}
                            <CardList packages={packages} />
                        </>
                }
            </div>
            <Footer />
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    margin: 8px;
`;
