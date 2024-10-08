import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Items link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Items/i);
  expect(linkElement).toBeInTheDocument();
});
