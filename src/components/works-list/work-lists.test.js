import { render, screen } from "@testing-library/react";
import WorkList from "./works-list";

describe("WorkList component", () => {
  it("should show existing items", async () => {
    const work = {
      category: "Progressive web application",
      client: "None",
      descrption:
        "A blog simulation project using modern technology and responsive design. Providing the user with all the advantages of PWA, and also includes server rendering.",
      github: "https://github.com/vlasovproger/dnda-project",
      id: 1,
      imageDefault: "/images/default/dnda-project.jpg",
      imageWebp: "/images/webp/dnda-project.webp",
      stack: [
        "React",
        "Redux",
        "Next.js",
        "SCSS",
        "Next Offline",
        "Smart-grid",
        "Vanilla Lazyload",
        "Axios",
        "Faker",
      ],
      subtitle: "A blog with a responsive design",
      title: "DNDA Project",
      website: "https://dnda-project.now.sh/",
    };
    const mockUseContext = jest.fn(() => ({
      worksStore: { works: [work], getAllWorks: jest.fn(() => [work]) },
    }));

    React.useContext = mockUseContext;
    const { findByText } = render(<WorkList />);
    const item = await findByText(/DNDA Project/i);
    expect(item).toBeInTheDocument();
  });

  it("should fetch new items", async () => {
  
    const getAllWorksMock = jest.fn();
    const mockUseContext = jest.fn().mockImplementation(() => ({
      worksStore: { works: [], getAllWorks: getAllWorksMock },
    }));
    React.useContext = mockUseContext;
    render(<WorkList />);

    expect(getAllWorksMock).toBeCalled();
  });
});
