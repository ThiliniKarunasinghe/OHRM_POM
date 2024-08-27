export class LeavePage{                                                              

    click_apply = '.oxd-topbar-body-nav > ul > :nth-child(1)' 
    click_leave_type_textbox = '.oxd-select-text'
    select_leave_type = '.oxd-select-dropdown > :nth-child(2)'
    click_cala1 = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    select_date1 = ':nth-child(23) > .oxd-calendar-date'
    click_cala2 = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    select_date2 = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input-calendar > .oxd-calendar-wrapper > .oxd-calendar-dates-grid > :nth-child(23) > .oxd-calendar-date'
    type_comments = '.oxd-textarea'
    click_save = '.oxd-button'
    verify_llbl = '.oxd-topbar-header-breadcrumb > .oxd-text'



    clickApply(){
        cy.get(this.click_apply).click()                                   
    }

    clicktextbox1(){
        cy.get(this.click_leave_type_textbox).click()
    }

    SelectElement1(){
        cy.get(this.select_leave_type).click()    
    }

    typeText1(){
        cy.get(this.click_cala1).click()   
    }

    SelectfromdrpDown(){
        cy.get(this.select_date1).click()    
    }

    clickTextbox2(){
        cy.get(this.click_cala2).click()    
    }

    SelectElement2(){
        cy.get(this.select_date2).click()    
    }

    typecomments(test){
        cy.get(this.type_comments).type(test)    
    }

    clickApply_button(){
        cy.get(this.click_save).click()    
    }

    verifyLeavelbl(){
        cy.get(this.verify_llbl).should('have.text','Leave')    
    }





    




}
       