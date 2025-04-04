export const USER_INFO = {
  name: "Ranjan",
  fullName: "Ranjan Adhikari",
  tagline: "I am only after all.",
  intro: "I share my adventures, photography, and stories from around the world. Join me as I explore new places and create unforgettable memories.",
  profileImage: "https://ranjan.fyi/355657861_116374001493449_6314419675551890923_n.jpeg",
  location: "Kathmandu, Nepal",
  email: "adh.ranjan@gmail.com",
  aboutParagraph1: "With 6+ years in software development, I specialize in backend technologies like Node.js and NestJS, always striving for efficient, scalable solutions.",
  aboutParagraph2: "Traveling fuels my creativity, offering fresh perspectives and inspiring both my personal growth and professional work.",
  aboutParagraph3: "When I'm not coding or traveling, I enjoy diving into computer games, exploring new worlds, and sharpening my strategic thinking.",
  interests: ["Travel", "Photography", "Coding", "I Go to gym"],
  stats: {
    Alawys: "😀",
    "Resolving the merge Conflict": "🤬",
    Likes: "🤬",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100070361946323",
    github: "https://github.com/adhranjan",
    instagram: "https://www.instagram.com/adh.ranjan/",
    linkedin: "https://www.linkedin.com/in/adh-ranjan/"
  }
};

export const APPS = [
  {
    id: "about",
    name: "About Me",
    icon: "User",
    color: "#4285F4", // Google Blue
    description: "Learn about who I am and what I do"
  },
  {
    id: "gallery",
    name: "Gallery",
    icon: "Image",
    color: "#EA4335", // Google Red
    description: "Browse through my travel photos"
  },
  {
    id: "map",
    name: "Travel Map",
    icon: "Map",
    color: "#FBBC05", // Google Yellow
    description: "See the places I've visited"
  },
  {
    id: "git",
    name: "Git",
    icon: "GitBranch",
    color: "#333333", // Git dark gray
    description: "Work experience timeline"
  },
  {
    id: "social",
    name: "Connect",
    icon: "Share2",
    color: "#34A853", // Google Green
    description: "Find me on social media"
  },
  {
    id: "resume",
    name: "Resume",
    icon: "FileText",
    color: "#9C27B0", // Purple
    description: "View my professional experience"
  },
  {
    id: "contact",
    name: "Contact",
    icon: "Mail",
    color: "#FF5722", // Deep Orange
    description: "Get in touch with me"
  },
  {
    id: "youtube",
    name: "Youtube",
    icon: "Youtube",
    color: "#FF0000", // Deep Orange
    description: "Get in touch with me"
  }
];

export const GALLERY_ITEMS = [
  {
    image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    id: 1,
    title: "Aquarium",
    location: "Planted Tanks",
    category: "Hobby",
    description: "A serene collection of planted aquariums where nature thrives underwater — each tank a living canvas of green, flowing life, and tranquil beauty.",
    images: [
      {
        id: "aquarium-1",
        url: "https://ranjan.fyi/20240222_105558.jpg",
        caption: "Nature’s tranquility, right in my room 🌿🐠 #PlantedTank #AquascapeVibes"
      },
      {
        id: "aquarium-2",
        url: "https://ranjan.fyi/20231226_135345.jpg",
        caption: "Little jungle, big peace. My underwater garden in full bloom 🌱🌊 #AquariumLife #GreenAquascape"
      },
      {
        id: "aquarium-3",
        url: "https://ranjan.fyi/20240222_105657.jpg",
        caption: "Where art meets nature — my planted paradise beneath the surface 🍃✨ #AquariumGoals #PlantedAquarium"
      }
    ],
    thumbnailIndex: 2 // Use the first image as the thumbnail
  },
  {
    image:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    id: 2,
    title: "Mirror Selfie",
    location: "Kathmandu/Bangalore",
    category: "Selfie",
    description: "Double tap for each reflection 🔥",
    images: [
      {
        id: "mirror-selfie-1",
        url: "https://ranjan.fyi/20240417_181258.jpg",
        caption: "Just making sure the mirror gets all my angles 😉🪞🖤"
      },
      {
        id: "mirror-selfie-2",
        url: "https://ranjan.fyi/IMG_20190525_091616.jpg",
        caption: "Same mirror, different energy ⚡🪞"
      },
      {
        id: "mirror-selfie-3",
        url: "https://ranjan.fyi/IMG_20220101_125511.jpg",
        caption: "1 main character 💫"
      },
      {
        id: "mirror-selfie-3",
        url: "https://ranjan.fyi/IMG_20190626_202209.jpg",
        caption: "Stacked up selfies, because why not? 😏"
      }

      
    ],
    thumbnailIndex: 0
  },
  {
    image:"https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    id: 3,
    title: "Chess",
    location: "Kapan",
    category: "Hobby",
    description: "Checkmate!!",
    images: [
      {
        id: "chess-1",
        url: "https://ranjan.fyi/476230623_122132624078480136_8518461814049588463_n.jpg",
        caption: "Every move tells a story — welcome to the chess battlefield"
      },
      {
        id: "chess-2",
        url: "https://ranjan.fyi/476518880_122132623754480136_1480272086601892882_n.jpg",
        caption: "In chess, patience is as important as strategy"
      },
      {
        id: "chess-3",
        url: "https://ranjan.fyi/476627697_122132624222480136_5927713724276113555_n.jpg",
        caption: "A game of kings, a battle of minds"
      },
      {
        id: "chess-4",
        url: "https://ranjan.fyi/Screenshot_20240619_132348_Chess.jpg",
        caption: "Smothered Checkmate: When the endgame is both silent and deadly."
      }

    ],
    thumbnailIndex: 3
  }
];

