import { fireEvent, queryByAttribute, render, screen } from '@testing-library/react';
import Box from './Box';

it("should render Box", function () {
  render(<Box />);
})

it("should match the snapshot", function () {
  let { asFragment } = render(<Box />);

  expect(asFragment()).toMatchSnapshot();
})