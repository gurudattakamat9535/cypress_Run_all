// // type definitions for Cypress object "cy"
// /// <reference types="cypress" />

// describe('Handling Mouse Hover in Cypress', function() {
//     // test case
//     it('Clicking on Sign-In', function (){
//       // launch the application
//       cy.visit("https://www.flipkart.com/");
//       //to display hidden element with invoke() with show
//       cy.get('._1_3w1N').invoke('show')
//       //click on the hidden element
//       cy.contains('Orders').click({ force: true });
//       //assert to verify the url
//       // cy.get("input[class='_2IX_2- VJZDxU']").type('9535843864')
//       // cy.get("input[class='_2IX_2- _3umUoc _3mctLh VJZDxU']").type('pasword7975.')
//       // cy.get("button[class='_2KpZ6l _2HKlqd _3AWRsL']").click()
//       cy.url().should('include','Order');
//       cy.get('.icmw6p').should('have.text','Track Your Orders | Flipkart.com')
//    });
// })
//type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Handling Mouse Hover in Cypress', function() {
   // test case
   it('Clicking on Sign-In', function (){
     // launch the application
     cy.visit("https://www.flipkart.com/");
     // to display hidden element with invoke() with show
     cy.get('._1_3w1N').trigger('mouseover').invoke('show');
     //cy.get('_2kxeIr _1pY_1Z').click({ force: true });
     //click on the hidden element
      // cy.get("input[class='_2IX_2- VJZDxU']").type('9535843864')
      // cy.get("input[class='_2IX_2- _3umUoc _3mctLh VJZDxU']").type('pasword7975.')
      // cy.get("button[class='_2KpZ6l _2HKlqd _3AWRsL']").click()
      cy.contains('Orders').click({ force: true });
     //assert to verify the url
     cy.url().should('include','home_orders');
     cy.get('._36KMOx > span').should('have.text','Login')
     //cy.get('.icmw6p').should('have.text','Track Your Orders | Flipkart.com')
  });
})