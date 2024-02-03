# Todo App Testing

This repository contains unit tests for a TodoMVC . The tests are written using the `@testing-library/react` library and are organized for different components within the application.

## Table of Contents

- [Components](#components)
 
  - [Header Component](#header-component)
  - [Input Component](#input-component)
  - [Item Component](#item-component)
  - [Footer Component](#footer-component)
  - [Main Component](#main-component)



## Components

### Header Component

**Unit Tests:**

- Test: `calls dispatch when a new todo is added`
  - Description: Tests if the Header component correctly dispatches the `ADD_ITEM` action when a new todo is added.



### Input Component

**Unit Tests:**

- Test: `calls onSubmit when enter is pressed`
  - Description: Tests if the Input component correctly calls the `onSubmit` function when the Enter key is pressed.

- Test: `don't call onSubmit on an empty input field`
  - Description: Tests if the Input component does not call the `onSubmit` function when the input field is empty.



### Item Component

**Unit Tests:**

- Test: `toggles todo on checkbox click`
  - Description: Tests if clicking the checkbox in the Item component toggles the todo by dispatching the `TOGGLE_ITEM` action.



### Footer Component

**Unit Tests:**

- Test: `renders no of active todos`
  - Description: Tests if the Footer component correctly displays the number of active todos.

- Test: `clears completed todos on click`
  - Description: Tests if clicking the "Clear completed" button dispatches the `REMOVE_COMPLETED_ITEMS` action.



### Main Component

**Integration Tests:**

- Test: `renders the list of todo`
  - Description: Tests if the Main component correctly renders the list of todos.
  

Feel free to run these tests individually or use `npm test` to run all the tests together.
