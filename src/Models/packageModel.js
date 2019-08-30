export default class packageModel {
    constructor(json) {
        let { name, description, homepage, keywords, license } = json
        this.name = name
        this.authorName = json.author ? json.author.name : ''
        this.description = description
        this.latestVersion = json['dist-tags'].latest
        this.homePage = homepage
        this.keywords = keywords
        this.license = license
    }

    static fromResponse(json) {
        return new packageModel(json)
    }
}