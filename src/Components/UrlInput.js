import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

export default class UrlInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { url: this.props.url || '' }
    }

    componentDidMount = () => this.props.url && this.handleAnalyzeClick()

    render() {
        return (
            <View style={style.content}>
                <TextInput
                    style={style.textInput}
                    textContentType={"URL"}
                    value={this.state.url}
                    onChangeText={this.handleTextChange}
                    onSubmitEditing={this.handleAnalyzeClick}
                    placeholder="Example: https://github.com/ghaith96/dependencies-analyzer"
                />
                <TouchableOpacity
                    style={style.button}
                    disabled={!this.state.url.trim()}
                    onPress={this.handleAnalyzeClick}>
                    <Text style={style.buttonText}>Analyze</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleTextChange = (url) => this.setState({ url })
    handleAnalyzeClick = () => this.state.url && this.props.handleAnalyzeClick(this.state.url)
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        margin: 12,
    },
    textInput: {
        flex: 0.8,
        padding: 8,
        fontSize: 18,
        lineHeight: 4,
        borderRadius: 5,
        borderColor: '#32908F',
        borderWidth: 1,
    },
    button: {
        marginStart: 8,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#4ECDC4'
    },
    buttonText: {
        color: '#F1F7EE',
        fontSize: 18
    },
})