class SettingsPage {
  login() {
    cy.visit('http://localhost:2368/ghost/#/signin')  
    cy.get('input[name="identification"]').type('eh.rodriguez20@uniandes.edu.co')  
    cy.get('input[name="password"]').type('123ABCde!!')  // Ingresa la contraseña de administrador
    cy.get('button[type="submit"]').click()  
  }

  visit() {
    cy.visit('http://localhost:2368/ghost/#/settings/')  
    cy.wait(4000)
  }

  visitPageList() {
    cy.visit('http://localhost:2368/ghost/#/pages/')  
    cy.wait(4000)
  }

  writePage() {
    cy.get('textarea[placeholder="Page title"]').type('Nuevo Titulo')  
    cy.get('[contenteditable="true"]')
    .first()  // Si hay más de uno, seleccionamos el primero
    .click()  // Hacemos clic para asegurarnos de que el editor esté enfocado
    .type('Contenido de la Pagina')  // Escribe el contenido
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
    // cy.get('.popup .close').click();
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

  republishButtons()
  {
    cy.wait(2000)
    cy.contains("Continue").click();

    cy.wait(2000)
    cy.contains("Publish page").click();

    cy.wait(2000)
    cy.contains("Close").click(); 
  }

}
export default PagePage;
