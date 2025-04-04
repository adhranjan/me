export const USER_INFO = {
  name: "Ranjan",
  fullName: "Ranjan Adhikari",
  tagline: "Traveler • Photographer • Story Teller",
  intro: "I share my adventures, photography, and stories from around the world. Join me as I explore new places and create unforgettable memories.",
  profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  location: "San Francisco, CA",
  email: "adh.ranjan@gmail.com",
  aboutParagraph1: "Hello! I'm a passionate traveler and photographer based in San Francisco, California. For the past 5 years, I've been documenting my journeys across 30+ countries, capturing moments and sharing stories that inspire others to explore the world.",
  aboutParagraph2: "When I'm not traveling, I work as a freelance photographer and content creator. My work has been featured in several travel magazines and blogs. I believe in sustainable travel and always try to leave a positive impact on the places I visit.",
  aboutParagraph3: "Through this website, I share my experiences, photography tips, and travel guides to help fellow travelers plan their adventures. Feel free to reach out if you have questions or just want to connect!",
  interests: ["Travel", "Photography", "Hiking", "Cooking"],
  stats: {
    countries: "30+",
    cities: "120+",
    photos: "10k+",
    years: "5+"
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100070361946323",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://www.linkedin.com/in/ranjan-adhikari/"
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
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Dubai",
    location: "Dubai, UAE",
    category: "Asia",
    description: "A modern metropolis in the United Arab Emirates",
    images: [
      {
        id: "dubai-1",
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Burj Khalifa - The tallest building in the world"
      },
      {
        id: "dubai-2",
        url: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Palm Jumeirah - Artificial archipelago"
      },
      {
        id: "dubai-3",
        url: "https://images.unsplash.com/photo-1582672752793-08d00be4b394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Dubai Marina - Artificial canal city"
      }
    ],
    thumbnailIndex: 0 // Use the first image as the thumbnail
  },
  {
    id: 2,
    title: "Singapore",
    location: "Singapore",
    category: "Asia",
    description: "A sovereign island city-state in Southeast Asia",
    images: [
      {
        id: "singapore-1",
        url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Marina Bay Sands - Iconic integrated resort"
      },
      {
        id: "singapore-2",
        url: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Gardens by the Bay - Nature park in central Singapore"
      },
      {
        id: "singapore-3",
        url: "https://images.unsplash.com/photo-1566460414244-8918c41689de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Singapore Skyline - Financial district view"
      }
    ],
    thumbnailIndex: 0
  },
  {
    id: 3,
    title: "India",
    location: "Agra, India",
    category: "Asia",
    description: "Home to one of the seven wonders of the world",
    images: [
      {
        id: "india-1",
        url: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Taj Mahal - Iconic ivory-white marble mausoleum"
      },
      {
        id: "india-2",
        url: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Hawa Mahal - Palace of Winds in Jaipur"
      },
      {
        id: "india-3",
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        caption: "Golden Temple - Sacred Sikh gurdwara in Amritsar"
      }
    ],
    thumbnailIndex: 0
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
