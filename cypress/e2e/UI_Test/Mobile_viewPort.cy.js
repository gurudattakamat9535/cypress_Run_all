// type definitions for Cypress object "cy"
/// <reference types="cypress" />
it("Mobile View", () => {

    cy.visit("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo");
    cy.viewport('ipad-mini')
    cy.xpath("//p[normalize-space()='Input Forms']").click()
    cy.xpath("//a[normalize-space()='Input Form Submit']").click()
   // cy.injectAxe()
   // cy.checkA11y()
  })

  //fe88b653-293c-4a8b-8257-a8f33329a599
  // npx cypress run --spec "cypress/e2e/UI_Test/Mobile_viewPort.cy.js" --record --key fe88b653-293c-4a8b-8257-a8f33329a599