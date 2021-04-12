import HomeContent from "./home-content";
import { render } from "@testing-library/react";

describe("HomeContent", () => {
  it("should render component", () => {
    const container = render(<HomeContent />);
    expect(container).toMatchSnapshot();
  });
});
