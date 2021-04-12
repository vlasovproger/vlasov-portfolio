import Layout from "./layout";
import { render } from "@testing-library/react";

describe("Layout", () => {
  it("should render with children", () => {
    const { getByText } = render(
      <Layout>
        <div>test</div>
      </Layout>
    );
    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
