import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders the homepage', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Next.js with the App Router!')).toBeInTheDocument();
  });
});
