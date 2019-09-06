import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Header, Footer, CardList, AnalyzeUrlComponent, Loading } from './Components'
import { WrongUrl, NotFound, GenericError } from './Components/ErrorComponents'
import constants from './Utils/constants';
import Repository from './Services/Repository';
import { packagesSortComparer } from './Utils/utils'

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
        return (
            <View style={style.content}>
                <Header />
                <AnalyzeUrlComponent handleAnalyzeClick={this.getPackages} />
                {
                    this.state.error ?
                        this.getErrorComponent()
                        :
                        <React.Fragment>
                            <CardList packages={this.state.packages} loading={this.state.loading} />
                            {
                                this.state.loading &&
                                <Loading percentage={Math.floor((this.state.packages.length / this.state.packagesCount) * 100) || 0} />
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
            for (let pkgName of response) {
                repo.getPackageInfo(pkgName).then(this.handleNewPackage, (err) => console.log(err))
            }
        }
    }

    handleNewPackage = (pkg) => {
        let stillLoading = (this.state.packages.length + 1 < this.state.packagesCount)
        let packages = [...this.state.packages, pkg]
        packages = stillLoading ? packages : packages.sort(packagesSortComparer)
        this.setState({ packages, loading: stillLoading })
    }

    getErrorComponent = () => {
        let { status } = this.state.error
        switch (status) {
            case constants.ERROR.WRONG_URL:
                return <WrongUrl />
            case constants.ERROR.NOT_FOUND:
                return <NotFound />
            case constants.ERROR.BAD_REQUEST:
            default:
                console.log(`${constants.MESSAGES.SOMETHING_WENT_WRONG} ${JSON.stringify(this.state.error)}`)
                return <GenericError />
        }
    }
}

const style = StyleSheet.create({
    content: {
        margin: 8,
        justifyContent: 'space-between'
    }
})