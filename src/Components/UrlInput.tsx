import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

interface IProps {
    urlProp: string;
    handleAnalyzeClick: (url: string) => void;
}

export const UrlInput: React.FC<IProps> = ({ urlProp, handleAnalyzeClick }) => {
    const [url, setUrl] = useState(urlProp);

    useEffect(() => { urlProp && handleAnalyzeClick(url); });

    const onClick = () => url && handleAnalyzeClick(url);

    return (
        <View style={style.content}>
            <TextInput
                style={style.textInput}
                textContentType={"URL"}
                value={url}
                onChangeText={(url) => setUrl(url)}
                onSubmitEditing={onClick}
                placeholder="Example: https://github.com/ghaith96/dependencies-analyzer"
            />
            <TouchableOpacity
                style={style.button}
                disabled={!url.trim()}
                onPress={onClick}>
                <Text style={style.buttonText}>Analyze</Text>
            </TouchableOpacity>
        </View>
    );
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
});
