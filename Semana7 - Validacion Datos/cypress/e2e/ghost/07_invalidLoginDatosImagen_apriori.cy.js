// Intenta colocar imagen en caja desde datapool

import {faker} from '@faker-js/faker'

describe( 'Intenta colocar imagen en caja desde datapool', function() 
{
   it('07. Intenta colocar imagen en caja desde datapool', function() 
   { 
        const DatosUsuario  = require("./datos/MOCK_DATA_USER_PASSWORD.json");
        const DatosImagenes = require("./datos/MOCK_DATA_IMAGENES.json");

        var tuplaAleatoria = DatosUsuario[Math.floor(Math.random() * DatosUsuario.length)];
        let usuario  = tuplaAleatoria["email"]

        Cypress.Keyboard.defaults({ keystrokeDelay: 0 });

        var regAleatorio1  = DatosImagenes[Math.floor(Math.random() * DatosImagenes.length)];
        let data_imagen = regAleatorio1["imagen"]

        cy.visit('http://localhost:2368/ghost/#/signin')

        cy.get('input[name="identification"]').type(usuario); 
        cy.wait(2000);    // Espera para observar datos

        // Intentar colocar una imagen en una caja
        cy.get('input[name="password"]').type(data_imagen);
        cy.wait(2000);    // Espera para observar datos

        cy.get('button[type="submit"]').click();
        cy.wait(2000);    // Espera para observar datos

        cy.get('p').should(($p) => 
        {
          expect($p.first()).to.contain('There is no user with that email address.')
        })
    })
})

       