import React from 'react';
import { Package } from 'src/Api/types';
import { CardComponent } from './Card.component';

interface IProps {
    pkg: Package;
}

export const CardCotainer: React.FC<IProps> = ({ pkg }: IProps) => {
    const homePage = pkg?.collected?.github?.homepage
    const name = pkg?.collected?.metadata?.name;

    const openHomePage = () => homePage && window.open(homePage, '_blank');
    const copyNameToClipboard = () => name && window.navigator.clipboard.writeText(name);

    return (
        <CardComponent
            name={name}
            version={pkg?.currentVersion}
            description={pkg?.collected?.metadata?.description ?? 'No Description.'}
            onPackageNameClick={openHomePage}
            onPackageNameDoubleClick={copyNameToClipboard}
        />
    )
};
