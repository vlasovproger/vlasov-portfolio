import ErrorContent from "./error-content";
import { render } from "@testing-library/react";

describe("ErrorContent", () => {
  it("should render component", () => {
    const container = render(<ErrorContent />);
    expect(container).toMatchSnapshot();
  });
});
