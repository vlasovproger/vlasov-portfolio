const works = [
  {
    id: 1,
    title: "DNDA Project",
    subtitle: "A blog with a responsive design",
    descrption:
      "A blog simulation project using modern technology and responsive design. Providing the user with all the advantages of PWA, and also includes server rendering.",
    client: "None",
    website: "https://dnda-project.now.sh/",
    category: "Progressive web application",
    imageDefault: "/images/default/dnda-project.jpg",
    imageWebp: "/images/webp/dnda-project.webp",
    github: "https://github.com/vlasovproger/dnda-project",
    stack: [
      "React",
      "Redux",
      "Next.js",
      "SCSS",
      "Next Offline",
      "Smart-grid",
      "Vanilla Lazyload",
      "Axios",
      "Faker"
    ]
  },
  {
    id: 2,
    title: "JustBlog Project",
    subtitle: "A blog with a responsive design",
    descrption:
      "Justblog is a simple blog with several pages, made using modern technologies such as React, MobX, Next and others. All information is generated on the fly because there is no server part of the project.",
    client: "None",
    website: "https://just-blog.now.sh/",
    category: "Progressive web application",
    imageDefault: "/images/default/just-blog.jpg",
    imageWebp: "/images/webp/just-blog.webp",
    github: "https://github.com/vlasovproger/just-blog",
    stack: [
      "React",
      "MobX",
      "Next.js",
      "SCSS",
      "Next Offline",
      "Smart-grid",
      "Vanilla Lazyload",
      "Axios",
      "Faker"
    ]
  },
  {
    id: 3,
    title: "Clean Corporate Landing",
    subtitle: "Beautiful smart-grid landing",
    descrption:
      "Beautiful Landing made to all standards of modern layout, including delayed image upload and responsive design",

    client: "None",
    website: "https://vlasovproger.github.io/clean-corporate-landing/",
    category: "Landing Page",
    imageDefault: "/images/default/clean-corporate-landing.jpg",
    imageWebp: "/images/webp/clean-corporate-landing.webp",
    github: "https://github.com/vlasovproger/clean-corporate-landing",
    stack: [
      "Vanilla JS",
      "Gulp",
      "SCSS",
      "Smart-grid",
      "Vanilla Lazyload",
      "AOS.js"
    ]
  },
  {
    id: 4,
    title: "New Providence Landing",
    subtitle: "Responsive landing with animations",
    descrption:
      "Landing with delayed image upload, responsive design, and a library with js animations",
    client: "None",
    website: "https://vlasovproger.github.io/new-providence/",
    category: "Landing Page",
    imageDefault: "/images/default/new-providence.jpg",
    imageWebp: "/images/webp/new-providence.webp",
    github: "https://github.com/vlasovproger/new-providence-landing",
    stack: ["Vanilla JS", "Gulp", "SCSS", "Smart-grid", "Vanilla Lazyload"]
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
