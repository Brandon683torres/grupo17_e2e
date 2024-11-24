// Login aleatorio usuario / password desde FAKER

import {faker} from '@faker-js/faker'

describe( 'Login con usuario / password desde FAKER', function() 
{
   it('01. Login aleatorio usuario / password desde FAKER', function() 
   { 
        cy.visit('http://localhost:2368/ghost/#/signin')

        cy.get('input[name="identification"]').type(faker.internet.email());
        cy.wait(2000);    // Espera para observar datos

        cy.get('input[name="password"]').type(faker.internet.password());
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);

        cy.get('p').should(($p) => {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })
})

    
    
