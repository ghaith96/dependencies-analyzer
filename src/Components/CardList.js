import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Card from './Card';

export default class CardList extends React.PureComponent {

    render() {
        return (
            <FlatList
                data={this.props.packages}
                contentContainerStyle={style.content}
                bounces={true}
                renderItem={({ item }) => <Card key={item.name} pkg={item} />}
            />
        )
    }
}

const style = StyleSheet.create({
    content: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
})