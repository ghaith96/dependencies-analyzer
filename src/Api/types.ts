export type Response<T> = {
    ok: boolean;
    status: number;
    data: T;
}

export interface Package {
    analyzedAt: string;
    currentVersion: string;
    collected: {
        metadata: {
            name: string,
            scope: string,
            version: string,
            description: string,
            keywords: string[],
            date: string,
            author: User,
            publisher: User,
            maintainers: User[],
            repository: {
                type: string,
                url: string,
            },
            links: {
                npm: string;
                homepage: string,
                repository: string,
                bugs: string,
            },
            license: string;
            dependencies: { [key: string]: string },
            devDependencies: { [key: string]: string },
            peerDependencies: { [key: string]: string },
            releases: DateRangeCount[],
            hasTestScript: boolean;
            hasSelectiveFiles: boolean;
        },
        npm: {
            downloads: DateRangeCount[],
            dependentsCount: number,
            starsCount: number,
        },
        github: {
            homepage: string,
            starsCount: number,
            forksCount: number,
            subscriberCount: number,
            issues: {
                count: number,
                openCount: number,
                isDisabled: boolean,
            },
            contributors: Contributor[];
            commits: DateRangeCount[];
        },
        source: {
            files: {},
            linters: string[],
            coverage: number,
            outdatedDependencies: { [key: string]: OutdatedDependency }
        },
    };
    evaluation: {
        quality: {
            carefulness: number,
            tests: number,
            health: number,
            branding: number,
        },
        popularity: {
            communityInterest: number,
            downloadsCount: number,
            downloadsAcceleration: number,
            dependentsCount: number,
        },
        maintenance: {
            releasesFrequency: number,
            commitsFrequency: number,
            openIssues: number,
            issuesDistribution: number,
        }
    };
    score: {
        final: number,
        detail: {
            quality: number,
            popularity: number,
            maintenance: number,
        }
    };
}

export interface OutdatedDependency {
    required: string;
    stable: string;
    latest: string;
}

export interface Contributor {
    username: string;
    commitsCount: number;
}

export interface DateRangeCount {
    from: string;
    to: string;
    count: number;
}

export interface User {
    username: string;
    email?: string;
}

export interface PackageJson {
    name: string;
    version: string;
    scripts: { [key: string]: string };
    dependencies: { [key: string]: string }
    devDependencies?: { [key: string]: string }
}
