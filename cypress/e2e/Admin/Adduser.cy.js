import {AdduserPage} from "../PageObjects/Adduser page"

describe('Add user Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        })
    })

    it('should add a new user ', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
       

        const us = new AdduserPage()   

        us.clickAdd()
        us.clicktextbox1()
        us.SelectElement1()
        us.typeText1('org test user')
        cy.wait(4000)
        us.SelectfromdrpDown()
        us.clickTextbox2()
        us.SelectElement2()
        us.typeText2('Orgtest')
        us.TypePW('Orgtest123')
        us.confirmPW('Orgtest123')
        us.clcickSave()
        cy.wait(4000)
        us.verifyLbl()

        
        

        
        
    })

})
