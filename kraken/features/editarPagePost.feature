Feature: Editar una página existente en Ghost

@user1 @web
  Scenario: Editar una página publicada y agregar un marcador
    Given El usuario inicia sesión como administrador
    When El usuario visita la página de páginas
    And El usuario verifica si la página "Pagina video" existe
    And El usuario edita la página "Pagina video" y agrega un marcador "Coming soon"
    Then La página se actualiza correctamente
