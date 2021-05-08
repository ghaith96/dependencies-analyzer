import { IApi, Response, apiInstance, Package } from '../Api'
import { RepoPackages } from "./types";

interface IRepository {
    getPackageInfo: (packageName: string) => Promise<Response<Package>>;
    getPackages: (url: string) => Promise<Response<{ dependencies: object }>>;
}

class Repository implements IRepository {
    cache: Storage = window.sessionStorage;

    constructor(private apiService: IApi) { }

    getPackageInfo = async (packageName: string): Promise<Response<Package>> => {
        const cachedItem: string | null = this.cache.getItem(packageName);

        if (cachedItem) {
            const item = JSON.parse(cachedItem);
            return { ok: true, status: 200, data: item };
        }

        const response = await this.apiService.getPackageInfo<Package>(packageName);

        if (response.ok) {
            // this.cache.setItem(packageName, JSON.stringify(response.data));
        }

        return response;
    }

    getPackages = async (url: string): Promise<Response<RepoPackages>> => {
        const cachedItem: string | null = this.cache.getItem(url);

        if (cachedItem) {
            const items = JSON.parse(cachedItem);
            return { ok: true, status: 200, data: items };
        }

        const response = await this.apiService.getPackages<RepoPackages>(url);

        if (response.ok) {
            this.cache.setItem(url, JSON.stringify(response.data));
        }

        return response;
    }
}

export const repositoryService: IRepository = new Repository(apiInstance);
