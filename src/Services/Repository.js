import packageModel from "../Models/packageModel";
import { getRawGitHubUrl } from "./UrlParser";
import constants from "../Utils/constants";
import Api from '../Api'

export default class Repository {

    constructor(api) { this._cache = window.sessionStorage; this._api = api }

    static getInstance = (api = Api) => (this._instance || (this._instance = new Repository(api))) // if no _instance, then initialize and store ref

    getPackageInfo = async (packageName) => {
        let item = undefined
        if ((item = this._cache.getItem(packageName))) // assign inside if is intended
            return this.fromJson(item)
        item = await this.getPackageInfoFromApi(packageName)
        this._cache.setItem(packageName, this.toJson(item))
        return item
    }

    getPackageInfoFromApi = async (packageName) => {
        let response = await this._api.getPackageInfo(packageName)
        return response.status === 200 ? packageModel.fromResponse(response.data) : { ...response, package: packageName }
    }

    getPackages = async (url) => {
        let item = undefined
        if ((item = this._cache.getItem(url))) // assign inside if is intended
            return this.fromJson(item)
        item = await this.getPackagesFromApi(url)
        this._cache.setItem(url, this.toJson(item))
        return item
    }

    getPackagesFromApi = async (url) => {
        let rawUrl = getRawGitHubUrl(url)
        if (rawUrl === constants.ERROR.WRONG_URL)
            return { status: rawUrl }
        let packageFileObj = await this._api.getPackageFile(rawUrl)
        return (packageFileObj.status) ? packageFileObj : Object.keys(packageFileObj.dependencies || {})
    }

    toJson = (item) => JSON.stringify(item)
    fromJson = (item) => JSON.parse(item)
}