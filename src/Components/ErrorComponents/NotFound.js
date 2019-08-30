import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class NotFound extends React.PureComponent {

    render() {
        return (
            <View style={style.content}>
                <View style={style.headerContent}>
                    <Text style={style.header}>GitHub responded with </Text>
                    <Text style={style.error}>404 NOT FOUND</Text>
                </View>
                <Text style={style.description}>Take note of the following <span role='img' aria-label='look-down'>👇</span> while investigating <span role='img' aria-label='investigate'>🧐</span></Text>
                <View style={style.examplesContainer}>
                    <Text style={style.example}>• Private repositories is not supported</Text>
                    <Text style={style.example}>• Double check the submitted URL <span role='img' aria-label='luck'>🤞</span></Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    content: {
        margin: 8,
        marginHorizontal: 16
    },
    headerContent: {
        flexDirection: 'row'
    },
    header: {
        fontSize: 35
    },
    error: {
        color: '#FF6B6B',
        fontSize: 35
    },
    description: {
        fontSize: 20,
        margin: 4
    },
    examplesContainer: {
        marginStart: 12,
        margin: 4
    },
    example: {
        fontSize: 20,
        marginVertical: 8
    }
})