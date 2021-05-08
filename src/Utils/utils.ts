import { Package } from "src/Api/types";
import { REGEX } from "./constants"

export const packagesComparer = (a: Package, b: Package) => {
    if (!a.collected?.metadata?.description) {
        return -1;
    }

    if (!b.collected?.metadata?.description) {
        return 1;
    }

    return (a.collected.metadata.description.length - b.collected.metadata.description.length);
}

export const isValidUrl = (url: string) => {
    if (url.match(REGEX.GITHUB_RAW) ||
        url.match(REGEX.GITHUB_PACKAGE_FILE) ||
        url.match(REGEX.GITHUB_REPO)) {
        return url;
    }

    return '';
}
