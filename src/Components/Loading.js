import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends React.PureComponent {
    render() {
        return (
            <View style={style.content}>
                <ActivityIndicator size={55} color={'#47BBB3'} />
                <Text style={style.percentage}>{this.props.percentage}%</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    percentage: {
        fontSize: 25,
        marginHorizontal: 16
    }
})