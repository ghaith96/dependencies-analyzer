import constants from "../Utils/constants";

export const getRawGitHubUrl = (url: string) => {
    let regexGroups;
    if ((regexGroups = url.match(constants.REGEX.GITHUB_RAW))) { // declaration inside if is intended
        return url
    } else if ((regexGroups = `${url}/`.match(constants.REGEX.GITHUB_PACKAGE_FILE))) { // declaration inside if is intended
        return fromPackageFileToRaw(regexGroups)
    } else if ((regexGroups = `${url}/`.match(constants.REGEX.GITHUB_REPO))) { // declaration inside if is intended
        return fromRepoToRaw(regexGroups)
    }
    return '';
}

const fromPackageFileToRaw = (regexGroups: RegExpMatchArray) => {
    regexGroups.shift();
    return `https://raw.githubusercontent.com/${regexGroups.join('/')}/package.json`;
}

const fromRepoToRaw = (regexGroups: RegExpMatchArray) => {
    regexGroups.shift();
    return `https://raw.githubusercontent.com/${regexGroups.join('/')}/master/package.json`;
}
