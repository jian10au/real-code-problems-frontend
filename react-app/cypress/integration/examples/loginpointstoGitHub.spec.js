/// <reference types="Cypress" />

describe(
    'If a user has not logged, by clicking Sign In, he will be redirect to github' , () => {
        beforeEach(
            () => {
                cy.visit('/')
            }
                )
        it('click in and redirect happens', () => {
                    cy.contains('Sign In').click();
                    cy.wait(2500)
                    cy.queryByText('Log in with github').click()
                    console.log(cy.location('href'))
        })
    }
)
