import React from 'react';
import { Package } from 'src/Api/types';
import { CardComponent } from './Card.component';

interface IProps {
    pkg: Package;
}

export const CardCotainer: React.FC<IProps> = (props: IProps) => {
    const homePage = props.pkg?.collected?.github?.homepage
    const name = props.pkg?.collected?.metadata?.name;

    const openHomePage = () => homePage && window.open(homePage, '_blank');
    const copyNameToClipboard = () => name && window.navigator.clipboard.writeText(name);

    return (
        <CardComponent
            pkg={props.pkg}
            onPackageNameClick={openHomePage}
            onPackageNameDoubleClick={copyNameToClipboard}
        />
    )
};
