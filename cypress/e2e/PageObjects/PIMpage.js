export class PIMPage{                                                               //crete a export class nd create methods for actions

     //These are class varibles
    click_add_button = '.orangehrm-header-container > .oxd-button'
    first_name = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middle_name = ':nth-child(2) > :nth-child(2) > .oxd-input'
    last_name = ':nth-child(3) > :nth-child(2) > .oxd-input'
    click_save = '.oxd-button--secondary'


    //Refer the class variables
    

    clickAddButton(){
        cy.get(this.click_add_button).click()
    }

    enterFirstName(fname){
        cy.get(this.first_name).type(fname)    
    }

    entermiddleName(mname){
        cy.get(this.middle_name).type(mname)    
    }

    enterLasttName(lname){
        cy.get(this.last_name).type(lname)    
    }

    clickSaveButton(){
        cy.get(this.click_save).click()
    }



}
