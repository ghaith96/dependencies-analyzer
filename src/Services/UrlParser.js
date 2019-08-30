import constants from "../Utils/constants";

export const getRawGitHubUrl = (url) => {
    let regexGroups
    if ((regexGroups = url.match(constants.REGEX.GITHUB_RAW))) { // declaration inside if is intended
        return url
    } else if ((regexGroups = `${url}/`.match(constants.REGEX.GITHUB_PACKAGE_FILE))) { // declaration inside if is intended
        return fromPackageFileToRaw(regexGroups)
    } else if ((regexGroups = `${url}/`.match(constants.REGEX.GITHUB_REPO))) { // declaration inside if is intended
        return fromRepoToRaw(regexGroups)
    }
    return constants.ERROR.WRONG_URL
}

const fromPackageFileToRaw = (regexGroups) => {
    regexGroups.shift()
    return `https://raw.githubusercontent.com/${regexGroups.join('/')}/package.json`
}

const fromRepoToRaw = (regexGroups) => {
    regexGroups.shift()
    // regexGroups.push('master') // need to splice it
    // return fromPackageFileToRaw(regexGroups)
    return `https://raw.githubusercontent.com/${regexGroups.join('/')}/master/package.json`
}