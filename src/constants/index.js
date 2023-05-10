import {
  portfolio,
  Store,
  Weather,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  threejs,
  azure
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development(Front-End)",
    company_name: "2020-2021",
    icon: html,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Started with the basics of HTML, CSS and JavaScript initially it was just a hobby",
      "Through different Courses and tutorials enhanced my skills. Learned how to create static web pages with simple interactivity and styling.",
      "Done many projects to apply the learnt skills and test myself by giving difficult tasks.",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Web Development(Back-End)",
    company_name: "2021-2022",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Started by learning Node.js, a popular backend framework that uses JavaScript.",
      "Learned how to create RESTful APIs, use Express.js for routing and middleware, and connect to MongoDB for data storage.",
      "Worked on improving my backend skills by building projects, reading blogs and books, and taking online courses.",
      "Started learning more about React.JS, Cloud Computing, DevOps",
    ],
  },
  {
    title: "ReactJS",
    company_name: "2022-2023",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Started learning ReactJS as a way to create dynamic and interactive web applications using modern JavaScript features and principles.",
      "Followed several online tutorials and courses that taught me the basics of ReactJS, such as components, props, state, hooks, routing, and testing.",
      "Built some small projects using ReactJS to practice my skills and showcase my portfolio. Like an Ecommerce Website, todo list app, a weather app",
      "Currently looking for opportunities to work as a ReactJS developer and contribute to the open source community, also interested in learning advanced topics like Redux, TypeScript, and GraphQL."
    ],
  },
  {
    title: "Cloud Computing",
    company_name: "2022-2023",
    icon: azure,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Started with the basics of cloud computing, such as what it is, how it works, and what are the benefits and challenges of using it.",
      "Explored some of the popular cloud platforms, such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP), and how to use their features and tools.",
      "Impressed by the features and interface of Azure and started exploring it more.",
      "Applied my knowledge to some real-world scenarios, such as deploying a web application using virutal machine and storing data in SQl server.",
    ],
  },
  // {
  //   title: "Cloud Services",
  //   company_name: "2022-2023",
  //   icon: azure,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SHOE STORE",
    description:
      "Created an ecommerce website using Strapi, React and Stripe. Website is responsive and adapts to different screen sizes and devices. It also has a modern and attractive design that enhances the user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: Store,
    website_link: "https://shoe-store-frontend.vercel.app/",
    source_code_link: "https://github.com/kaushik0703/shoe-store-frontend",
  },
  {
    name: "Kaushik | Portfolio",
    description:
      "This is a portfolio website that showcases my skills and projects as a web developer. I used React and Three.js to create an interactive 3D environment that allows visitors to explore my work and learn more about me.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    website_link: "kaushikmoralwar.netlify.app/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Restore Memories",
    description:
      "In this website I've tried to integrate API called Replicate based on ML model called GFPGAN from Applied Research Center to enhance the quality of face photo. The website is built with ReactJS and NextJS, user-friendly interface, and photo download.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      }
    ],
    image: Weather,
    website_link: "https://restorememories.netlify.app/",
    source_code_link: "https://github.com/kaushik0703/PhotoRestore",
  },
];

export { services, technologies, experiences, testimonials, projects };
