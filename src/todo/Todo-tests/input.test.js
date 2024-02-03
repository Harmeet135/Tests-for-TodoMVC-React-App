import { render, fireEvent } from '@testing-library/react';
import { Input } from '../components/input';

describe('Input Component', () => {
  test('calls onSubmit when enter is pressed', () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Input onSubmit={mockOnSubmit} placeholder="Test Input" />);
    const input = getByTestId('text-input');
    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockOnSubmit).toHaveBeenCalledWith('Test');
  });

 test('dont call onSubmit on empty imput field',() => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Input onSubmit={mockOnSubmit} placeholder="Test Input" />);
    const input = getByTestId('text-input');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockOnSubmit).not.toHaveBeenCalled();
});
});
