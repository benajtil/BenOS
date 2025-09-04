const tagline = {
  tag: "#full-stack #softwaredev #graphic-designer #computer-science-graduate",
};

const scope = {};
const person = {
  name: {
    fname: "Ben Florence Aj",
    lname: "Til",
    get fullname() {
      return `${this.fname} ${this.lname}`;
    },
  },
  photo: {
    img: "../src/assets/bg1.jpg",
    border: "../src/assets/border.gif",
  },
  bio: {
    birth: "October 9, 2002",
    citizenship: "Filipino",
    location: {
      country: "Philippines",
      province: "South Cotabato",
      city: "Tupi",
      get loc() {
        return `${this.city} , ${this.province} , ${this.country}`;
      },
    },
  },

  socials: {
    github: {
      name: "github",
      label: "Github",
      title: "Github Profile",
      icon: "fab fa-github",
      url: "https://github.com/benajtil",
    },
    facebook: {
      name: "facebook",
      label: "Facebook",
      title: "facebook Profile",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/1.AjEspiritu09/",
    },
    linkedin: {
      name: "linkedin",
      label: "LinkedIn",
      title: "LinkedIn Profile",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/ben-florence-aj-til-7217a729a/",
    },
  },
};

const info = {
  titleDesc:
    "A passionate and creative Full-Stack Developer with a strong foundation in software engineering, design, and innovation. Dedicated to building responsive, user-focused web solutions with clean code and thoughtful design.",
};

const typedTitle = {
  title: [
    { text: "FULL-STACK DEVELOPER", color: "text-amber-400" },
    { text: "SOFTWARE DEVELOPER", color: "text-blue-400" },
    { text: "GRAPHIC DESIGNER", color: "text-pink-400" },
    { text: "CS GRADUATE", color: "text-green-400" },
  ],
};

const navLink = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "timeline",
    name: "Timeline",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "skills",
    name: "Skills",
  },

  {
    id: "contact",
    name: "Contact",
  },
];
const about = {
  bio: {
    hobbies: [
      {
        text: "Outside of coding, I enjoy drawing and graphic design, which allow me to express creativity in a different way.",
      },
      {
        text: "I’m passionate about continuous learning — sometimes diving into new topics before finishing the last, which keeps me constantly exploring.",
      },
      {
        text: "I also love traveling, as it gives me fresh perspectives, inspiration, and helps me recharge for new challenges.",
      },
    ],
    aboutme: `I’m a Computer Science graduate from Notre Dame of Marbel University (NDMU) and a self-taught developer with a real passion for building software. My journey started back in high school when I got curious about how computers and bots worked. Without any coding background, I began tinkering with open-source projects — tweaking, breaking, fixing, and eventually creating my own. Over time, I built music bots, RSS APIs, and Discord bots with custom commands, while also managing a private server and handling database systems.

That same curiosity naturally led me to full-stack development. I enjoy working across the stack — designing intuitive front-end interfaces, writing clean and efficient back-end logic, and working with databases to bring everything together.

Beyond coding, I’ve also dabbled in hardware tinkering and troubleshooting, which sharpened my problem-solving skills and taught me how to quickly adapt when things don’t go as planned.

I may not always know everything on day one, but I bring persistence, adaptability, and a strong drive to learn fast. I’m excited to grow as a Software Engineer and contribute to building scalable, user-focused applications.`,
    objective:
      "Entry-level Full-Stack Developer skilled in JavaScript (React, Node.js) and PHP, with a strong foundation in databases and responsive design. Passionate about building scalable web applications, optimizing user experiences, and continuously learning new technologies. Seeking to contribute to a collaborative engineering team where I can grow into a well-rounded software engineer.",
    scopes: [
      { text: "Full Stack Developer" },
      { text: "(Entry) Mobile App Developer" },
      { text: "Frontend/UI Developer" },
      { text: "Graphic Designer" },
      { text: "2D assets Designer" },
      { text: "IT Techinician" },
      { text: "PC Builder" },
      { text: "Tech Enthusiast" },
      { text: "Lifelong Learner" },
      { text: "Problem Solver" },
      { text: "Team Player" },
      { text: "Creative Thinker" },
    ],
  },
};
import animateLogo from "../assets/utilities/animate.png";
import cLogo from "../assets/utilities/c.png";
import cppLogo from "../assets/utilities/c++.png";
import dartLogo from "../assets/utilities/dart.png";
import javaLogo from "../assets/utilities/java.png";
import jsLogo from "../assets/utilities/js.png";
import photoshopLogo from "../assets/utilities/photoshop.png";
import premierLogo from "../assets/utilities/premier.png";
import pythonLogo from "../assets/utilities/python.png";
import illustratorLogo from "../assets/utilities/Illustrator.png";
import ndmuLogo from "../assets/utilities/NDMU.avif";
import lakbayImg from "../assets/projects/lakbaymarista.png";
import customerImg from "../assets/projects/customersegmentation.png";
import no404 from "../assets/projects/404.png";

const logos = [
  animateLogo,
  cLogo,
  cppLogo,
  dartLogo,
  javaLogo,
  jsLogo,
  photoshopLogo,
  premierLogo,
  pythonLogo,
  illustratorLogo,
];

