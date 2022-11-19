import { fireEvent, queryByAttribute, render, screen } from '@testing-library/react';
import BoxList from './BoxList';


function addBox(boxListInstance, height = "90", width = "90", backgroundColor = "red") {

  // grab the labels/ input fields From the INPUT LABELS - as in the render html writeup!!!!!!
  const heightInput = boxListInstance.getByLabelText("Box Height");
  const widthInput = boxListInstance.getByLabelText("Box Width");
  const backgroundInput = boxListInstance.getByLabelText("Box Background Color");

  // update the target obj. Change(what ur updating, {the new obj})
  fireEvent.change(backgroundInput, { target: { value: backgroundColor } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxListInstance.getByText("Create Box!");

  // fire off event
  fireEvent.click(button);

  return button
}


it("renders Box without crashing", function () {
  render(<BoxList />);
});

it("creates/matches snapshot", () => {
  let {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new box upon submission", () => {
  let boxListInstance= render(<BoxList />);
  let newBoxButton = addBox(boxListInstance);

  // the boxes only come back w/ one button to delete. We use this, to go to the sibling and check those styles.

  expect(newBoxButton.previousSibling).toHaveStyle(`
  width: 90px,
  height: 90px,
  backgroundColor: red`)
});

it("deletes target box", function () {
  let { getAllByText } = render(<BoxList />);

  // Start pg. out w/ two boxes in state.
  let peachpuffBox = getAllByText(`X`);
  peachpuffBox = peachpuffBox[0];

  fireEvent.click(peachpuffBox);
  expect(peachpuffBox).not.toBeInTheDocument();
})