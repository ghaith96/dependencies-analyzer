import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const WrongUrl: React.FC = () => {
    return (
        <View style={style.content}>
            <Text style={style.header}>Wrong URL format <span role='img' aria-label='dont-know'>🤷‍♂</span></Text>
            <Text style={style.description}>Check the following valid examples <span role='img' aria-label='look-down'>👇</span></Text>
            <View style={style.examplesContainer}>
                <Text style={style.example}>• https://github.com/ghaith96/dependencies-analyzer (<em>given the repository has package.json in the base folder</em>)</Text>
                <Text style={style.example}>• https://github.com/ghaith96/dependencies-analyzer/blob/master/package.json</Text>
                <Text style={style.example}>• https://raw.githubusercontent.com/ghaith96/dependencies-analyzer/master/package.json</Text>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    content: {
        margin: 8,
        marginHorizontal: 16
    },
    header: {
        fontSize: 35,
        color: '#FF6B6B'
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
});
