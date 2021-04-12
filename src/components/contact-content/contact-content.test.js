import ContactContent from "./contact-content";
import { render } from "@testing-library/react";

describe("ContactContent", () => {
  it("should render component", () => {
    const container = render(<ContactContent />);
    expect(container).toMatchSnapshot();
  });
});
