// Login aleatorio datos largos desde FAKER

import {faker} from '@faker-js/faker'

describe( 'Login aleatorio datos largos desde FAKER', function() 
{
   it('01. Login aleatorio usuario / password desde FAKER', function() 
   { 
        cy.visit('http://localhost:2368/ghost/#/signin')

        // Combinación letras entre 5 y 10
        cy.get('input[name="identification"]').type(faker.string.fromCharacters('abcde', { min: 35, max: 60 })); 
        cy.wait(2000);    // Espera para observar datos

        // 20 letras
        cy.get('input[name="password"]').type(faker.string.fromCharacters('abc', 30));
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);   

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('Please fill out the form to sign in.')
        })
    })
})

    
    
