import AboutContent from "./about-content";
import { render } from "@testing-library/react";

describe("AboutContent", () => {
  it("should render component", () => {
    const container = render(<AboutContent />);
    expect(container).toMatchSnapshot();
  });
});
