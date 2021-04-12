import VerticalLines from "./vertical-lines";
import { render } from "@testing-library/react";

describe("VerticalLines", () => {
  it("should render component", () => {
    const container = render(<VerticalLines />);
    expect(container).toMatchSnapshot();
  });
});
