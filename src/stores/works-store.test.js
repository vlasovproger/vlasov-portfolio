import WorksStore from "./works-store";
import portfolioService from "../services/portfolio-service";
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

jest.mock("../services/portfolio-service", () => {
  return jest.fn().mockImplementation(() => {
    return {
      getWork: () => Promise.resolve(work),
      getWorks: () => Promise.resolve([work]),
    };
  });
});

describe("WorksStore", () => {
  let worksStore;
  beforeAll(() => {
    worksStore = new WorksStore();
  });
  it("Should get current work", async () => {
    const service = new portfolioService();
    expect(Object.keys(worksStore.currentWork)).toHaveLength(0);
    await worksStore.getCurrentWork(1, service);
    expect(worksStore.currentWork.id).toBe(1);
  });

  it("should get all works", async () => {
    const service = new portfolioService();
    expect(worksStore.works).toHaveLength(0);
    await worksStore.getAllWorks(service);
    expect(worksStore.works).toHaveLength(1);
  });
});
