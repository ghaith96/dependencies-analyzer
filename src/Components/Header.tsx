import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
    return (
        <View style={style.content}>
            <Text style={style.header}>Dependencies Analyzer</Text>
            <Text style={style.description}>get fast insight into any NodeJs project on GitHub by peeking at its dependencies</Text>
        </View>
    );
}

const style = StyleSheet.create({
    content: {
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        color: '#47BBB3'
    },
    description: {
        fontSize: 20,
        marginVertical: 4,
        marginStart: 8,
        color: '#1A535C'
    }
})
