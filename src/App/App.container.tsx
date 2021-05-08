import React, { useState } from 'react';
import { repositoryService } from '../Services/Repository';
import { getRawGitHubUrl } from '../Services/UrlParser';
import { AppError } from '../Utils/types';
import { isValidUrl } from '../Utils/utils';
import { Package, Response } from '../Api/types';
import { AppComponent } from './App.component';

interface IState {
    loading: boolean;
    error: number;
    totalPackagesCount: number;
    packages: Package[];
}

const INITIAL_STATE: IState = {
    loading: false,
    error: 0,
    totalPackagesCount: 0,
    packages: [],
};

export const AppContainer: React.FC = () => {
    const [state, setState] = useState<IState>(INITIAL_STATE);

    const getDonePercentage = () => {
        return Math.floor((state.packages.length / state.totalPackagesCount) * 100) || 0;
    }

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
        const response = await repositoryService.getPackages(url);

        if (response.ok) {
            const dependencies = Object.keys(response.data.dependencies);

            setState((prevState: IState) => ({
                ...prevState,
                totalPackagesCount: dependencies.length,
                loading: dependencies.length > 0
            }));

            const dependenciesPromises = dependencies.map(name => repositoryService.getPackageInfo(name).then(handleNewPackage, console.error));

            Promise.all(dependenciesPromises).then(() => setState((prevState: IState) => ({ ...prevState, loading: false })));
        } else {
            setState({ ...INITIAL_STATE, error: response.status });
        }
    }

    const handleNewPackage = (response: Response<Package>) => {
        if (response.ok) {
            const pkg = response.data;
            setState((prevState: IState) => ({ ...prevState, packages: [...prevState.packages, pkg] }));
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
            donePercentage={getDonePercentage()}
            onAnalyzeClick={getPackages}
        />
    );
}
