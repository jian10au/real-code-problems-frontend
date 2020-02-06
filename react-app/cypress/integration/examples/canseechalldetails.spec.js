describe(
    'Any user can see the challenge details' , () => {
        beforeEach(
            () => {
                cy.visit('/')
            }
                )
        it('can download code challenge docker file', () => {
                    cy.contains('More detail').click();
                    cy.wait(2500)
                    cy.contains('start challenge')
        })
    }
)

