Feature: Crear y programar una página en Ghost

@user1 @web
  Scenario: Crear y programar la publicación de una nueva página
    Given El usuario inicia sesión como administrador
    When El usuario visita la página de páginas
    And El usuario crea una nueva página con título "Pagina programada" y un divisor
    Then La página se programa para publicarse el "2024-11-11" a las "9:00"
