import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders learn react link", () => {
  render(<Footer />);
  const textFromFooter = screen.getByText(/Made with/i);
  expect(textFromFooter).toBeInTheDocument();
});
