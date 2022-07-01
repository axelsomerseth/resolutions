import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

test("renders alert with a message", () => {
  render(<Alert type="danger" message="alert unit test" />);
  const text = screen.getByText(/alert unit test/i);
  expect(text).toBeInTheDocument();
});
