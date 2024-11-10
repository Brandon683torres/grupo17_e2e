class TagsPage {
  // Navega a la página de tags en Ghost
  visit() {
    cy.visit('http://localhost:2368/ghost/#/tags');
  }

  // Hace clic en el botón para crear un nuevo tag
  clickNewTagButton() {
    cy.contains('New tag').click();
  }

  // Llena el campo de nombre del tag con el nombre especificado
  fillTagName(name) {
    cy.get('input[id="tag-name"]').clear().type(name);
  }

  // Llena el campo de descripción del tag con la descripción especificada
  fillTagDescription(description) {
    cy.get('textarea[id="tag-description"]').clear().type(description);
  }

  // Guarda el nuevo tag
  saveTag() {
    cy.contains('Save').click();
  }


  // Selecciona un tag por su nombre
  selectTag(name) {
    cy.contains(name).click();
  }

  // Actualiza la descripción de un tag con la nueva descripción especificada
  updateTagDescription(newDescription) {
    cy.get('textarea[name="description"]').clear().type(newDescription);  // Cambia la descripción
    cy.contains('Save').click();  // Guarda los cambios
  }


  // Hace clic en un tag específico en la lista de tags
  clickTag(tagName) {
    cy.contains(tagName).click();
  }

  // Hace clic en el botón para eliminar el tag
  clickDeleteButton() {
    cy.get('button.gh-btn.gh-btn-red').click({ force: true });  // Asegura el clic
  }

  // Confirma la eliminación del tag
  confirmDelete() {
    cy.contains('Delete').click({ force: true });  // Asegura el clic
  }

  // Aplica un filtro para mostrar solo los posts con el tag especificado
  filterByTag(tagName) {
    cy.get('.gh-contentfilter-menu').click();  // Abre el menú de filtros
    cy.contains('.ember-power-select-option', tagName).click();  // Selecciona el tag en el filtro
  }
  
  // Verifica si un tag ya existe
  verifyTagExists(tagName) {
    // Devuelve un valor booleano que indica si el tag existe
    return cy.get('.gh-tag-list-name').then(tags => {
      const tagExiste = Array.from(tags).some(tag => tag.innerText.trim() === tagName);
      return tagExiste;
    });
  }

}

export default TagsPage;