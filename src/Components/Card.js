import React from 'react'
import Analyzer from '../Services/Analyzer';
import { RandomSpinner } from '../Utils';

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            info: {}
        }
    }

    componentDidMount = async () => {
        // let response = await Analyzer.getPackageInfo(this.props.pkgName)
        // this.setState({ info: response, loading: false })
    }

    render() {
        if (this.state.loading)
            return (
                <div className="bg-lightest-blue br3 shadow5 grow" style={styles.loading} >
                    <RandomSpinner loading={this.state.loading} />
                </div >
            )
        return (
            <div className="bg-lightest-blue dib br3 pa3 ma3 bw2 shadow5 grow" >
                {
                    this.state.status ? this.getErrorContent() : this.getContent()
                }
            </div >
        )
    }

    getErrorContent = () => {
        let { pkgName, status, data } = this.state.info
        return (
            <React.Fragment>
                <p className="blue f2">{pkgName}</p>
                <p className="red di ma2 f1">{status}</p>
                <p className="red di f3">{data.error}</p>
            </React.Fragment>
        )
    }

    getContent = () => {
        let { pkgName,
            description,
            homepage,
            latestVersion } = this.state.info
        return (
            <React.Fragment>
                <a href={homepage} className="no-underline" target="_blank" rel="noopener noreferrer">
                    <p className="blue di f2">{pkgName}</p>
                </a>
                <p className="di pv4 ph2 f4">{latestVersion}</p>
                <p className="f3">{description}</p>
            </React.Fragment>
        )
    }
}

const styles = {
    loading: {
        width: 250,
        height: 250,
        margin: 30,
        padding: 30,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}