import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';

// instead of MantineButton, just mock it so it won't crash
vi.mock('@mantine/core', () => ({
  Button: (props: any) => <button {...props} />,
}));

import Button from './Button';

test('Button should be rendered', () => {
  render(<Button>Hello</Button>);
  expect(screen.getByText(/Hello/)).toBeInTheDocument();
});
