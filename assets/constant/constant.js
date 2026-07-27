let projects = [{
  imageSrc: "./assets/images/ez-access-tool-logo.png",
  projectTitle: "EZ Access Tool",
  description: `•  Developed and designed the EZ Access Tool, a centralized platform that streamlines developer workflows by organizing AWS URLs and application links in one place.  <br>
•  This tool improves productivity, simplifies onboarding for new team members, and provides quick access to essential resources for tech leads and solution architects.`,
  link: {
    //     "GitHub": "https://vinayakrevankar.com/ez-access-tool"
    "Live Demo": "https://vinayakrevankar.com/ez-access-tool"
  }
},
{
  imageSrc: "./assets/images/syllablast_puzzle.png",
  projectTitle: "Syllablast Puzzle",
  description: `•  Developed an interactive syllable puzzle game using Next.js, React, and GitHub Actions, featuring dynamic configurations that allow users to select different game setups, enhancing replayability and engagement.
    <br> •  Implemented real-time score tracking and user-friendly interfaces, enabling players to swap syllables and complete words while providing instant feedback and rewarding animations upon puzzle completion.`,
  link: {
    "GitHub": "https://github.com/Vinayakrevankar/syllablast-game",
    "Live Demo": "https://vinayakrevankar.com/syllablast-game/"
  }
},
{
  imageSrc: "./assets/images/gitlibrary_logo.webp",
  projectTitle: "GIT Library",
  description: `• Developed a mobile application using Android Studio, Java, and XML, allowing users to manage borrowed books, check issued books, monitor late fees, and renew books, achieving 10k+ downloads. <br>
• Designed and integrated a Paytm payment gateway using APIs for users to conveniently settle fines, enhancing user experience.<br>
• Conducted thorough testing and debugging using JUnit and Android Emulator to ensure the reliability and stability of the app across multiple platforms and devices.<br>
• Implemented a user-friendly interface with Java and XML for seamless access to library services via smartphones, improving overall convenience.
`,
  // link: {
  //     "Play_Store": "https://play.google.com/store/apps/details?id=com.gitbelgaum.gitlibrary.gitlibrary&amp;hl=en_US"
  // }
}, {
  imageSrc: "./assets/images/kohaopac_logo.webp",
  projectTitle: "Koha-Opac",
  description: `• Spearheaded development of Koha-OPAC, a global library management platform used by educational institutions worldwide. <br>
• Built a self-service registration flow for librarians to onboard their college and generate a unique library code. <br>
• Engineered secure authentication so students could log in with their library code, username, and password. <br>
• Let users check issued books, track late fees, and manage library transactions from a single dashboard.`,
  // link: {
  //     "Play_Store": "https://play.google.com/store/apps/details?id=com.lisacademy.org.kohaopac&hl=en_US"
  // }
},
{
  imageSrc: "./assets/images/giftWise_logo.png",
  projectTitle: "GiftWise.",
  description: `• Built a Gift Card Management System with a customer-facing storefront and an admin dashboard. <br>
• Let customers buy gift cards online, earn rewards on every transaction, and save cards as favorites for quick repurchase. <br>
• Developed an admin portal to track balances, transaction history, and rewards, surfacing exclusive offers to boost redemption. <br>
• Sent automated email confirmations for every purchase.`,
  link: {
    "GitHub": "https://github.com/Vinayakrevankar/GiftCardManagementSystem"
  }
},
{
  imageSrc: "./assets/images/awaitero_logo.png",
  projectTitle: "Awaitero",
  description: `• Built Awaitero, a QR-based digital menu, ordering, and billing platform for contactless dine-in service. <br>
• Handled incoming orders, table assignments, and bill generation/printing for restaurant staff. <br>
• Gave super admins tools to manage restaurant details and contracts. <br>
• Let customers view the total bill before confirming an order, with secure login and easy cart management.`,
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

  // Exact years to one decimal place, not rounded to the nearest half year
  let years = totalMonths / 12;
  return years.toFixed(1);
}
const CV = {
  "aboutMe": aboutMe,
  "companies": [
    {
      "name": "Skillz Platform Inc.",
      "address": "Las Vegas, NV, United States",
      "details": [{
        "role": "Associate Software Engineer, Fullstack",
        "duration": "JAN 2026 — PRESENT",
        "startDate": "2026-01-05",
        "endDate": "PRESENT",
      },
      {
        "role": "Software Engineer, Co-op",
        "duration": "JAN 2025 — DEC 2025",
        "startDate": "2025-01-13",
        "endDate": "2025-12-12",
      }
    ],
      "themeClass": { "text": "skillzGradient-text" },
      "website": "https://www.skillz.com/",
      "logo": "assets/images/company-logos/skillz.png"
    },
    {
      "name": "Worcester Polytechnic Institute",
      "address": "Worcester, MA, United States",
      "details": [{
        "role": "Web Developer",
        "duration": "SEP 2024 — JAN 2025",
        "startDate": "2024-09-30",
        "endDate": "2025-01-10",
      }
      ],
      "themeClass": { "text": "wpi-text" },
      "website": "https://www.wpi.edu/",
      "logo": "assets/images/company-logos/wpi.png"

    },
    {
      "name": "Capgemini Technology Services India Limited",
      "address": "Bangalore, KA, India",
      "details": [{
        "role": "Consultant - Software Engineer Lead",
        "duration": "APR 2022 — DEC 2023",
        "startDate": "2022-04-01",
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

      },{
        "role": "Associate Consultant",
        "duration": "AUG 2021 — MAR 2022",
        "startDate": "2021-08-20",
        "endDate": "2022-03-31",
      }
      ],
      "themeClass": { "text": "capgemini-text" },
      "website": "https://www.capgemini.com/in-en/",
      "logo": "assets/images/company-logos/capgemini.png"
    },
    {
      "name": "Neviton Softech Private Limited",
      "address": "Bangalore, KA, India",
      "details": [
        {
          "role": "Associate Software Engineer",
          "duration": "JUN 2019 — JUL 2021",
          "startDate": "2019-06-01",
          "endDate": "2021-07-30",
          //                     "description": `Part of the Advanced Product & Quality Planning development team to design & develop an integrated software solution for the Aircraft Manufacturing Industry using Node.JS and other technologies. I contributed to 3 of the 5 project modules. <br>
          // • Developed, and maintained RESTful APIs with Node.js and Express.js, ensuring seamless communication between front-end and back-end systems.<br>
          // • Implemented MySQL databases with optimized queries for efficient data storage and retrieval, prioritizing system performance and data integrity.<br>
          // • Collaborated closely with front-end developers to integrate back-end functionality, ensuring a cohesive user experience across the application.<br>
          // • Identified and resolved technical issues and performance bottlenecks through thorough troubleshooting and debugging, ensuring smooth operation under high-load conditions.<br>
          // • Implemented robust security measures to safeguard application data and functionality, prioritizing user privacy and system integrity. <br>
          // `
        },{
          "role": "Intern",
          "duration": "APR 2019 — MAY 2019",
          "startDate": "2019-04-15",
          "endDate": "2019-05-31",
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
      "website": "https://www.neviton.com/",
      "logo": "assets/images/company-logos/neviton.png"
    }
  ],
  "skills": [
    {
      type: 'Languages',
      list: ' TypeScript, JavaScript (Node.js), Java, Python, C#, Golang, SQL, Shell'
    },
    {
      type: 'AWS & Serverless',
      list: ' Lambda, API Gateway, DynamoDB, SQS, SNS, EventBridge, S3, EC2, IAM, SES, CloudWatch, CloudFormation'
    },
    {
      type: 'APIs & Integration',
      list: ' REST, GraphQL, event-driven architecture, webhooks, async messaging / pub-sub, OpenAPI / Swagger, third-party & partner API integration, JWT / OAuth'
    },
    {
      type: 'Frameworks',
      list: ' Express.js, FastAPI, React.js, React Native, Next.js, Redux, Spring Boot, Django, GraphQL'
    },
    {
      type: 'CI/CD & IaC',
      list: ' GitHub Actions, Azure DevOps, Jenkins, Argo Workflows, Terraform, Docker'
    },
    {
      type: 'Observability',
      list: ' Dynatrace, Datadog, CloudWatch'
    },
    {
      type: 'Databases',
      list: ' PostgreSQL, DynamoDB, MySQL, MS SQL Server, Oracle, Redis'
    },
    {
      type: 'AI-Assisted Dev',
      list: ' Claude, GitHub Copilot, Cursor AI, ChatGPT'
    },
    {
      type: 'Methodologies',
      list: ' Agile / Scrum, Test-Driven Development, CI/CD, Infrastructure as Code'
    }
  ],
  "coreStack": ['TypeScript', 'Node.js', 'AWS', 'React'],
  "projectsShipped": 40
}

CV.experienceYears = calculateExperience(CV.companies);
aboutMe = `Meticulous and action-oriented Software Engineer with ${CV.experienceYears} years of experience in building scalable and reliable applications. I specialize in architecting robust solutions, leading high-performing development teams, and streamlining workflows through innovative internal tools. My technical expertise spans across various modern frameworks and cloud platforms, driven by a passion for clean code and efficient communication.`
CV.aboutMe = aboutMe
