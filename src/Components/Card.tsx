import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import { Package } from '../Models/Package';

interface IProps {
    pkg: Package;
}

export const Card: React.FC<IProps> = ({ pkg }) => {
    const { name, homePage, latestVersion, description } = pkg;
    const openHomePage = () => homePage && window.open(homePage, '_blank');
    const copyNameToClipboard = () => Clipboard.setString(name);

    return (
        <View style={style.content}>
            <View style={style.cardHeader}>
                <TouchableOpacity onPress={openHomePage} onLongPress={copyNameToClipboard}>
                    <Text style={style.pkgName}>{name}</Text>
                </TouchableOpacity>
                <Text style={style.latestVersion}>{latestVersion}</Text>
            </View>
            <View style={style.descriptionContent}>
                <Text style={style.description}>{description}</Text>
            </View>
        </View>

    );
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
});
