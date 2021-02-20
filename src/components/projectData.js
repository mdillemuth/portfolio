export const projectData = [
  {
    id: 0,
    projectId: 'myFightFlix-app',
    title: 'myFightFlix',
    imgSrc: {
      img1: '/img/myFightFlix-1.png',
      img2: '/img/myFightFlix-2.png',
      img3: '/img/myFightFlix-3.png',
      demo: '/img/myFightFlix-demo.gif',
    },
    categories: {
      primary: 'Full-Stack / MERN / Bootstrap',
      secondary: 'Node.js / Express.js / React / Redux',
    },
    links: {
      github: 'https://github.com/mdillemuth/fightFlix-client',
      demo: '',
      website: 'https://my-fight-flix.netlify.app/',
      caseStudy: null,
    },
    description:
      'This project required me to build a full-stack app using MongoDB, Express.js, React, and Node.js (MERN stack). I implemented Redux to simplify managing app state and data flow in order to maintain a clean code base.',
    background:
      'myFightFlix is a web app that provides users with access to information about movies, directors, and genres. Users can create an account, update their personal data, and curate a list of their favorite movies. The server is built with Node.js and Express.js and uses a RESTful API. The backend is hosted with Heroku and uses JWT based authentication with the help of passport.js. The frontend is built in React and uses Redux state management.',
  },

  {
    id: 1,
    projectId: 'meet-app',
    title: 'Meet App',
    imgSrc: {
      img1: '/img/meet-1.png',
      img2: '/img/meet-2.png',
      img3: '/img/meet-3.png',
      demo: '/img/meet-app-demo.gif',
    },
    categories: {
      primary: 'Serverless / Progressive Web App / Data Visualization',
      secondary: 'React / AWS / Test-Driven Development',
    },
    links: {
      github: 'https://github.com/mdillemuth/meet-app',
      demo: '',
      website: 'https://mdillemuth.github.io/meet-app/',
      caseStudy: null,
    },
    description:
      'I integrated the Google Calendar API into a serverless progressive web app (PWA) built with React that authenticates users via Google OAuth2 authentication flow. This project required me to follow a test-driven development (TDD) approach.',
    background:
      'This project uses AWS as an authorization server and allows users to access the app with the Google account via OAuth2 authentication flow. The server itself is a serverless function hosted by the cloud provider, AWS. The app is useable offline and passes the Lighthouse PWA checklist. By following a test-driven development approach, tests were written before features were developed and the test suites incorporate unit-testing, integration testing, as well as end-to-end testing.',
  },

  {
    id: 2,
    projectId: 'chat-app',
    title: 'Chat App',
    imgSrc: {
      img1: '/img/chat-1.png',
      img2: '/img/chat-2.png',
      img3: '/img/chat-3.png',
      demo: '/img/chat-app-demo.gif',
    },
    categories: {
      primary: 'Mobile Application / Google Firestore Database',
      secondary: 'React Native / Expo / Android Studio',
    },
    links: {
      github: 'https://github.com/mdillemuth/chat-app',
      demo: '',
      website: null,
      caseStudy: null,
    },
    description:
      'I implemented React Native along with Expo and Google Firestore to create a mobile chat application. Users are able exchange messages, images, and their location with help of the GiftedChat library.',
    background:
      'This app is developed for mobile devices and required the use of Expo.io. I used Android Studio in order to view the app on an Android Virtual Device to manually view and test the app during development. This project required me to adhere to a design and style guide with provided assets. The app authenticates users anonymously via Google Firebase authentication and chat conversations are stored in the Google Firestore Database as well as locally. As such, offline users are able to access the app and view previous conversations.',
  },

  {
    id: 3,
    projectId: 'pokedex-app',
    title: 'Pokedex App',
    imgSrc: {
      img1: '/img/pokedex-1.png',
      img2: '/img/pokedex-2.png',
      img3: '/img/pokedex-3.png',
      demo: '/img/pokedex-demo.gif',
    },
    categories: {
      primary: 'Web App / External API  / Fetch / AJAX',
      secondary: 'HTML / CSS / JavaScript / jQuery / Bootstrap',
    },
    links: {
      github: 'https://github.com/mdillemuth/pokedex-app',
      demo: '',
      website: 'https://mdillemuth.github.io/pokedex-app/',
      caseStudy: null,
    },
    description:
      'This project was developed as a front-end client for an external public API that provides data about Pokemon. I used HTML, CSS, along with object-oriented JavaScript and jQuery in order to create a streamlined user interface with Bootstrap.',
    background:
      'A small web application that enables users to search for their favorite pokemon. Data is loaded via the Fetch API from an external API. The app uses a variety of frontend features including modals, accordions, card components, and a contact form with client-side validation. I used a combination of my UI design knowledge as well as Bootstrap to create a simple and elegant design for the project.',
  },
];
