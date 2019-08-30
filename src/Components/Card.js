import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native'

export default class Card extends React.PureComponent {

    render() {
        let { name, description, latestVersion } = this.props.pkg
        return (
            <View style={style.content}>
                <View style={style.cardHeader}>
                    <TouchableOpacity onPress={this.openHomePage} onLongPress={this.copyNameToClipboard}>
                        <Text style={style.pkgName}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={style.latestVersion}>{latestVersion}</Text>
                </View>
                <View style={style.descriptionContent}>
                    <Text style={style.description}>{description}</Text>
                </View>
            </View>
        )
    }
    openHomePage = () => this.props.pkg.homePage && window.open(this.props.pkg.homePage, '_blank')
    copyNameToClipboard = () => Clipboard.setString(this.props.pkg.name)
}
const style = StyleSheet.create({
    content: {
        justifyContent: 'space-between',
        padding: 12,
        margin: 8,
        borderRadius: 5,
        minHeight: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    spinnerDims: {
        height: 150,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    pkgName: {
        fontSize: 24,
        color: '#47BBB3'
    },
    latestVersion: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    descriptionContent: {
        flex: 1,
        flexGrow: 1,
        width: 300,
        paddingTop: 8,
        paddingStart: 8
    },
    description: {
        fontSize: 20
    },
})