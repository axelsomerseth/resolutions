import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

test("renders alert with a message", () => {
  render(<Alert type="danger" message="alert unit test" />);
  const divWithMutedText = screen.getByText(/alert unit test/i);
  expect(divWithMutedText).toBeInTheDocument();
});
