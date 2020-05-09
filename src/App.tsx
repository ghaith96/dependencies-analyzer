import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Footer, CardList, UrlInput, Loading } from './Components';
import { repositoryService } from './Services/Repository';
import { packagesComparer, isValidUrl } from './Utils/utils';
import { getErrorComponent } from './Utils/renderHelpers';
import { Package } from './Models/Package';
import { Response } from './Api/Api';
import { getRawGitHubUrl } from './Services/UrlParser';
import constants from './Utils/constants';

interface IProps {

}

interface IState {
    loading: boolean;
    lastError: number;
    packages: Package[],
    packagesCount: number;
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            loading: false,
            lastError: -1,
            packages: [],
            packagesCount: 0,
        }
    }

    render() {
        const url = this.tryParseUrl()
        const percentage = Math.floor((this.state.packages.length / this.state.packagesCount) * 100) || 0
        const { loading, lastError } = this.state;
        return (
            <View style={style.content}>
                <Header />
                <UrlInput urlProp={url} handleAnalyzeClick={this.getPackages} />
                {
                    lastError >= 0 ?
                        getErrorComponent(lastError)
                        :
                        <>
                            <CardList packages={this.state.packages} />
                            {loading && <Loading percentage={percentage} />}
                        </>
                }
                <Footer />
            </View>
        );
    }

    getPackages = async (url: string) => {
        this.setState({ loading: true, packages: [], lastError: -1 });
        const rawUrl = getRawGitHubUrl(url);

        if (rawUrl) {
            await this.fetchPackages(rawUrl);
        } else {
            this.setState({ loading: false, packages: [], lastError: constants.ERROR.WRONG_URL_FORMAT });
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
            const stillLoading = (this.state.packages.length + 1 < this.state.packagesCount);
            let packages = [...this.state.packages, pkg];
            packages = stillLoading ? packages : packages.sort(packagesComparer);
            this.setState({ packages, loading: stillLoading });
        }
    }

    tryParseUrl = () => {
        let url = window.location.pathname.replace('/', '') + '/';
        return isValidUrl(url);
    }
}

const style = StyleSheet.create({
    content: {
        margin: 8,
        justifyContent: 'space-between'
    }
})
