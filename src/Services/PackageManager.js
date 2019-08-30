import Api from "../Api";
import { getRawGitHubUrl } from './UrlParser'
import packageModel from '../Models/packageModel'
import constants from "../Utils/constants";

export default {
    getPackages: async (url) => {
        let rawUrl = getRawGitHubUrl(url)
        if (rawUrl === constants.ERROR.WRONG_URL)
            return { status: rawUrl }
        let packageFileObj = await Api.getPackageFile(rawUrl)
        return (packageFileObj.status) ? packageFileObj : Object.keys(packageFileObj.dependencies || packageFileObj.devDependencies)
    },
    getPackageInfo: async (pkgs, callback) => {
        for (let pkgName of pkgs) {
            let response = await Api.getPackageInfo(pkgName)
            let pkg = response.status === 200 ? packageModel.fromResponse(response.data) : { ...response, pkgName }
            callback(pkg)
        }
    }
}
