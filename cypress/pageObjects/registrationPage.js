class CarInformation{

selectCarAlreadyInsured(){

    cy.xpath("//body/section[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/label[1]")
}

selectFurtherButton(){
//     const el = document.getElementsByClassName('btn');
// console.log(el); // 👉️ [button.btn]

// // ✅ Works 👍️
// el[0].click();
    cy.xpath("//button[@type='submit']")
}

selectNoOptionForOwnerOfTheCar(){

    cy.xpath("//body/section[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/label[2]")
}

SelectusedatpurchaseOptionForTheCarWas(){

    cy.xpath("//body/section[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/div[2]/div[2]/div[2]/div[1]/label[1]")

}

validateAreYouTheOwner(){
    cy.xpath("//font[contains(text(),'The car was...')]")
}

selectFindByMakeModelOption(){

    cy.xpath("//font[contains(text(),'Über Marke & Modell finden')]")
}

setCarName(){
    cy.get(".TextInput__textInput--ZPjUV")
}

selectAudiAsCarBrand(){

    cy.xpath("//font[contains(text(),'AUDI')]")
}

setModel(){
    cy.get(".TextInput__textInput--ZPjUV")
}

selectR8(){
    cy.xpath("//font[contains(text(),'R8')]")
}

selectHorsePower(){
    cy.xpath("//font[contains(text(),'456 kW / 620 hp')]")
}

isyourCarInclude(){
    cy.xpath("//font[contains(text(),'R8 5.2')]")
}

validateFirstRegistrationtext(){
    cy.xpath("//input[@name='monthYearFirstRegistered']").type("072007")
}

validateLicenseToOwnerText(){
    cy.xpath("//input[@name='monthYearOwnerRegistered']").type("072007")
}

validateWhenYouAreBonr(){

    cy.xpath("//font[contains(text(),'When were you born?')]")
}

setBirthDate(){

    cy.xpath("//input[@name='birthDate']").type("05061999")
}

}

export default CarInformation;