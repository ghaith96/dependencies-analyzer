export const REGEX = Object.freeze({
    GITHUB_REPO: /github\.com\/(.*?)\/(.*?)\//i,
    GITHUB_PACKAGE_FILE: /github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,
    GITHUB_RAW: /raw.githubusercontent\.com\/(?:.*){4}\/package.json/i
});

export const MESSAGES = Object.freeze({
    SOMETHING_WENT_WRONG: 'if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:'
});
