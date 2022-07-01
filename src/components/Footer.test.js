import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("renders footer with text", () => {
  render(<Footer />);
  const textFromFooter = screen.getByText(/Made with/i);
  expect(textFromFooter).toBeInTheDocument();
});
