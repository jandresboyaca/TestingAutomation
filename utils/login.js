export default function login(username, password) {
    cy.get('form').within(() => {
        cy.get('input[name="identification"]')
            .type(username)
            .should('have.value', username)
        cy.get('input[name="password"]')
            .type(password)
            .should('have.value', password)
        cy.get('[id="ember12"]').click()
        cy.wait(2000)
    })
}
