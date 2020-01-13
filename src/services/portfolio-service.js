const works = [
  {
    id: 0,
    title: "New Providence",
    subtitle: "Coming soon",
    descrption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: "None",
    website: "https://vlasovproger.github.io/new-providence/",
    category: "Landing Page",
    imageDefault: "/images/default/new-providence.jpg",
    imageWebp: "/images/webp/new-providence.webp",
    github: "https://github.com/vlasovproger/new-providence-landing"
  },
  {
    id: 1,
    title: "Clean Corporate Landing",
    subtitle: "Coming soon",
    descrption:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    client: "None",
    website: "https://vlasovproger.github.io/clean-corporate-landing/",
    category: "Landing Page",
    imageDefault: "/images/default/clean-corporate-landing.jpg",
    imageWebp: "/images/webp/clean-corporate-landing.webp",
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
