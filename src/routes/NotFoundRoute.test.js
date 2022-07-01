import { render, screen } from "@testing-library/react";
import NotFoundRoute from "./NotFoundRoute";

test("not found should be rendered", () => {
  render(<NotFoundRoute />);
  const h1Elem = screen.getByText(/Nothing was found./i);
  expect(h1Elem).toBeInTheDocument();
});
