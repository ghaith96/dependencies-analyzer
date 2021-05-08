import React from 'react';
import styled from 'styled-components';

interface IProps {
    disabled: boolean;
    url: string;
    setUrl: (url: string) => void;
    onSubmit: () => void;
}

export const UrlInputComponent: React.FC<IProps> = ({ disabled, url, setUrl, onSubmit }) => {
    return (
        <Content>
            <Input
                defaultValue={url}
                type={"URL"}
                onChange={({ currentTarget: { value: url } }) => setUrl(url)}
                onSubmit={onSubmit}
                placeholder="Example: https://github.com/ghaith96/dependencies-analyzer"
            />
            <Button
                disabled={disabled}
                onClick={onSubmit}
            >
                Analyze
            </Button>
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 4px;
    margin: 12px;
`;

const Input = styled.input`
    flex: 0.8;
    padding: 4px;
    font-size: 18px;
    line-height: 4px;
    border-radius: 4px;
    border: 1px solid #32908F;
    user-select: all;
`;

const Button = styled.button`
    font-size: 18px;
    border-radius: 4px;
    margin-left: 8px;
    padding: 4px 24px;
    background: #1e6f5c;
    color: white;
    transition: box-shadow 0.3s, background 0.5s, color 0.5s;
    user-select: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    
    &:disabled {
        color: black;
        background: lightgrey;
        box-shadow: unset;
    }

    &:hover:enabled {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        cusror: not-allowed;
    }
`;
