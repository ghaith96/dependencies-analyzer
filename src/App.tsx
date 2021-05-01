import React from 'react';
import styled from 'styled-components';

import { Header, Footer, CardList, UrlInput, Loading } from './Components';
import { repositoryService } from './Services/Repository';
import { isValidUrl } from './Utils/utils';
import { getErrorComponent } from './Utils/renderHelpers';
import { Package } from './Models/Package';
import { Response } from './Api/types';
import { getRawGitHubUrl } from './Services/UrlParser';
import { AppError } from './Utils/types';

interface IState {
    loading: boolean;
    lastError: number;
    packages: Package[],
    packagesCount: number;
}

export default class App extends React.Component<{}, IState> {
    constructor(props: never) {
        super(props)
        this.state = {
            loading: false,
            lastError: -1,
            packages: [],
            packagesCount: 0,
        }
    }

    render() {
        const url = this.tryParseUrl();
        const percentage = Math.floor((this.state.packages.length / this.state.packagesCount) * 100) || 0;
        const { loading, lastError } = this.state;
        return (
            <Content>
                <div>
                    <Header />
                    <UrlInput loading={loading} urlProp={url} handleAnalyzeClick={this.getPackages} />
                    {
                        lastError >= 0 ?
                            getErrorComponent(lastError)
                            :
                            <>
                                <CardList packages={this.state.packages} />
                                {loading && <Loading percentage={percentage} />}
                            </>
                    }
                </div>
                <Footer />
            </Content>
        );
    }

    getPackages = async (url: string) => {
        this.setState({ loading: true, packages: [], lastError: -1 });
        const rawUrl = getRawGitHubUrl(url);

        if (rawUrl) {
            await this.fetchPackages(rawUrl);
        } else {
            this.setState({ loading: false, packages: [], lastError: AppError.WRONG_URL_FORMAT });
        }
    }

    fetchPackages = async (url: string) => {
        const response = await repositoryService.getPackages(url);
        if (response.ok) {
            const dependencies = Object.keys(response.data.dependencies);
            this.setState({ packagesCount: dependencies.length })
            dependencies.forEach(name => repositoryService.getPackageInfo(name).then(this.handleNewPackage, console.error))
        } else {
            this.setState({ loading: false, lastError: response.status });
        }
    }

    handleNewPackage = (response: Response<Package>) => {
        if (response.ok) {
            const pkg = response.data;
            this.setState((prevState: IState) => ({ packages: [...prevState.packages, pkg], loading: prevState.packages.length + 1 < prevState.packagesCount }));
        }
    }

    tryParseUrl = () => {
        const url = window.location.pathname.replace('/', '') + '/';
        return isValidUrl(url);
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    margin: 8px;
`;
