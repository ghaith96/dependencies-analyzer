export default {
    getPackageInfo: async (pkgName) => {
        let url = `https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/${pkgName}`
        let options = { headers: { 'Sec-Fetch-Mode': 'cors' } }
        return await doRequest(url, options)
    },
    getPackageFile: async (url) => {
        let response = await doRequest(url)
        return response.status === 200 ? response.data : response
    },
}

const doRequest = async (url, options) => {
    let status, data, response
    try {
        response = await fetch(url, options)
        status = response.status
        data = await response.json()
    } catch (e) {
        status = response.status
        data = e
    }
    return { status, data }
}