Feature: Despublicar y eliminar una página en Ghost

@user1 @web
  Scenario: Despublicar y eliminar una página existente
    Given El usuario inicia sesión como administrador
    When El usuario visita la página de páginas
    And El usuario verifica si la página "Pagina video" existe
    And El usuario despublica y elimina la página "Pagina video"
    Then La página se elimina correctamente
