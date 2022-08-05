import { render, screen } from "@testing-library/react";
import TextTranslator from "../TextTranslator";

test("check if we parsed the summary right", () => {
  render(<TextTranslator summary="C'est un Fromage" />);
  const linkElement = screen.getAllByRole("text");
  expect(linkElement.length).toBe(3);
});
