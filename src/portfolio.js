//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Fatima>";

// Main Page
export const main = {
  name: "Fatima Deshmukh",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/drive/folders/1To2c_ph7jxeMmqO98iC18mY8DGPvE5BF?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://avatars.githubusercontent.com/u/96168561?v=4",
  p1: "Hey, My name is Fatima Deshmukh. I have completed my Bachelor of Management Studies from B.K. Birla college of Science,Arts and Commerce.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
 
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML, CSS, JS, React",
    // "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    // {
    //   name: "Postman",
    //   iconifyClassName: "logos:postman-icon",
    //   id: "9",
    // },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Expedia Clone",
    desc: `Expedia is an online travel agency.The website and mobile app can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages. `,
    feature: `Landing page,
explore various booking options,
single page navigation.`,
    tech: `Tech Stack: HTML | CSS | JavaScript `,
    img: "https://miro.medium.com/max/700/1*Kx1Lkbb-JnLBwUIzXRkHLw.png",
    github: "https://github.com/daniyal4engg/expedia",
    link: "https://dazzling-pithivier-eb2792.netlify.app/"
  },
  {
    id: 2,
    title: "Homedepot Clone",
    desc: `The Home Depot, Inc. is a home improvement retailer.`,
    feature: `DIY page`,
    tech: `Tech Stack: HTML | CSS | JavaScript `,
    img: "https://camo.githubusercontent.com/1b371832676844f6e20de8a8df582dd6e6f261236ed363820461bc620fc9b4e2/68747470733a2f2f7777772e7265766965777378702e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f30352f486f6d652d4465706f742e6a7067",
    link: "https://trusting-leavitt-137a56.netlify.app/",
    github: "https://github.com/SakethReddy1111/HomeDepot",
},
  
//   {
//     id: 3,
//     title: "Reliance Retail Clone",
//     desc: `Reliance Retail is an informative website where users can get information about various brands of Reliance Industries.`,
//     feature: `Features:
// Sign-in/Sign-up, User Authentication,
// Integreted Hamleys shopping page,
// Sorting, filtering and debouncing based search bar,
// Carousel and slideshows,
// Add to cart & Check out.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript `,
//     img: "https://github.com/Shivam2101s/images/blob/main/reliance(1)%20-%20Copy.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Reliance-retails",
//     link: "https://relianceretailclone.netlify.app/",
//   },
//   {
//     id: 4,
//     title: "MakeMYHome",
//     desc: `A small React app to keep the details of the flats and their residents in a society.`,
//     feature: `User authentication using MongoDB,
//     Private Routing,
//     Filter and sorting.`,
//     tech: `Tech Stack: React | CSS | NodeJS | Exprees | MongoDB .`,
//     img: "https://github.com/Shivam2101s/images/blob/main/makeMyHouse1.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Apartment-Flat-Manager",
//     link:"https://apartment-flats-manager-shivam2101s.vercel.app"
//   },
//   {
//     id: 5,
//     title: "Eva Translate",
//     desc: `Eva Translate is a translating tool, users can translate text from one language to another and also hear its correct pronunciation.`,
//     feature: `Language translation,
//     Speech-to-text.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript .`,
//     img: "https://github.com/Shivam2101s/images/blob/main/eva%20translate.jpg?raw=true",
//     link: "https://evatranslate.netlify.app/",
//     github: "https://github.com/Shivam2101s/Eva-Translate",
//   },
//   {
//     id: 6,
//     title: "My Recipe App",
//     desc: `It's a food recipe app, users can search recipes of various dishes and also see the latest recipes as well as the recipe of the day.`,
//     feature: `Search recipe,
// Recipe of the day.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript`,
//     img: "https://github.com/Shivam2101s/images/blob/main/food%20app.jpg?raw=true",
//     link: "https://myfoodapp21.netlify.app/",
//     github: "https://github.com/Shivam2101s/Food-app",
//    },
];

// Social Media Links
export const links = [
 
  "https://www.linkedin.com/in/fatima-deshmukh-3b6259231/",
  "https://api.whatsapp.com/send/?phone=919930556766&text&app_absent=0",
  "mailto:fatimadeshmukh46@gmail.com",
 
  "https://github.com/Fatima2400",
];
