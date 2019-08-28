import Api from "../Api";

export default {
    getPackageInfo: async (pkgName) => {
        let response = await Api.getPackageInfo(pkgName)
        if (response.status === 200)
            return {
                pkgName: response.data.pkgName,
                description: response.data.description,
                homepage: response.data.homepage,
                latestVersion: response.data['dist-tags'].latest,
            }
        else
            return { ...response, pkgName }
    }
}