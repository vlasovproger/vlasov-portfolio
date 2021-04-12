import WorksContent from "./works-content";
import { render } from "@testing-library/react";

describe("WorksContent", () => {
  it("should render component", () => {
    const container = render(<WorksContent />);
    expect(container).toMatchSnapshot();
  });
});
