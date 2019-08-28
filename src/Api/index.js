export default {
    getPackageInfo: async (pkgName) => {
        let status, data
        try {
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://registry.npmjs.org/${pkgName}`, { headers: { 'Sec-Fetch-Mode': 'cors' } })
            status = response.status
            data = await response.json()
        } catch (e) {
            status = 0
            data = e
        }
        return { status, data: { ...data, pkgName } }
    }
}