import {PIMPage} from "../PageObjects/PIMpage"

describe('employee Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        })
    })

    it('should add a new employee ', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

        const em = new PIMPage()   

    
        em.clickAddButton()
        em.enterFirstName('org')
        em.entermiddleName('test')
        em.enterLasttName('user')
        em.clickSaveButton()
        em.verifyPIM()
        

        cy.wait(4000)

        
        
    })

})

