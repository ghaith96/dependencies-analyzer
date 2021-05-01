import { REGEX } from "./constants"
import { Package } from "../Models/Package"

export const packagesComparer = (a: Package, b: Package) => {
    if (!a.description) {
        return -1;
    }

    if (!b.description) {
        return 1;
    }

    return (a.description.length - b.description.length);
}

export const isValidUrl = (url: string) => {
    if (url.match(REGEX.GITHUB_RAW) ||
        url.match(REGEX.GITHUB_PACKAGE_FILE) ||
        url.match(REGEX.GITHUB_REPO)) {
        return url;
    }

    return '';
}