export const WORK_HISTORY = [
  {
    id: "job-1",
    role: "Software Development Engineer",
    company: "BookMyShow South East Asia",
    period: "April 2021 - Present",
    branch: "main",
    type: "job",
    commitDate: "2021-04-01",
    achievements: [
      "Collaborated closely with the product team to gather requirements, ensuring alignment with business objectives and user needs.",
      "Implemented E-ticketing systems and performed data migration, ensuring a seamless transition between existing and new data structure.",
      "Optimized software performance, improving overall system efficiency across multiple services.",
      "Maintained and refactored codebases across microservices, ensuring scalability and maintainability of the system.",
      "Led countless hotfixes, ensuring quick resolution of critical issues during high-demand periods, always ready to assist in keeping the system operational.",
      "Collaborated with the SKIDATA team to lead the integration process, facilitating smooth ticket synchronization to Access Control Systems (ACS).",
      "Improved large seat SVG publishing across the inventory for better visual seat selection.",
      "Served as Scrum Master for effective team coordination."
    ]
  },
  {
    id: "job-2",
    role: "Software Consultant",
    company: "ASZ Technologies",
    period: "November 2019 - March 2021",
    branch: "asz-dev",
    type: "job",
    commitDate: "2019-11-01",
    achievements: [
      "Developed a module that allowed users to watch online streaming sessions, restricting access from multiple screens.",
      "Planned and built a suppressible E-ticket module enabling users to access tickets via the website.",
      "Coordinated with the product owner on development timelines and project scope."
    ]
  },
  {
    id: "job-3",
    role: "Backend Developer",
    company: "Leaf Innovation Pvt. Ltd",
    period: "May 2019 - November 2019",
    branch: "leaf-dev",
    type: "job",
    commitDate: "2019-05-01",
    achievements: [
      "Developed a product that provides operation managers on demand.",
      "Created a search algorithm to find the best available rangers.",
      "Designed a notification module to send alerts to admins and rangers.",
      "Worked on architectural design to enhance system efficiency."
    ]
  },
  {
    id: "job-4",
    role: "Intern",
    company: "Zibtek",
    period: "January 2019 - April 2019",
    branch: "intern",
    type: "job",
    commitDate: "2019-01-01",
    achievements: [
      "Participated in developing a sales product.",
      "Assisted in sprint planning activities to ensure timely delivery of project milestones."
    ]
  },
  {
    id: "job-5",
    role: "Junior Software Developer",
    company: "Proactive Web Developers",
    period: "July 2016 - December 2018",
    branch: "proactive-dev",
    type: "job",
    commitDate: "2016-07-01",
    achievements: [
      "Developed web applications for monitoring projects of the House Building Unit, Government of Nepal.",
      "Developed frontend features using jQuery and Vue.js for various client-side functionalities.",
      "Created APIs for Android applications (Deaf Nepal NSL Learning).",
      "Designed databases and developed backend systems for the Ministry of Home Affairs website.",
      "Developed reporting systems for earthquake reconstruction (Central Level Project Implementation Unit, Grant Management, and Local Infrastructure)."
    ]
  }
];

export const EDUCATION_HISTORY = [
  {
    id: "edu-1",
    degree: "Master of Computer Applications",
    institution: "VTU, Bangalore",
    period: "2017 - 2019",
    branch: "education",
    type: "education",
    commitDate: "2017-01-01"
  },
  {
    id: "edu-2",
    degree: "Bachelor of Computer Information Systems",
    institution: "Pokhara University, Apex College",
    period: "2011 - 2016",
    branch: "education",
    type: "education",
    commitDate: "2011-01-01"
  }
];


export const YOUTUBE_VIDEOS = [
    "https://www.youtube.com/embed/G7A0Dzz6o6Y?si=ZPkZoYqzc3_0vqnv",
    "https://www.youtube.com/embed/oKoFYpFUnO8?si=Gh1JmRaJaEMi14g7"
]


export const PLACES_I_WENT = [
  {
    id: 1,
    location: "Dubai",
    category:"Rich people "
  },
  {
    id: 2,
    location: "India",
    category:"Different people, different vibe. "
  },
  {
    id: 3,
    location: "Singapore",
    category:"I like the hot air."
  }
];
