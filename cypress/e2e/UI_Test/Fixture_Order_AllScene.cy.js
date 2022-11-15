/// <reference types="cypress"/>

describe('Fetching data from fixture file -> Orderallscene.json', function(){
    before(function(){
        cy.fixture('Order_AllScene').then(function (data){
            this.data=data;
        })
    })
    it('visit webOrder page and perform login and see all Order scene', function(){
            cy.visit(this.data.URL);
            cy.get('#ctl00_MainContent_username').type('Tester')
            cy.get('#ctl00_MainContent_password').type('test')
            cy.get('#ctl00_MainContent_login_button').click()
            for(var i=0;i<this.data.Order.length;i++){
                cy.get("a[href='Process.aspx']").click();
                cy.get('#ctl00_MainContent_fmwOrder_ddlProduct').type(this.data.Order[i].product)

                if(this.data.Order[i].qty!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_txtQuantity').type(this.data.Order[i].qty)}

                if(this.data.Order[i].custname!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_txtName').type(this.data.Order[i].custname)}
                
                if(this.data.Order[i].street!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_TextBox2').type(this.data.Order[i].street)}

                if(this.data.Order[i].city!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_TextBox3').type(this.data.Order[i].city)}

                if(this.data.Order[i].zip!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_TextBox5').type(this.data.Order[i].zip)}


                    cy.get('#ctl00_MainContent_fmwOrder_cardList_0').click()


                if(this.data.Order[i].cr_num!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_TextBox6').type(this.data.Order[i].cr_num)}

                if(this.data.Order[i].exp_date!==""){
                    cy.get('#ctl00_MainContent_fmwOrder_TextBox1').type(this.data.Order[i].exp_date)}

                    cy.get('#ctl00_MainContent_fmwOrder_InsertButton').click()

                    if(this.data.Order[i].alt==="New Order has been successfully added."){
                        cy.get('strong').should('have.text','\n                    New Order has been successfully added.\n                ')
                        //cy.get("a[href='Process.aspx']").should('have.text',this.data.Login[i].expected_result)
                        //cy.get("a[href='Process.aspx']").should('have.contain','Order').click()
                        cy.url().should('include','/samples/TestComplete11/WebOrders/Process.aspx')
                        //logout verification
                        cy.get('#ctl00_logout').click()
                        cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
                    }
                     else if(this.data.Order[i].alt==="  Quantity must be greater than zero. "){
                        cy.contains(this.data.Order[i].alt)
                    }
                    else if(this.data.Order[i].alt==="Field 'Customer name' cannot be empty."){
                        cy.contains(this.data.Order[i].alt)
                    }
                    else if(this.data.Order[i].alt==="Field 'Street' cannot be empty."){
                        cy.contains(this.data.Order[i].alt)
                    }
                    else if(this.data.Order[i].alt==="Field 'Street' cannot be empty."){
                        cy.contains(this.data.Order[i].alt)
                    }
                    else if(this.data.Order[i].alt==="Field 'Zip' cannot be empty."){
                        cy.contains(this.data.Order[i].alt)
                    } 
                    // else if(this.Order[i].alt==="Select a card type."){
                    //     cy.contains(this.Order[i].alt)
                    // }
                    else if(this.data.Order[i].alt==="Field 'Card Nr' cannot be empty."){
                        cy.contains(this.data.Order[i].alt)
                    }
                    else if(this.data.Order[i].alt==="Field 'Expire date' cannot be empty"){
                        cy.contains(this.data.Order[i].alt)
                    }
                    // else if(this.Order[i].alt==="Invalid format. Only digits allowed."){
                    //     cy.contains(this.Order[i].alt)
                    // }
                                       
            }
            cy.get('#ctl00_logout').click()
                        cy.get('#ctl00_MainContent_login_button').should('contain.value', "Login")
    })
})