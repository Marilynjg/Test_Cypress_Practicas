describe('Agregar tareas', () => {
  it('Agregar tarea a la lista', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('.new-todo').type('Tarea 1{enter}')
  cy.get('.todo-list').contains('Tarea 1')
})

  it('Marcar tarea como completada', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('.new-todo').type('Tarea 1{enter}')
  cy.get('.todo-list').contains('Tarea 1')
  cy.get('[data-testid="todo-item-toggle"]').click()
})

it('Borrar tarea completada con función Clear Completed', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('.new-todo').type('Tarea 1{enter}')
  cy.get('.todo-list').contains('Tarea 1')
  cy.get('[data-testid="todo-item-toggle"]').click()
  cy.get('.clear-completed').click()
})



})
