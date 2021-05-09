const cookieSessionName = Cypress.env('cookieSessionName') || "ghost-admin-api-session"
const baseUrl = Cypress.config('baseUrl') || "http://localhost:2368/ghost"
var util = require('../utils.js')

context('Editar Post', () => {
    before(() => {
        util.login();
    })

    beforeEach(() => {
        Cypress.Cookies.preserveOnce(cookieSessionName);
    })

    it('Abrir lista de Post', () => {
        cy.visit(`${baseUrl}/#/posts`)
        cy.wait(2000)
        cy.url().should('eq', `${baseUrl}/#/posts`)
    })

    it('Selecionar post', () => {
        cy.get('li.gh-list-row.gh-posts-list-item')
            .first()
            .within(() => {
                cy.get('a[href*="#/editor/post/"]')
                    .first()
                    .click({force: true})
            })
        cy.wait(2000)
    })

    it('Editar titulo post', () => {
         cy.get('textarea')
            .first()
            .clear()
            .type("Nuevo Post Editado")
            .should('have.value',"Nuevo Post Editado")
    })

    it('Cerrar pagina', () => {
        cy.get('.fw3').click({force: true});
    })
})
