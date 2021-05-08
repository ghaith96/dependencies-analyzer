import React from 'react';
import { FooterComponent } from './Footer.component';

export const FooterContainer: React.FC = () => {
    const goToMyGithub = () => window.open('https://github.com/ghaith96', '_blank');

    return (
        <FooterComponent
            onMyNameClick={goToMyGithub}
        />
    )
}
