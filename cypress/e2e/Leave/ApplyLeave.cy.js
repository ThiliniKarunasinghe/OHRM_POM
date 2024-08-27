import {LeavePage} from "../PageObjects/leavepage"

describe('Leave Tests', () => {
    beforeEach(() => {
        cy.fixture('users').then((users) => {
            cy.login(users.adminUser.username, users.adminUser.password);
        })
    })
    it('should apply for a leave', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList')

        const lv = new LeavePage()   

    
        lv.clickApply()
        lv.clicktextbox1()
        lv.SelectElement1()
        lv.typeText1()
        lv.SelectfromdrpDown()
        lv.clickTextbox2()
        lv.SelectElement2()
        lv.typecomments('test comments')
        lv.clickApply_button()
        lv.verifyLeavelbl()

        

        
    })
})


