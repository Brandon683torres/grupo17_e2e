class PagePage 
{
  login() {
    cy.visit('http://localhost:2368/ghost/#/signin')  
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  
  }

  visitPage() {
    cy.visit('http://localhost:2368/ghost/#/editor/page/')  
    cy.wait(4000)
  }

  visitPageList() {
    cy.visit('http://localhost:2368/ghost/#/pages/')  
    cy.wait(4000)
  }

  selectPageInsertada(titulo)
  {
    cy.wait(2000)
    cy.contains(titulo).click();     
  }

  writePage() {
    cy.get('textarea[placeholder="Page title"]').type('Nuevo Titulo')  
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type('Contenido de la Pagina')  // Escribe el contenido
  }

  writePageData(titulo,contenido) {
    cy.get('textarea[placeholder="Page title"]').type(titulo)  
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type(contenido)  // Escribe el contenido
  }

  writePageDataEdit(titulo,contenido) {
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
    cy.contains("Publish page").click();
    cy.wait(2000)
    cy.contains('Copy').click();

    cy.wait(2000)
    cy.get('div > button > svg').click();
  }

  addExcerptPage(contenido)
  {
    cy.log(contenido)
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.get('textarea.post-setting-custom-excerpt.ember-text-area.gh-input.ember-view').type(contenido); 
    cy.wait(6000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(6000);
  }

  selectPage()
  {
    cy.wait(2000)
    cy.contains('Nuevo Titulo').click();     
  }

  updatePage()
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
  }

  clickDeletePage()
  {
    cy.contains('Nuevo Titulo').rightclick();     
    cy.contains('Delete').click()
    cy.wait(2000);
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

  addURLPage(contenido)
  {
    cy.log(contenido)
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(2000);
    cy.get('input.post-setting-slug.ember-text-field.gh-input.ember-view').type(contenido); 
    cy.wait(6000);
    cy.get('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click(); 
    cy.wait(6000);
  }

  republishButtons()
  {
    cy.wait(2000)
    cy.contains("Continue").click();

    cy.wait(2000)
    cy.contains("Publish page").click();

    cy.wait(2000)
    cy.contains("Close").click(); 
  }

    orderBySelection(seleccion) {
  // Abre el menú de order de pages
  cy.wait(4000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'Newest first').click();

  // Espera a que las opciones de ordenamiento se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el orden específico
  cy.contains('.ember-power-select-option', seleccion).click();
  }

    orderByFeatured(seleccion) {
  // Abre el menú de order de pages
  cy.wait(4000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'All pages').click();

  // Espera a que las opciones de ordenamiento se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el orden específico
  cy.contains('.ember-power-select-option', seleccion).click();
  }

}
export default PagePage;
