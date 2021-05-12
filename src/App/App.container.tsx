import React, { useState } from 'react';
import { apiInstance } from '../Api';
import { getRawGitHubUrl } from '../Services/UrlParser';
import { AppError } from '../Utils/types';
import { isValidUrl } from '../Utils/utils';
import { Package } from '../Api/types';
import { AppComponent } from './App.component';

interface IState {
    loading: boolean;
    error: number;
    packages: { [key: string]: Package };
}

const INITIAL_STATE: IState = {
    loading: false,
    error: 0,
    packages: {},
};

export const AppContainer: React.FC = () => {
    const [state, setState] = useState<IState>(INITIAL_STATE);

    const getPackages = async (url: string) => {
        setState(INITIAL_STATE);
        const rawUrl = getRawGitHubUrl(url);

        if (rawUrl) {
            await fetchPackages(rawUrl);
        } else {
            setState({ ...INITIAL_STATE, error: AppError.WRONG_URL_FORMAT });
        }
    }

    const fetchPackages = async (url: string) => {
        const response = await apiInstance.getPackages(url);

        if (response.ok) {
            const dependencies = Object.keys(response.data.dependencies ?? {});

            setState((prevState: IState) => ({
                ...prevState,
                loading: dependencies.length > 0,
            }));

            const dependenciesInfo = await apiInstance.getPackagesInfo(dependencies);

            Object.entries(dependenciesInfo.data).forEach(([name, pkg]) => pkg.currentVersion = response.data.dependencies[name]);

            setState((prevState: IState) => ({
                ...prevState,
                loading: false,
                packages: dependenciesInfo.data,
            }));

        } else {
            setState({ ...INITIAL_STATE, error: response.status });
        }
    }

    const tryParseUrl = () => {
        const url = window.location.pathname.replace('/', '') + '/';
        return isValidUrl(url);
    }

    return (
        <AppComponent
            loading={state.loading}
            error={state.error}
            packages={state.packages}
            url={tryParseUrl()}
            onAnalyzeClick={getPackages}
        />
    );
}
