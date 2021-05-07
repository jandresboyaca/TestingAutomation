const config = require('./config');

context('Create Post', () => {
    before(() => {
        cy.visit(`${config.baseUrl}/ghost/#/signin`)
    })

    it('Iniciar Session', function() {
        cy.get('form').within(() => {
            cy.get('input[name="identification"]')
                .type(config.username)
                .should('have.value', config.username)
            cy.get('input[name="password"]')
                .type(config.password)
                .should('have.value', config.password)
            cy.get('[id="ember12"]').click()
            cy.wait(2000)
        })
        cy.url().should('eq', `${config.baseUrl}/ghost/#/dashboard`)
        cy.visit(`${config.baseUrl}/ghost/#/posts`)
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/posts`)
    })

    it('Selecionar el boton de Crear Post', function() {
       cy.get('a[href*="#/editor/post"]')
        .should('have.class', 'gh-btn-primary')
        .first()
        .click()
    })

    it('Ingresar datos basicos y publicar del Post', function() {
        cy.wait(2000)  
        cy.url().should('eq', `${config.baseUrl}/ghost/#/editor/post`) 
    })

    it('Ingresar datos basicos del Post2', function() {       
        cy.get('textarea')
            .first()
            .type("Nuevo Post")
            .should('have.value',"Nuevo Post")

        cy.get('[title="Settings"]').click()
        cy.get('.settings-menu-pane-in').should('be.visible')            
    })
})
