class PostPage {
  login() {
    cy.visit('http://localhost:2368/ghost/#/signin')  
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  
  }

  visitPost() {
    cy.visit('http://localhost:2368/ghost/#/editor/post/')  
    cy.wait(4000)
  }

  visitPostList() {
    cy.visit('http://localhost:2368/ghost/#/posts/')  
    cy.wait(4000)
  }

  writePost() {
    cy.get('textarea[placeholder="Post title"]').type('Nuevo Titulo')  
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type('Contenido del Post')  // Escribe el contenido
  }

  clickButtons() 
  {
    cy.wait(2000)
    cy.contains("Publish").click();
    cy.wait(2000)
    cy.contains("Continue").click();
    cy.wait(2000)
    cy.contains("Publish post").click();
    cy.wait(2000)
    cy.contains('Copy').click();
    // cy.get('.popup .close').click();
  }

  selectPost()
  {
    cy.wait(2000)
    cy.contains('Nuevo Titulo').click();     
  }

  updatePost()
  {
     cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .clear()
    .type('Texto Modificado')
  }

  clickButtonsUpdate()
  {
    cy.wait(2000)
    cy.contains("Update").click();
    cy.wait(2000)
    cy.contains("Posts").click();
  }

  clickDeletePost()
  {
    cy.contains('Nuevo Titulo').rightclick();     
    cy.contains('Delete').click()
    cy.wait(2000);
  }

  addExcerptPost()
  {
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type('New Excerpt'); 
    cy.wait(2000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.visit('http://localhost:2368/ghost/#/editor/post/')  
  }

  clickSchedulePost()
  {
    cy.contains('Nuevo Titulo').click();
  }

  closeModal()
  {
    cy.get('.modal-content').contains('Delete').click();
    cy.wait(2000);
  }

  republish()
  {
    cy.wait(2000)
    cy.contains("Publish").click();
    cy.contains("Right now").click();
    cy.contains("Schedule for later").click();
  }

  publishExcerpt()
  {
    cy.wait(2000)
    cy.contains("Publish").click();
    cy.wait(2000)
    cy.contains("Continue").click();
    cy.wait(2000)
    cy.contains("Publish post").click();
  }

  republishButtons()
  {
    cy.wait(2000)
    cy.contains("Continue").click();

    cy.wait(2000)
    cy.contains("Publish post").click();

    cy.wait(2000)
    cy.contains("Close").click(); 
  }

  clickButtonsTag()
  {
    cy.wait(2000);
    cy.get('[disabled]').click({force: true})
    cy.get('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view').click(); // Add
  }
}
export default PostPage;
