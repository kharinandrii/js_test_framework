

const { browser, by, element } = require('protractor')

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

        const firstNameFieldSelector = '#input-firstname'
        const firstNameFieldS = $(firstNameFieldSelector)

        const lastNameFieldSelector = '#input-lastname'
        const lastNameField = $(lastNameFieldSelector)

        const emailFieldLocator = '#input-email'
        const emailField = $(emailFieldLocator)

        const phoneFieldLocator = '#input-telephone'
        const phoneField = $(phoneFieldLocator)

        const adressFieldLocator = '#input-address-1'
        const adressField = $(adressFieldLocator)

        const postcodeFieldLocator = '#input-postcode'
        const postcodeField = $(postcodeFieldLocator)

        const cityFieldLocator = '#input-city'
        const cityField = $(cityFieldLocator)

        const regionSelectorLocator = '#input-zone'
        const regionSelector = $(regionSelectorLocator)

        const regionValueSelector = '//*[@value = "3513"]'
        const regionValue = element(by.xpath(regionValueSelector))

        const passwordFieldSelector = '#input-password'
        const passwordField = $(passwordFieldSelector)

        const passwordConfirmSelector = '#input-confirm'
        const passwordConfirm = $(passwordConfirmSelector)

        const checkboxSelector = '//*[@name = "agree"]'
        const checkbox = element(by.xpath(checkboxSelector))

        const continueButtonSelector = '//*[@value = "Continue"]'
        const continueButton = element(by.xpath(continueButtonSelector))

        const nameValue = 'firstName'
        const familyValue = 'lastName'
        const emailValue = 'sdgggds@google.ua'
        const phoneValue = '380503503970'
        const adressValue = 'adress'
        const cityValue = 'city'
        const postcodeValue = '73020'
        const passwordValue = '123456t'

        //var faker = require('faker');

        //var randomName = faker.name.findName(); // Rowan Nikolaus
        //var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
        //var randomCard = faker.helpers.createCard(); // random contact card containing many properties



        await browser.get('http://opencart.abstracta.us/')

        await browser.wait(EC.visibilityOf(drobdownMenu), 50000, 'Selector drobdownMenu dont found')
        await drobdownMenu.click()

        await browser.wait(EC.visibilityOf(registerButton), 5000, 'Selector registerButton dont found')
        await registerButton.click()

        await browser.wait(EC.visibilityOf(advancedButton), 5000, 'Selector advancedButton dont found')
        await advancedButton.click()

        await browser.wait(EC.visibilityOf(registerLink), 5000, 'Selector registerLink dont found')
        await registerLink.click()

        await firstNameFieldS.sendKeys(nameValue)
        await lastNameField.sendKeys(familyValue)
        await emailField.sendKeys(emailValue)
        await phoneField.sendKeys(phoneValue)
        await adressField.sendKeys(adressValue)
        await cityField.sendKeys(cityValue)
        await postcodeField.sendKeys(postcodeValue)
        await regionSelector.click()
        await regionValue.click()
        await passwordField.sendKeys(passwordValue)
        await passwordConfirm.sendKeys(passwordValue)
        await checkbox.click()
        await continueButton.click()





    })
})