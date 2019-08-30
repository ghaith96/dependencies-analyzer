import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isShown: false }
    }

    render() {
        if (this.state.isShown)
            return (
                <View style={{ backgroundColor: '#FF6B6B', marginBottom: 5, borderRadius: 5, padding: 8, paddingHorizontal: 8, width: 200, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: '#F7FFF7' }}>hello world hello world hello world hello world</Text>
                    <TouchableOpacity style={{ padding: 4 }} onPress={this.hideAlert}>
                        <span role='img' aria-label='X'>❌</span>
                    </TouchableOpacity>
                </View>
            )
        return null
    }

    hideAlert = () => this.setState({ isShown: false })
}