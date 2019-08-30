import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class GenericError extends React.PureComponent {
    render() {
        return (
            <View style={style.content}>
                <Text style={style.header}><span role='img' aria-label='sorry'>😓</span> Something went wrong somewhere..</Text>
                <Text style={style.description}>SORRY! This shouldn't be happening.</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    content: {
        alignItems: 'center',
        marginVertical: 16
    },
    header: {
        fontSize: 35,
        color: '#FF6B6B'
    },
    description: {
        marginHorizontal: 8,
        fontSize: 20,
        marginVertical: 8
    }
})