import { render, fireEvent } from '@testing-library/react';
import { Header } from '../components/header';

describe('Header Component', () => {
  const mockDispatch = jest.fn();

  test('calls dispatch when a new todo is added', () => {
    const { getByPlaceholderText } = render(<Header dispatch={mockDispatch} />);
    const input = getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'ADD_ITEM', payload: { title: 'New Todo' } });
  });
});
