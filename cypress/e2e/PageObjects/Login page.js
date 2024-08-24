export class LoginPage{                                                               //crete a export class nd create methods for actions

    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'    //These are class varibles
    password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.username_textbox).type(username)                                   //Refer the class variables
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()    
    }
}