const timeline = {
  education: [
    {
      school: "Notre Dame of Marbel University (NDMU)",
      degree: "Computer Science (Degree Holder)",
      start: "2021",
      graduated: "2025",
      description:
        "Completed a rigorous curriculum in algorithms, data structures, and software engineering.",
      logo: [ndmuLogo],
      certificate: "",
      modal: "",
    },
  ],
  experience: [
    {
      title: "Full-Stack Engineer Internship",
      company: "EULAP",
      start: "June 2024",
      end: "August 2024",
      description:
        "Developed responsive, cross-platform applications using PHP, MySQL, SQLite, HTML, CSS, and Electron, delivering seamless experiences across devices. Built offline-first applications with cloud synchronization, improving data availability and reliability across environments. Participated in the full software development life cycle, from gathering requirements and designing systems to coding, testing, deployment, and maintenance, while following Agile methodologies and collaborating in sprints with remote teams. Wrote unit, integration, and functional tests to ensure high-quality deliverables, optimized application performance, and implemented best practices in security, data integrity, and UI/UX design. Contributed to team growth by mentoring junior developers and conducting code reviews, fostering knowledge sharing and continuous improvement.",
      logo: [],
      certificate: "",
      modal: "",
      display: true,
    },
    {
      title: "Graphic Designer",
      company: "Freelance / Personal Projects",
      start: "2016",
      end: "Present",
      description:
        "Created visually compelling designs for digital and print platforms, including logos, marketing materials, social media graphics, brochures, websites, and app interfaces, ensuring consistent brand identity. Collaborated closely with clients and cross-functional teams to translate project requirements into creative concepts that engage users and elevate brand presence. Utilized Adobe Creative Suite and Figma to produce high-quality visuals, wireframes, and prototypes while applying responsive design principles for seamless experiences across devices. Led UI/UX design initiatives, conducted research, and developed user-centric interfaces that enhanced usability and engagement. Managed multiple projects under tight deadlines, contributed to marketing campaigns, and mentored junior designers, fostering a culture of creativity, innovation, and continuous learning.",
      logo: [],
      certificate: "",
      modal: "",
      display: true,
    },
    {
      title: "2D Assets Designer",
      company: "Freelance / Roblox Projects",
      start: "2016",
      end: "2020",
      description:
        "Created UI icons, marketing banners, and 2D sprites for web projects and Roblox games.",
      logo: [animateLogo],
      certificate: "",
      modal: "",
      display: false,
    },
    {
      title: "IT Technician",
      company: "Local IT Services",
      start: "2020",
      end: "Present",
      description:
        "Assembled custom PCs, managed networks, troubleshooted hardware/software issues, and provided end-user support.",
      logo: [],
      certificate: "",
      modal: "",
      display: false,
    },
    {
      title: "PC Builder",
      company: "Freelance / Personal Builds",
      start: "2020",
      end: "Present",
      description:
        "Built performance desktop rigs from the ground up, selecting optimal components and ensuring system stability.",
      logo: [],
      certificate: "",
      modal: "",
      display: false,
    },
  ],
};

const projects = [
  {
    type: "Web Development",
    title: "Lakbay Marista",
    description:
      "Lakbay Marista is your one‑stop digital travel guide to the most captivating sights around the Mindanao region. From the serene shores of Lake Holon and the thundering cascades of Seven Falls, to hidden cultural monuments and family‑friendly resorts, Lakbay Marista curates each destination with beautiful photography, authentic local insights, and real traveler ratings. Use our intuitive filters—Popular, Featured, New, or All—to quickly discover the perfect spot for your next adventure, then dive into detailed location info and reviews so you can plan your trip with confidence. Whether you’re a weekend wanderer or an off‑the‑beaten‑path explorer, Lakbay Marista brings the best of South Cotabato province right to your fingertips.",
    url: {
      github: "https://github.com/benajtil/lakbaymarista-tourist",
      live: "https://lakbaymarista.online",
    },
    image: lakbayImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "MySQL"],

    live: true,
  },
  {
    type: "Web Development",
    title: "Customer Segmentation",
    description:
      "Developed as part of our Thesis at Notre Dame of Marbel University, this PHP‑powered web application delivers a comprehensive, responsive admin dashboard that lets you drill into every table and record—customers, orders, products, users—and filter, sort, search, or export on demand; it also displays real‑time site metrics such as total customers, sales, and active sessions, while providing full user administration to create, edit, or revoke access for any number of admin or staff accounts. Beyond the LAMP‑stack front end, the repository includes a Python module built on pandas and scikit‑learn that preprocesses raw transaction data and applies the DBSCAN algorithm—using both RFM and LRFMP feature sets—to uncover natural customer clusters, which can then be visualized or fed back into the PHP dashboard for targeted marketing campaigns. Although the system has been discontinued following our successful thesis defense, it remains a complete full‑stack illustration of how to integrate a classic PHP/MySQL dashboard with a modern data‑science backend for real‑world customer‑segmentation workflows.",
    url: {
      github:
        "https://github.com/benajtil/Customer-Segmentation-in-Online-Retail-using-DBSCANS.git",
      live: "",
    },
    image: customerImg,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "MySQL"],

    live: false,
  },
  {
    type: "Web Development",
    title: "Tabulation System",
    description:
      "The Tnalak Festival Tabulation System is a PHP‑based web application designed to manage and score entries in both the Float Competition and Civic Competition. It supports local data storage via SQLite for offline use and central synchronization with MySQL for permanent record‑keeping. Administrators can log in to manage contestants, judges, and scoring criteria, then generate printed score sheets and final ranking reports.",
    url: {
      github: "https://github.com/benajtil/tnalak-admin.git",
      live: "",
    },
    image: no404,
    languages: ["PHP", "HTML", "CSS", "JAVASCRIPT", "SQLite", "MySQL"],

    live: false,
  },
];
export {
  person,
  scope,
  tagline,
  typedTitle,
  info,
  navLink,
  about,
  logos,
  timeline,
  projects,
};
