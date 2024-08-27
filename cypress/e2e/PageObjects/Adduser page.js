export class AdduserPage{                                                              

    click_add_button = '.orangehrm-header-container > .oxd-button' 
    click_text_box1 = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    select_element1 = '.oxd-select-dropdown > :nth-child(3)'
    type_text1 = '.oxd-autocomplete-text-input > input'
    select_from_dropdown = '.oxd-autocomplete-dropdown > :nth-child(1)'
    click_text_box2 = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    select_element2 = '.oxd-select-dropdown > :nth-child(2)'
    type_text2 = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    type_pw = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confirm_pw = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    click_save = '.oxd-button--secondary'
    verify_lbl = '.oxd-topbar-header-breadcrumb-level'



    clickAdd(){
        cy.get(this.click_add_button).click()                                   
    }

    clicktextbox1(){
        cy.get(this.click_text_box1).click()
    }

    SelectElement1(){
        cy.get(this.select_element1).click()    
    }

    typeText1(text1){
        cy.get(this.type_text1).type(text1)    
    }

    SelectfromdrpDown(){
        cy.get(this.select_from_dropdown).click()    
    }

    clickTextbox2(){
        cy.get(this.click_text_box2).click()    
    }

    SelectElement2(){
        cy.get(this.select_element2).click()    
    }

    typeText2(text2){
        cy.get(this.type_text2).type(text2)    
    }

    TypePW(tPW){
        cy.get(this.type_pw).type(tPW)    
    }

    confirmPW(cPW){
        cy.get(this.confirm_pw).type(cPW)    
    }

    
    clcickSave(){
        cy.get(this.click_save).click()    
    }

    verifyLbl(){
        cy.get(this.verify_lbl).should('have.text','User Management')     
    }




}
       