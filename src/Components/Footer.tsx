import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Footer: React.FC = () => {
    const goToMyGithub = () => window.open('https://github.com/ghaith96', '_blank');

    return (
        <View style={style.content}>
            <Text style={style.madeWith}>Made with <span role='img' aria-label='heart'>💖</span> by </Text>
            <TouchableOpacity onPress={goToMyGithub}>
                <Text style={style.myName}>ghaith</Text>
            </TouchableOpacity>
        </View>
    );

}

const style = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: 8
    },
    madeWith: {
        fontSize: 18
    },
    myName: {
        color: '#5475AB',
        fontSize: 18,
        fontWeight: '600'
    }
})
