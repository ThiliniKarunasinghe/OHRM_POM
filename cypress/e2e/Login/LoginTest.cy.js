import {LoginPage} from "../PageObjects/Login page"                                                                                            //Import the creted class called Loginpage nd using an object call all the creted methods
 

    it('Validate Login with Valid Username, Valid Password', () => {

        cy.visit( 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new LoginPage()                                                                                                         //create object- ln  will be constat var

        ln.enterUsername('Admin')
        ln.enterPassword('admin123')
        ln.clickLogin()
        ln.verifyLogin()
    })

    it('Validate Login with Valid Username, Invalid Password', () => {

        cy.visit( 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new LoginPage()                                       

        ln.enterUsername('Admin')
        ln.enterPassword('admin1234')
        ln.clickLogin()
        ln.verifyInvalivLogin()
    })

    it('Validate Login with Inalid Username, Valid Password', () => {

        cy.visit( 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new LoginPage()                                       

        ln.enterUsername('Admin4')
        ln.enterPassword('admin123')
        ln.clickLogin()
        ln.verifyInvalivLogin()
    })
    it('Validate Login with Inalid Username, Invalid Password', () => {

        cy.visit( 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln = new LoginPage()                                       

        ln.enterUsername('Admin4')
        ln.enterPassword('admin1234')
        ln.clickLogin()
        ln.verifyInvalivLogin()
    })





