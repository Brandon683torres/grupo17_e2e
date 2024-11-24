// Intenta colocar imagen en caja desde FAKER

import {faker} from '@faker-js/faker'

describe( 'Intenta colocar imagen en caja desde FAKER', function() 
{
   it('03. Intenta colocar imagen en caja desde FAKER', function() 
   { 
        cy.visit('http://localhost:2368/ghost/#/signin')

        cy.get('input[name="identification"]').type(faker.internet.email()); 
        cy.wait(2000);    // Espera para observar datos

        // Intentar colocar una imagen en una caja
        cy.get('input[name="password"]').type(faker.image.avatar());
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);    // Espera para observar datos

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })
})

    
    
