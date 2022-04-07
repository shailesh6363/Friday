/// <reference types="Cypress" />

import CarInformation from'../pageObjects/registrationPage'

describe("Friday Test Case Automation",()=>{
    const cs=new CarInformation()


it("Validate The Car Is Already insured when I am Not Owner and The Car was used at purchase",()=>{
         cy.visit(Cypress.env('url'))
         cy.url().should('include',"selectPrecondition")
         cs.selectCarAlreadyInsured().click()
         cy.wait(2000)
         //cs.selectFurtherButton().click()
         cs.selectNoOptionForOwnerOfTheCar().click()
         cs.SelectusedatpurchaseOptionForTheCarWas().click()
         cs.selectFurtherButton().click()
         cs.selectFindByMakeModelOption().click()
         cs.setCarName().type("Audi")
         cs.selectAudiAsCarBrand().click()
         cs.setModel().type("R8")
         cs.selectHorsePower().click()
         cs.isyourCarInclude().click()
         cs.validateFirstRegistrationtext().should('have.value',"07.2007")
         cs.validateLicenseToOwnerText().should('have.value',"07.2007")
         cs.setBirthDate()
        
    })  









})