import { render } from "@testing-library/react";
import WorkDetailsContent from "./work-details-content";

describe("WorkDetailsContent", () => {
  it("should render with props", () => {
    const props = {
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
    const { getByText } = render(<WorkDetailsContent currentWork={props} />);
    expect(getByText(/Progressive web application/i)).toBeInTheDocument();
    expect(getByText(/SCSS/i)).toBeInTheDocument();
    expect(getByText(/DNDA Project/i)).toBeInTheDocument();
    expect(getByText(/A blog with a responsive design/i)).toBeInTheDocument();
    expect(getByText(/A blog simulation project using/i)).toBeInTheDocument();
    expect(getByText(/None/i)).toBeInTheDocument();
  });
  it("should render without props", () => {
    const { getByText } = render(<WorkDetailsContent />);
    expect(getByText(/Loading/i)).toBeInTheDocument();
  });
});
