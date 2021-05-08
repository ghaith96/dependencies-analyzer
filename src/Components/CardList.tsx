import React from 'react'
import styled from 'styled-components';

import { Card } from './Card';
import { Package } from 'src/Api/types';

interface IProps {
    packages: Package[];
}

export const CardList: React.FC<IProps> = ({ packages }) => {

    return (
        <Content>
            {
                packages?.map(pkg => <Card key={pkg.collected.metadata.name} pkg={pkg} />)
            }
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
