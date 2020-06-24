const { protractor } = require('protractor/built/ptor')
const { browser, element, by } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function (){
    it('first test', async function(){

        const searchInputSelector = '//input[@name = "search"]'
        const searchInput = element(by.xpath(searchInputSelector))

        const searchButtonSelector = 'button.search-form__submit'
        const searchButton = $(searchButtonSelector)

        const catalogTitleSelector = 'h1.catalog-heading'
        const catalogTitle = $(catalogTitleSelector)    

        const searchText = 'стимпанк очки'

        await browser.get('https://rozetka.com.ua/')

        await browser.wait(EC.visibilityOf(searchInput), 5000, 'searchInput element not found')
        await browser.wait(EC.visibilityOf(searchButton), 5000, 'searchButton element not found')

        await searchInput.sendKeys(searchText)
        await searchButton.click
        await browser.sleep(5 * 1000)
        await browser.wait(EC.visibilityOf(catalogTitle), 10000, 'catalogTitle element not found')

        const catalogTitleText = await catalogTitle.getText()

        expect(catalogTitleText).to.include(searchText)
    })
})