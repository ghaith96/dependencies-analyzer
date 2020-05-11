import React from 'react'
import { FlatList } from 'react-native';
import { Card } from './Card';
import { Package } from '../Models/Package';

interface IProps {
    packages: Package[];
}

export const CardList: React.FC<IProps> = ({ packages }) => {

    return (
        <FlatList
            data={packages}
            style={{ margin: 16 }}
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
            renderItem={({ item }: { item: Package }) => <Card key={item.name} pkg={item} />}
            numColumns={5}
            centerContent
            bounces
        />
    );
}
