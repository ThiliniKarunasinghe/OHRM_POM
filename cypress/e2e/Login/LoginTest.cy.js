import {LoginPage} from "../PageObjects/Login page"               //Import the creted class called Loginpage nd using an object call all the creted methods
 

    it('should log in and display the dashboard', () => {

        cy.visit( 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new LoginPage()                                       //create object- ln  will be constat var

        ln.enterUsername('Admin')
        ln.enterPassword('admin123')
        ln.clickLogin()
        ln.verifyLogin()
    })





