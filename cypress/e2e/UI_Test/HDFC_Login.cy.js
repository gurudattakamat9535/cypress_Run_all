
   // type definitions for Cypress object "cy"
/// <reference types="cypress" />
/// //<reference types="Cypress-iframe" />
//import 'cypress-iframe'
describe('To Handle iFrame', function () {
    it('Visits the HDFC Net Banking Page and Perform Action', function () {
        //Visit the HDFC Netbanking Website
        cy.visit("https://netbanking.hdfcbank.com/netbanking/");

        // Enter to Frame and then perform action on element

        cy.get("frame[name='login_page']").then(function ($iframee) {
            const iframeele = $iframee.contents().find('input[name="fldLoginUserId"]')
            cy.wrap(iframeele).type('1000')
            const iframebutton = $iframee.contents().find(".btn.btn-primary.login-btn")
            cy.wrap(iframebutton).click()
            // const iframepasbtn = $iframe.contents().find(".lablefield ibvt mB0")
            // cy.wrap(iframepasbtn).should('have.text','Password/ IPIN')
        })

    })
})
