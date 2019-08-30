import { getRawGitHubUrl } from "../UrlParser";

describe('Parser', () => {
    let expectedUrl = 'https://raw.githubusercontent.com/facebook/react/master/package.json'
    test('parses raw url correctly', () => {
        // Arrange
        let toTestUrl = 'https://raw.githubusercontent.com/facebook/react/master/package.json'

        // Act        
        let toTest = getRawGitHubUrl(toTestUrl)

        //Assert
        expect(toTest).toEqual(expect.stringContaining(expectedUrl))
    })

    test('parses package.json url correctly', () => {
        // Arrange
        let toTestUrl = 'https://github.com/facebook/react/blob/master/package.json'

        // Act        
        let toTest = getRawGitHubUrl(toTestUrl)

        //Assert
        expect(toTest).toEqual(expect.stringContaining(expectedUrl))
    })

    test('parses base repo url correctly', () => {
        // Arrange
        let toTestUrl = 'https://github.com/facebook/react/'

        // Act        
        let toTest = getRawGitHubUrl(toTestUrl)

        //Assert
        expect(toTest).toEqual(expect.stringContaining(expectedUrl))
    })
})