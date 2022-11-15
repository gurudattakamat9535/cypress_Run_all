// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('SmartBearSoftware Application', function() {

    it('Visits the SmartBearSoftware Page and Perform Login Action', function() {
    cy.visit("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx");
    cy.get("#ctl00_MainContent_username").type('Tester')
    cy.get("#ctl00_MainContent_password").type('test')
    cy.get("#ctl00_MainContent_login_button").click()
    //Verify Dashboard Tab
    cy.get('h1').should('have.text','Web Orders')
    cy.xpath("//a[text()='Order']").click()
    cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').select('FamilyAlbum')
    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(2)
    cy.get('#ctl00_MainContent_fmwOrder_txtName').type('gurudatta')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type('jaja')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type('mysore')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox4').type('karnataka')
    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type('581355')
    cy.get('#ctl00_MainContent_fmwOrder_cardList_0').click()
    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(142514262715)
    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type('12/34')
    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()
    cy.get('strong').should('have.text','\n                    New order has been successfully added.\n                ')
    cy.get('#ctl00_menu > :nth-child(1) > a').click()
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','gurudatta')
    cy.get('#ctl00_logout').click()
    


  })
  
//   it('Order Page Action', function() {
//     cy.xpath("//a[text()='Order']").click()
//     //cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').click()

//     //cy.xpath("//select[@id='ctl00_MainContent_fmwOrder_ddlProduct']").click()
//     //cy.xpath("//option[text()='FamilyAlbum']").click()
//     //cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type('89')


//   })

  
  })