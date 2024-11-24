// Correo raro, password parrafo - FAKER

import {faker} from '@faker-js/faker'

describe( 'Correo raro, password parrafo - FAKER', function() 
{
   it('04. Correo raro, password parrafo - FAKER', function() 
   { 
        cy.visit('http://localhost:2368/ghost/#/signin')

        const text = Cypress._.repeat('1234@56789 ', 11)

        cy.get('input[name="identification"]').type(text).blur(); 
        cy.wait(2000);    // Espera para observar datos

        // Intentar colocar una imagen en una caja
        cy.get('input[name="password"]').type(faker.lorem.paragraph({ min: 1, max: 3 }));   // FAKER
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);    // Espera para observar datos

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })
})

    
    
