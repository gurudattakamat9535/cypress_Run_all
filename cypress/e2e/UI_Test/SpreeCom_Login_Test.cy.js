// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('SpreeCom Application', function() {

    it('Visits the SpreeCom Page and Perform Login Action', function() {
    //Visit the SpreeCom Website
    cy.visit("https://demo.spreecommerce.org/login");
    
   // Enter UserName and Password
    
    cy.get("input[placeholder='Email']").type('guru@spree.com')
    cy.get("input[placeholder='Password']").type('pasword7975.')
    cy.get("input[type='submit']").click()
    //Verify Dashboard Tab
    cy.get('.spree-mb-large').should('have.text','My Account')
      
  })
  it('logout from SpreeCom', function(){
    cy.get("#account-button").click()
    cy.get('#link-to-account > [data-method="get"]').click()
    cy.get('#existing-customer > .col-lg-11 > .spree-mb-large').should('have.text','Log in to continue')
  })

  
  })