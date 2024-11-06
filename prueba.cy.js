describe('Login y Creaci�n de Post en Ghost', function() {   
  it('deber�a iniciar sesi�n y crear un post', function() {
    // 1. Hacer login en Ghost
    cy.visit('http://localhost:2368/ghost/#/signin')  // Reemplaza con la URL de tu aplicaci�n Ghost
    
    // Ingresar el correo electr�nico y la contrase�a
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  // Ingresa el correo de administrador
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contrase�a de administrador
    cy.get('button[type="submit"]').click()  // Haz clic en el bot�n de login
    
    // Verificar que el login fue exitoso (se deber�a redirigir al panel de administraci�n)
    // cy.url().should('include', '/ghost/#/site')  // Aseg�rate de que estamos en el panel de administraci�n
   

    cy.visit('http://localhost:2368/ghost/#/editor/post/')  // Reemplaza con la URL de tu aplicaci�n Ghost
    cy.wait(4000)
 
    // 2. Crear un nuevo post
    // cy.get('a[href="#/editor/"]').click()  // Hacer clic en el bot�n de "Nuevo post" o "Editor" (dependiendo de la versi�n)
    
    // Escribir el t�tulo del post
    cy.get('textarea[placeholder="Post title"]').type('Mi cuarto Post en Ghost')  // Escribe el t�tulo
    
    // Escribir el contenido del post
    cy.get('[contenteditable="true"]')
    .first()  // Si hay m�s de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor est� enfocado
    .type('Este es el contenido de mi cuarto post en Ghost.')  // Escribe el contenido
    
    // Hacer clic en el bot�n de "Publicar"
    cy.get('button[title="Publish"]').click()
    
    // Confirmar que el post se ha publicado correctamente
    // cy.get('.gh-notifications').should('contain', 'Your post has been published.')  // Verifica que la notificaci�n de publicaci�n aparezca
  })
})
