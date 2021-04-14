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
      primary: 'Full-Stack / MERN / MEAN',
      secondary: 'Node.js / Express.js / React / Angular',
    },
    links: {
      github: 'https://github.com/mdillemuth/fightFlix-client',
      website: 'https://my-fight-flix.netlify.app/',
      websiteAlt:
        'https://mdillemuth.github.io/myFightFlix-angular-client/welcome/',
      caseStudy: 'https://mdillemuth.github.io/myFightFlix-case-study/',
    },
    description:
      'A full-stack web app that allows users to create an account and create a list of their favorites movies. RESTful backend server with Node and Express. Front end clients in React and Angular.',
    background:
      'myFightFlix is a web app that provides users with access to information about movies, directors, and genres. Users can create an account, update their personal data, and curate a list of their favorite movies. The server is built with Node.js and Express.js and uses a RESTful API. The backend is hosted with Heroku and uses JWT based authentication with the help of passport.js. There are two front end clients, one built in React and another in Angular.',
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
      website: 'https://mdillemuth.github.io/meet-app/',
      caseStudy: null,
    },
    description:
      'A serveless progressive web app that allows users to view upcoming events from an integrated Google Calendar. Users are able to sign in with their Google account and access the app offline',
    background:
      'I decided to follow a test-driven development approach with this app and created test suites that included unit-testing, integration-testing, and end-to-end testing. I chose to use AWS as an authorization server and implement a serverless architecture. Google OAuth 2.0 is used to access the calendar API. The app passes Lighthouse PWA checklist and users are able to install the app on their browser or mobile home screen. I added data visualization to provide users with an easily readable representation of the frequency of the type and location of calendar events.',
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
      website: null,
      caseStudy: null,
    },
    description:
      'I implemented React Native along with Expo and Google Firestore to create a mobile chat application. Users are able exchange messages, images, and their location with help of the GiftedChat library.',
    background:
      'This app is developed for mobile devices and required the use of Expo.io. during its construction. I used Android Studio in order to view the app on an Android Virtual Device to manually view and test the app. I implemented handed off design assets and followed a pre-decided styling guide from the project stakeholders. The app authenticates users anonymously via Google Firebase authentication and users are able to access the app while offline. Users are able to send their location or images from their mobile device.',
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
      website: 'https://mdillemuth.github.io/pokedex-app/',
      caseStudy: null,
    },
    description:
      'This app was developed as a front-end client for an external public API that provides data about Pokemon. I used HTML, CSS, along with object-oriented JavaScript and jQuery in order to create a streamlined user interface with Bootstrap.',
    background:
      'A small web application that enables users to search for their favorite pokemon. Data is loaded via the Fetch API from an external API. The app uses a variety of frontend features including modals, accordions, card components, and a contact form with client-side validation. I used a combination of my UI design knowledge as well as Bootstrap to create a simple and elegant design for users.',
  },
]
