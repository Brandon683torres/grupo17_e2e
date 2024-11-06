describe('Login y Creación de Post en Ghost', function() {   
  it('debería iniciar sesión y crear un post', function() {
    // 1. Hacer login en Ghost
    cy.visit('http://localhost:2368/ghost/#/signin')  // Reemplaza con la URL de tu aplicación Ghost
    
    // Ingresar el correo electrónico y la contraseña
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  // Ingresa el correo de administrador
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  // Haz clic en el botón de login
    
    // Verificar que el login fue exitoso (se debería redirigir al panel de administración)
    // cy.url().should('include', '/ghost/#/site')  // Asegúrate de que estamos en el panel de administración
   

    cy.visit('http://localhost:2368/ghost/#/editor/post/')  // Reemplaza con la URL de tu aplicación Ghost
    cy.wait(4000)
 
    // 2. Crear un nuevo post
    // cy.get('a[href="#/editor/"]').click()  // Hacer clic en el botón de "Nuevo post" o "Editor" (dependiendo de la versión)
    
    // Escribir el título del post
    cy.get('textarea[placeholder="Post title"]').type('Mi cuarto Post en Ghost')  // Escribe el título
    
    // Escribir el contenido del post
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type('Este es el contenido de mi cuarto post en Ghost.')  // Escribe el contenido
    
    // Hacer clic en el botón de "Publicar"
    cy.get('button[title="Publish"]').click()
    
    // Confirmar que el post se ha publicado correctamente
    // cy.get('.gh-notifications').should('contain', 'Your post has been published.')  // Verifica que la notificación de publicación aparezca
  })
})
