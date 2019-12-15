import constants from "./constants"

export const packagesComparer = (a, b) => {
    if (!a.description)
        return -1
    else if (!b.description)
        return 1
    return (a.description.length - b.description.length)
}

export const isValidUrl = (url) => {
    if (url.match(constants.REGEX.GITHUB_RAW) ||
        url.match(constants.REGEX.GITHUB_PACKAGE_FILE) ||
        url.match(constants.REGEX.GITHUB_REPO)) {
        return url
    }
    return ''
}