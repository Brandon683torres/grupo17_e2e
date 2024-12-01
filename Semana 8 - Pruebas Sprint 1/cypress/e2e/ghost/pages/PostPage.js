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

  writePostData(titulo,contenido) {
    cy.get('textarea[placeholder="Post title"]').type(titulo)  
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type(contenido)  // Escribe el contenido
  }

  writePostDataTituloLargo(titulo,contenido) {
    cy.get('textarea[placeholder="Post title"]').type(titulo)  
    // desaparece opción Publish !!!!!
  }

  writePostDataEdit(titulo,contenido) {
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type(contenido)  // Escribe el contenido
    cy.contains("Unpublish").click();
    cy.wait(4000);
    cy.contains("revert").click();
    cy.wait(4000);
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
    cy.wait(2000)
    cy.get('div > button > svg').click();
  }

  selectPost()
  {
    cy.wait(2000)
    cy.contains('Nuevo Titulo').click();     
  }

  selectPostInsertado(titulo)
  {
    cy.wait(2000)
    cy.contains(titulo).click();     
  }

  updatePost()
  {
     cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .clear()
    .type('Texto Modificado\n Ahora con dos lineas')
    cy.wait(2500)
  }

  clickButtonsUpdate()
  {
    cy.wait(2000)
    cy.contains("Update").click();
    cy.wait(2000)
    cy.contains("Posts").click();
  }

  clickDeletePost(llave)
  {
    cy.contains(llave).rightclick(); 
    cy.wait(2000);    
    cy.contains('Delete').click()
    cy.wait(2000);
    cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click()
    cy.wait(2000);

  }

  addExcerptPost(contenido)
  {
    cy.log(contenido)
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type(contenido); 
    cy.wait(6000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(6000);
  }

  addURLPost(contenido)
  {
    cy.log(contenido)
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.get('input.post-setting-slug.ember-text-field.gh-input.ember-view').type(contenido); 
    cy.wait(6000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(6000);
  }

  addPublishDatePost(fecha)
  {
    cy.log(fecha)
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    // cy.get('div > input[type=text]').eq(1).click()
    cy.wait(2000)
    // cy.get('div > input[type=text]').eq(1).clear()


    cy.get('input[type="text"]').eq(0).click().should('be.visible').clear().type(fecha);
    // cy.get('div > input[type=text]').eq(1).invoke('val', fecha).trigger('change')

    cy.wait(2000)
    //cy.get('div > input[type=text]').eq(1).click()
    //cy.wait(2000)
    //cy.get('div > input[type=text]').eq(1).type(fecha); 
    cy.wait(6000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(6000);
  }

  clickSchedulePost(titulo)
  {
    cy.contains(titulo).click();
  }

  closeModal()
  {
    cy.get('.modal-content').contains('Delete').click();
    cy.wait(2000);
  }

  republish()
  {
    cy.wait(2000)
    cy.contains("Unpublish").click();
    cy.wait(1000);
    cy.contains("revert").click();
    cy.wait(1000);
    cy.contains("Publish").click();
    cy.wait(1000);
    cy.contains("Right now").click();
    cy.wait(1000);
    cy.contains("Schedule for later").click();
    cy.wait(1000);
    cy.contains("Continue").click();
    cy.wait(1000);
    cy.contains("Publish post").click();
    cy.wait(1000);
    cy.contains("Close").click();
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

    orderBySelection(seleccion) {
  // Abre el menú de order de posts
  cy.wait(4000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'Newest first').click();

  // Espera a que las opciones de ordenamiento se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el orden específico
  cy.contains('.ember-power-select-option', seleccion).click();
  }

    orderByFeatured(seleccion) {
  // Abre el menú de order de posts
  cy.wait(4000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'All posts').click();

  // Espera a que las opciones de ordenamiento se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el orden específico
  cy.contains('.ember-power-select-option', seleccion).click();
  }

}
export default PostPage;
