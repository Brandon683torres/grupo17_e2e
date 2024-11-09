class PostsPage {
  visit() {
    // Navegar a la página de posts
    cy.visit('http://localhost:2368/ghost/#/posts');
  }

  filterByTag(tagName) {
  // Abre el menú de filtro de tags
  cy.wait(3000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'All tags').click();

  // Espera a que las opciones de tag se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el tag específico por su nombre
  cy.contains('.ember-power-select-option', tagName).click();
  }
  
    orderByTime(time) {
  // Abre el menú de order de posts
  cy.wait(1000); // Espera  segundos
  cy.contains('.gh-contentfilter-menu', 'Newest first').click();

  // Espera a que las opciones de ordenamiento se carguen en el menú
  cy.get('.ember-power-select-option').should('be.visible');

  // Selecciona el orden específico
  cy.contains('.ember-power-select-option', time).click();
  }

}

export default PostsPage;
