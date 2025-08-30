let projects = [{
    imageSrc: "./assets/images/ez-access-tool-logo.png",
    projectTitle: "EZ Access Tool",
    description: `•  Developed and designed the EZ Access Tool, a centralized platform that streamlines developer workflows by organizing AWS URLs and application links in one place. This tool improves productivity, simplifies onboarding for new team members, and provides quick access to essential resources for tech leads and solution architects.`,
    link: {
    //     "GitHub": "https://vinayakrevankar.com/ez-access-tool"
        "Website": "https://vinayakrevankar.com/ez-access-tool"
    }
},
  {
    imageSrc: "./assets/images/syllablast_puzzle.png",
    projectTitle: "Syllablast Puzzle",
    description: `•  Developed an interactive syllable puzzle game using Next.js, React, and GitHub Actions, featuring dynamic configurations that allow users to select different game setups, enhancing replayability and engagement.
    <br> •  Implemented real-time score tracking and user-friendly interfaces, enabling players to swap syllables and complete words while providing instant feedback and rewarding animations upon puzzle completion.`,
    link: {
        "GitHub": "https://github.com/Vinayakrevankar/syllablast-game"
    }
  },
  {
    imageSrc: "./assets/images/gitlibrary_logo.webp",
    projectTitle: "GIT Library",
    description: "Users can seamlessly manage their borrowed books through our system, which includes features such as checking issued books, monitoring late fees, and renewing books as needed. With our integrated Paytm payment gateway, users can conveniently settle any fines incurred, ensuring a hassle-free experience.",
    // link: {
    //     "Play_Store": "https://play.google.com/store/apps/details?id=com.gitbelgaum.gitlibrary.gitlibrary&amp;hl=en_US"
    // }
}, {
    imageSrc: "./assets/images/kohaopac_logo.webp",
    projectTitle: "Koha-Opac",
    description: `Developed a global library application enabling librarians to register colleges
                                and generate unique library codes, which users utilize alongside their username
                                and password for authentication. Users can then access features such as checking
                                issued books and viewing late fee amounts.`,
    // link: {
    //     "Play_Store": "https://play.google.com/store/apps/details?id=com.lisacademy.org.kohaopac&hl=en_US"
    // }
},
{
    imageSrc: "./assets/images/giftWise_logo.png",
    projectTitle: "GiftWise.",
    description: `Gift Card Management System simplifies gift card purchases, rewards users with
                                each transaction, and enables easy account management. Customers can buy cards
                                online, earn rewards, and enjoy discounts. The admin portal tracks balances,
                                transactions, and rewards, while offering exclusive discounts. Automated email
                                updates ensure seamless purchase confirmation.`,
    link: {
        "GitHub": "https://github.com/Vinayakrevankar/GiftCardManagementSystem"
    }
},
{
    imageSrc: "./assets/images/awaitero_logo.png",
    projectTitle: "Awaitero",
    description: `Awaitero's cutting-edge digital menu, ordering, and billing software. Say goodbye to traditional menus and embrace our QR-based system for maximum customer safety. Enable seamless dine-in ordering by simply scanning a QR code at the restaurant.`,
    link: {
        "GitHub": "https://github.com/Vinayakrevankar/Awaitero"
    }
},

]
let d1 = new Date('2019-04-15')  // start datte
let d2 = new Date('2023-12-29')
let res = monthDiff(d1, d2);
let flags = {
  applyTheme: true,
}
function calculateExperience(companiesData) {
  let totalMonths = 0;

  companiesData.forEach(company => {
    company.details.forEach(detail => {
      let start = new Date(detail.startDate.split('/').reverse().join('-'));
      let end = detail.endDate === "PRESENT" ? new Date() : new Date(detail.endDate);

      let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += months;
    });
  });

  // Round the total months to the nearest half year
  let years = totalMonths / 12;
  let roundedYears = Math.round(years * 2) / 2;  // Round to the nearest 0.5 years

  return roundedYears.toFixed(1); // Convert to string with 1 decimal place
}
const CV = {
    "aboutMe": aboutMe,
    "companies": [
      {
        "name": "Skillz Platform Inc.",
        "address": "Las Vegas, NV, United States",
        "details": [{
            "role": "Software Engineer",
            "duration": "JAN-2025 — PRESENT",
            "startDate": "2025-01-13",
            "endDate": "PRESENT",
        }],
        "themeClass": { "text": "skillzGradient-text" },
        "website": "https://www.skillz.com/"
    },
      {
        "name": "Worcester Polytechnic Institute",
        "address": "Worcester, MA, United States",
        "details": [{
            "role": "Web Developer",
            "duration": "SEP-2024 — JAN-2025",
            "startDate": "2024-09-30",
            "endDate": "2025-01-10",
        }
        ],
        "themeClass": { "text": "wpi-text" },
        "website": "https://www.wpi.edu/"

    },
        {
            "name": "Capgemini Technology Services India Limited", 
            "address": "Bangalore, KA, India",
            "details": [{
                "role": "Consultant - Software Engineer Lead",
                "duration": "AUG-2021 — DEC-2023",
                "startDate": "2021-08-20",
                "endDate": "2023-12-29",
//                 "description": `Part of the middleware development team for design and development of API for food restaurant for five modules using NodeJS, serverless frameworks, and AWS. Developed a tool for internal use that helped the developers navigate to AWS services easily.
// • Developed REST APIs, conducted unit testing to validate unit-level functionalities, and thoroughly documented code,
//  APIs, and technical specifications to ensure clarity and facilitate future maintenance and enhancements. <br>
// • Engaged with stakeholders and architects, collaborating closely with them throughout the project lifecycle. <br>
// • Identified and reported opportunities to improve the efficiency and quality of the product. <br>
// • Managed a team of 10 developers and 4 testers, and mentored 10 junior developers, fostering collaboration, ensuring accountability, and providing clear direction to achieve project goals efficiently. <br>
// • Participated in regular production deployment calls to ensure smooth and efficient deployment of software updates. <br>
// • Collaborated with cross-functional teams to ensure consensus on release and acceptance criteria for new features and to address any deployment issues, minimizing disruption to user experience. <br>
// • Followed coding standards, best practices, and design patterns for Node.js development to maintain code consistency, readability, and maintainability, while also adhering to secure coding principles to enhance application security. <br>
// • Successfully led and delivered two critical large-scale projects, achieving a defect rate of less than 5%. <br>
// • Developed an internal tool to streamline access to AWS resources, simplifying developers' navigation directly from the tool, which significantly benefited both developers and architects. <br>
// • Optimized service performance by refactoring code, implementing a caching mechanism, and adjusting Lambda configurations, reducing response time from 12 seconds to 5 seconds. <br>
// `

            }
            ],
            "themeClass": { "text": "capgemini-text" },
            "website": "https://www.capgemini.com/in-en/"
        },
        {
            "name": "Neviton Softech Private Limited",
            "address": "Bangalore, KA, India",
            "details": [
                {
                    "role": "Associate Software Engineer",
                    "duration": "APR-2019 — JUL-2021",
                    "startDate": "2019-04-15",
                    "endDate": "2021-07-30",
//                     "description": `Part of the Advanced Product & Quality Planning development team to design & develop an integrated software solution for the Aircraft Manufacturing Industry using Node.JS and other technologies. I contributed to 3 of the 5 project modules. <br>
// • Developed, and maintained RESTful APIs with Node.js and Express.js, ensuring seamless communication between front-end and back-end systems.<br>
// • Implemented MySQL databases with optimized queries for efficient data storage and retrieval, prioritizing system performance and data integrity.<br>
// • Collaborated closely with front-end developers to integrate back-end functionality, ensuring a cohesive user experience across the application.<br>
// • Identified and resolved technical issues and performance bottlenecks through thorough troubleshooting and debugging, ensuring smooth operation under high-load conditions.<br>
// • Implemented robust security measures to safeguard application data and functionality, prioritizing user privacy and system integrity. <br>
// `
                }
//                 {
//                     "role": "Intern",
//                     "duration": "15-APR-2019 — 31-MAY-2019",
// //                     "description": `• Worked on front-end technologies (HTML, CSS, JavaScript) to create dynamic user interfaces, combined with server-side Node.js expertise for building highly scalable web applications.<br>
// // • Experienced in database management (MySQL, SQL Server) for efficient data handling in projects.<br>
// // • Learned version control tools such as Git and GitHub, enabling seamless collaboration and efficient change tracking in coding projects.<br>
// // • Familiar with Agile methodologies, contributing to iterative development, sprint planning, and a collaborative work environment.<br>
// // `
//                 }
            ],
            "themeClass": { "text": "neviton-text" },
            "website": "https://www.neviton.com/"
        }
    ],
    "skills": [
  {
    type: 'Languages',
    list: ' JavaScript, TypeScript, Python, Java, C#, PHP, C'
  },
  {
    type: 'Tools',
    list: ' VS Code, Postman, JIRA, Lucid Chart, SonarQube, Dynatrace, Swagger, Azure DevOps, Git, GitHub, Docker, Xcode, and NPM'
  },
  {
    type: 'AWS Services',
    list: ' AWS Lambda, API Gateway, CloudWatch, DynamoDB, SQS, S3, SNS, and SSM.'
  },
  {
    type: 'Frameworks',
    list: ' ES6, jQuery, Bootstrap, ExpressJS, Mocha, Chai, Android SDK, GraphQL, Angular and ReactJS'
  },
  {
    type: 'Databases',
    list: ' MySQL, Microsoft SQL Server, PostgreSQL, NoSQL.'
  },
  {
    type: 'Methodologies',
    list: ' Test-Driven Development, Agile, Scrum, Continuous Integration, Continuous Deployment.'
  },
  {
    type: 'Interpersonal',
    list: ' Collaborative, Critical Thinking, Problem-solving, Decision making, Time management, Accountability, Attention to detail, Feedback Receptivity, Customer focus'
  }
]
}

// ${calculateExperience(CV.companies)}
aboutMe = `Meticulous and action-oriented developer with nearly <b>6<\/b> years of experience in software development. With a solid background in programming, software architecture, and project management, I have the ability to lead teams to create and maintain innovative, reliable, and scalable software applications. My technical expertise includes proficiency in various programming languages and development frameworks. In addition to my technical skills, I excel in taking ownership of projects, effective communication, and leadership.`
CV.aboutMe = aboutMe
