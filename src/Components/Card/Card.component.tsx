import React from 'react';
import styled from 'styled-components';

interface IProps {
    name: string;
    version: string;
    description: string;
    onPackageNameClick: () => void;
    onPackageNameDoubleClick: () => void;
}

export const CardComponent: React.FC<IProps> = ({ name, version, description, onPackageNameClick, onPackageNameDoubleClick }: IProps) => {

    return (
        <Content>
            <Header>
                {
                    name && (
                        <div
                            onClick={onPackageNameClick}
                            onDoubleClick={onPackageNameDoubleClick}
                        >
                            <PkgName>{name}</PkgName>
                        </div>
                    )
                }
                {version && <Version>{version}</Version>}
            </Header>
            {
                description && (
                    <DescriptionContent>
                        <DescriptionText>{description}</DescriptionText>
                    </DescriptionContent>
                )
            }
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
    margin: 8px;
    border-radius: 8px;
    min-height: 150px;
    transition: box-shadow 0.3s;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
`;

const PkgName = styled.div`
    font-size: 24px;
    color: #47BBB2;
    cursor: pointer;
`;

const Version = styled.div`
    margin: 0px 4px;
    font-size: 12px;
`;

const DescriptionContent = styled.div`
    flex: 1;
    flex-grow: 1;
    width: 300px;
    padding-top: 8px;
    padding-left: 8px;
`;

const DescriptionText = styled.div`
    font-size: 12px;
`;
