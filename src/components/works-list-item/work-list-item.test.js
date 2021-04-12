import { render } from "@testing-library/react";
import WorkListItem from "./works-list-item";

describe("WorkListItem component", () => {
  it("Should render with props", () => {
    const props = {
      title: "title",
      subtitle: "subtitle",
      imageDefault: "imageDefault",
      imageWebp: "imageWebp",
      id: 1,
    };
    const { getByText } = render(<WorkListItem {...props} />);
    expect(getByText("title")).toBeInTheDocument();
    expect(getByText(/subtitle/i)).toBeInTheDocument();
  });
});
