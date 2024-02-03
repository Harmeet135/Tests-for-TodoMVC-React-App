import { Main } from '../components/main';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Main Component', () => {
  const mockDispatch = jest.fn();
  const todos = [{ id: 1, title: 'Todo 1', completed: false }];

  it('renders the list of todo', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Main todos={todos} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(getByTestId('todo-list')).toBeInTheDocument();
  });
});
