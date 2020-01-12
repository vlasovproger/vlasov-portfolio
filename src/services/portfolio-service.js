const works = [
  {
    id: 0,
    title: "New Providence",
    subtitle: "Coming soon",
    client: "None",
    website: "https://vlasovproger.github.io/new-providence/",
    category: "Landing Page",
    screenshots: ["/images/about-image.jpg"],
    github: "https://github.com/vlasovproger/new-providence-landing"
  },
  {
    id: 1,
    title: "Clean Corporate Landing",
    subtitle: "Coming soon",
    client: "None",
    website: "https://vlasovproger.github.io/clean-corporate-landing/",
    category: "Landing Page",
    screenshots: ["/images/about-image.jpg"],
    github: "https://github.com/vlasovproger/clean-corporate-landing"
  }
];

export default class portfolioService {
  getWork = id => {
    return works.filter(work => work.id === +id)[0];
  };
  getWorks = () => {
    return works;
  };
}
