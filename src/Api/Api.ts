import { PackageJson, Response, Package } from './types';

export interface IApi {
    getPackagesInfo: (packages: string[]) => Promise<Response<{ [key: string]: Package }>>;
    getPackages: (url: string) => Promise<Response<PackageJson>>;
}

class Api implements IApi {
    getPackagesInfo = async <T>(packages: string[]) => {
        const url = `https://api.npms.io/v2/package/mget`;
        const options: RequestInit = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'Sec-Fetch-Mode': 'cors',
            },
            body: JSON.stringify(packages),
        };
        const response: any = await this.doRequest<T>(url, options);
        return response as T;
    }

    getPackages = async (url: string): Promise<Response<PackageJson>> => {
        return await this.doRequest<PackageJson>(url);
    }

    doRequest = async <T>(url: string, options?: RequestInit): Promise<Response<T>> => {
        try {
            const response = await fetch(url, options);
            const responseJson = await (response.json().catch(e => e));
            return { ok: response.ok, status: response.status, data: responseJson };
        } catch (e) {
            return { ok: false, status: 0, data: e };
        }
    }
}

export const apiInstance: IApi = new Api();
