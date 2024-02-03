import { Item } from "../components/item";

import { render, fireEvent } from '@testing-library/react';

describe('Item Component', () => {
  const mockDispatch = jest.fn();
  const todo = { id: 1, title: 'Todo item', completed: false };

  test('toggles todo on checkbox click', () => {
    const { getByTestId } = render(<Item todo={todo} dispatch={mockDispatch} />);
    const checkbox = getByTestId('todo-item-toggle');
    fireEvent.click(checkbox);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'TOGGLE_ITEM', payload: { id: 1 } });
  });
});