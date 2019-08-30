export default {
    REGEX: {
        GITHUB_REPO: /github\.com\/(.*?)\/(.*?)\//i,
        GITHUB_PACKAGE_FILE: /github\.com\/(.*)\/(.*)\/blob\/(.*)\/package.json/i,
        GITHUB_RAW: /raw.githubusercontent\.com\/(?:.*){4}\/package.json/i
    },
    ERROR: {
        WRONG_URL: 'wrong url',
        NOT_FOUND: 404,
        BAD_REQUEST: 400
    },
    MESSAGES: {
        SOMETHING_WENT_WRONG: 'if you are seeing this please feel free to open an issue in https://github.com/ghaith96/dependencies-analyzer\nthe following info might help \nerror:'
    }
}