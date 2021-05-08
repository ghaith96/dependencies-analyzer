import React, { useEffect, useState } from 'react';
import { UrlInputComponent } from './UrlInput.component';

interface IProps {
    urlProp: string;
    loading: boolean;
    handleAnalyzeClick: (url: string) => void;
}

export const UrlInputContainer: React.FC<IProps> = ({ urlProp, loading, handleAnalyzeClick }: IProps) => {
    const [url, setUrl] = useState<string>(urlProp);

    useEffect(() => { urlProp && handleAnalyzeClick(urlProp); }, [urlProp]);

    const onClick = () => url && handleAnalyzeClick(url);

    return (
        <UrlInputComponent
            url={url}
            disabled={!url.trim() || loading}
            setUrl={setUrl}
            onSubmit={onClick}
        />
    );
}
