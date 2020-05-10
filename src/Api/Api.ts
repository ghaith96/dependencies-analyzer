import { Response } from './types';

export interface IApi {
    getPackageInfo: <T>(pkgName: string) => Promise<Response<T>>;
    getPackages: <T>(url: string) => Promise<Response<T>>;
}

class Api implements IApi {
    getPackageInfo = async <T>(pkgName: string) => {
        const url = `https://api.npms.io/v2/package/${pkgName}`;
        const options = { headers: { 'Sec-Fetch-Mode': 'cors' } };
        const response: any = await this.doRequest<T>(url, options);
        response.data = response.data.collected.metadata;
        return response as T;
    }

    getPackages = async <T>(url: string) => {
        return await this.doRequest<T>(url);
    }

    doRequest = async <T>(url: string, options?: RequestInit): Promise<Response<T>> => {
        try {
            const response = await fetch(url, options);
            const responseJson = await response.json();
            if (response.ok) {
                return { ok: true, status: response.status, data: responseJson };
            } else {
                return { ok: false, status: response.status, data: responseJson };
            }
        } catch (e) {
            return { ok: false, status: 0, data: e };
        }
    }
}

export const apiInstance: IApi = new Api();
