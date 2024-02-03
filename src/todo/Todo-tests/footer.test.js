import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '../components/footer';

describe('Footer Component', () => {
  const mockDispatch = jest.fn();
  const todos = [
    { id: 1, title: 'Todo !', completed: false },
    { id: 2, title: 'Todo 2', completed: true },
    { id: 3, title: 'Todo #', completed: false },
    { id: 4, title: 'Todo 4', completed: true },
  ];

  test('renders no of active todos', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    expect(getByText('2 items left!')).toBeInTheDocument();
  });

  test('clears completed todos on click ', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer todos={todos} dispatch={mockDispatch} />
      </MemoryRouter>
    );
    fireEvent.click(getByText('Clear completed'));
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_COMPLETED_ITEMS' });
  });

});
