import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Header, Footer, CardList, UrlInput, Loading } from './Components'
import Repository from './Services/Repository';
import { packagesComparer, isValidUrl } from './Utils/utils'
import { getErrorComponent } from './Utils/renderHelpers'
import ReactMarkDown from 'react-markdown'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            error: false,
            packages: [],
            packagesCount: 0,
        }
    }

    render() {
        let url = this.tryParseUrl()
        let percentage = Math.floor((this.state.packages.length / this.state.packagesCount) * 100) || 0
        return (
            <View style={style.content}>
                <Header />
                {
                    !this.state.loading &&
                    <ReactMarkDown source={this.state.packages[0] ? this.state.packages[0].readme : ''} />
                }
                <UrlInput url={url} handleAnalyzeClick={this.getPackages} />
                {
                    this.state.error ?
                        getErrorComponent(this.state.error)
                        :
                        <React.Fragment>
                            <CardList packages={this.state.packages} loading={this.state.loading} />
                            {
                                this.state.loading &&
                                <Loading percentage={percentage} />
                            }
                        </React.Fragment>
                }
                <Footer />
            </View>
        )
    }

    getPackages = async (url) => {
        this.setState({ loading: true, packages: [], error: false })
        let repo = Repository.getInstance()

        let response = await repo.getPackages(url)
        if (response.status) {
            this.setState({ loading: false, error: response })
        } else {
            this.setState({ packagesCount: response.length })
            response.forEach(pkgName => repo.getPackageInfo(pkgName).then(this.handleNewPackage, console.error))
        }
    }

    handleNewPackage = (pkg) => {
        let stillLoading = (this.state.packages.length + 1 < this.state.packagesCount)
        let packages = [...this.state.packages, pkg]
        packages = stillLoading ? packages : packages.sort(packagesComparer)
        this.setState({ packages, loading: stillLoading })
    }

    tryParseUrl = () => {
        let url = window.location.pathname.replace('/', '') + '/'
        return isValidUrl(url)
    }
}

const style = StyleSheet.create({
    content: {
        margin: 8,
        justifyContent: 'space-between'
    }
})