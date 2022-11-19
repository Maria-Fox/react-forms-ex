import { render, screen } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it("matches snapchot", function () {
  const { asFragment, getByText } = render(<App />);

  const header = getByText("Color Boxes");
  
  expect(asFragment()).toMatchSnapshot();
  expect(header).toBeInTheDocument();
})