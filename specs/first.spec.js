//const { protractor } = require('protractor/built/ptor')
//const { browser, element, by } = require('protractor')

const { browser } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function (){
    it('first test', async function(){

        const drobdownMenuSelector = '#top-links > ul > li.dropdown > a > span.hidden-xs.hidden-sm.hidden-md'
        const drobdownMenu = $(drobdownMenuSelector)


        const registerButtonSelector = '//*[text() = "Register"]'
        const registerButton = element(by.xpath(registerButtonSelector))

        const advancedButtonSelector = '#details-button'
        const advancedButton = $(advancedButtonSelector)

        const registerLinkSelector = '#proceed-link'
        const registerLink = $(registerLinkSelector)

        await browser.get('http://opencart.abstracta.us/')

        await browser.wait(EC.visibilityOf(drobdownMenu), 50000, 'Selector drobdownMenu dont found')
        await drobdownMenu.click()

        await browser.wait(EC.visibilityOf(registerButton), 5000, 'Selector registerButton dont found')
        await registerButton.click()

        await browser.wait(EC.visibilityOf(advancedButton), 5000, 'Selector advancedButton dont found')
        await advancedButton.click()

        await browser.wait(EC.visibilityOf(registerLink), 5000, 'Selector registerLink dont found')
        registerLink.click()




    })
})