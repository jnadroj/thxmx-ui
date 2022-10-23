import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders loaders', () => {
    expect(screen.getByText('Loaders')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders inputs', () => {
    expect(screen.getByText('Input')).toBeInTheDocument();
  });

  it('renders tags', () => {
    expect(screen.getByText('Tags')).toBeInTheDocument();
  });

  it('renders modal', () => {
    expect(screen.getByText('Modal')).toBeInTheDocument();
  });

  it('render rate', () => {
    expect(screen.getByText('Rate')).toBeInTheDocument();
  });
});
