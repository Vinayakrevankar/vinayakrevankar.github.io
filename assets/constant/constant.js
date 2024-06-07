let projects = [{
    imageSrc: "./assets/images/gitlibrary_logo.webp",
    projectTitle: "GIT Library",
    description: "Users can seamlessly manage their borrowed books through our system, which includes features such as checking issued books, monitoring late fees, and renewing books as needed. With our integrated Paytm payment gateway, users can conveniently settle any fines incurred, ensuring a hassle-free experience.",
    link: {
        "Play_Store": "https://play.google.com/store/apps/details?id=com.gitbelgaum.gitlibrary.gitlibrary&amp;hl=en_US"
    }
}, {
    imageSrc: "./assets/images/kohaopac_logo.webp",
    projectTitle: "Koha-Opac",
    description: `Developed a global library application enabling librarians to register colleges
                                and generate unique library codes, which users utilize alongside their username
                                and password for authentication. Users can then access features such as checking
                                issued books and viewing late fee amounts.`,
    link: {
        "Play_Store": "https://play.google.com/store/apps/details?id=com.lisacademy.org.kohaopac&hl=en_US"
    }
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
}

]
let d1 = new Date('2019-04-01')  // start datte
let d2 = new Date('2023-12-29')
let res = monthDiff(d1, d2);

let aboutMe = `Meticulous and action-oriented developer with <b>${Math.floor(res / 12)}.${res % 12} years <\/b> of experience in the Software
development space. With a solid background in programming, software architecture, and project
management, I have the ability to lead a team of developers to create and maintain innovative,
reliable, and scalable software applications. My technical expertise includes proficiency in a
variety of programming languages, such as JavaScript, YAML, Python, and Java, as well as
experience in software development frameworks such as Node.js, Serverless, and ExpressJS.
Apart from this, I have extensive experience with AWS cloud platform and services. In addition
to my technical skills, taking ownership of the projects undertaken, communication skills, and
leadership skills are also some of the areas where my strengths lie.`
aboutMe = `Meticulous and action-oriented developer with <b>${Math.ceil(`${`${Math.floor(res / 12)}.${res % 12}`}`)} years <\/b> years of experience in software development. With a solid background in programming, software architecture, and project management, I have the ability to lead teams to create and maintain innovative, reliable, and scalable software applications. My technical expertise includes proficiency in various programming languages and development frameworks. In addition to my technical skills, I excel in taking ownership of projects, effective communication, and leadership.`

const CV = {
    "aboutMe": aboutMe,
    "company": [
        {
            "name": "Capgemini Technology Services India Limited",
            "details": [{
                "role": "Consultant - Software Engineer Lead",
                "duration": "20-AUG-2021 — 29-DEC-2023",
                "description": `Part of the middleware development team for design and development of API for food restaurant for five modules using NodeJS, serverless frameworks, and AWS. Developed a tool for internal use that helped the developers navigate to AWS services easily.
• Developed REST APIs, conducted unit testing to validate unit-level functionalities, and thoroughly documented code,
 APIs, and technical specifications to ensure clarity and facilitate future maintenance and enhancements. <br>
• Engaged with stakeholders and architects, collaborating closely with them throughout the project lifecycle. <br>
• Identified and reported opportunities to improve the efficiency and quality of the product. <br>
• Managed a team of 10 developers and 4 testers, and mentored 10 junior developers, fostering collaboration, ensuring accountability, and providing clear direction to achieve project goals efficiently. <br>
• Participated in regular production deployment calls to ensure smooth and efficient deployment of software updates. <br>
• Collaborated with cross-functional teams to ensure consensus on release and acceptance criteria for new features and to address any deployment issues, minimizing disruption to user experience. <br>
• Followed coding standards, best practices, and design patterns for Node.js development to maintain code consistency, readability, and maintainability, while also adhering to secure coding principles to enhance application security. <br>
• Successfully led and delivered two critical large-scale projects, achieving a defect rate of less than 5%. <br>
• Developed an internal tool to streamline access to AWS resources, simplifying developers' navigation directly from the tool, which significantly benefited both developers and architects. <br>
• Optimized service performance by refactoring code, implementing a caching mechanism, and adjusting Lambda configurations, reducing response time from 12 seconds to 5 seconds. <br>
`

            }
            ]
        },
        {
            "name": "Neviton Softech Private Limited",
            "details": [
                {
                    "role": "Associate Software Engineer",
                    "duration": "01-JUN-2019 — 30-JULY-2021",
                    "description": `Part of the Advanced Product & Quality Planning development team to design & develop an integrated software solution for the Aircraft Manufacturing Industry using Node.JS and other technologies. I contributed to 3 of the 5 project modules. <br>
• Developed, and maintained RESTful APIs with Node.js and Express.js, ensuring seamless communication between front-end and back-end systems.<br>
• Implemented MySQL databases with optimized queries for efficient data storage and retrieval, prioritizing system performance and data integrity.<br>
• Collaborated closely with front-end developers to integrate back-end functionality, ensuring a cohesive user experience across the application.<br>
• Identified and resolved technical issues and performance bottlenecks through thorough troubleshooting and debugging, ensuring smooth operation under high-load conditions.<br>
• Implemented robust security measures to safeguard application data and functionality, prioritizing user privacy and system integrity. <br>
`
                },
                {
                    "role": "Intern",
                    "duration": "15-APR-2019 — 31-MAY-2019",
                    "description": `• Worked on front-end technologies (HTML, CSS, JavaScript) to create dynamic user interfaces, combined with server-side Node.js expertise for building highly scalable web applications.<br>
• Experienced in database management (MySQL, SQL Server) for efficient data handling in projects.<br>
• Learned version control tools such as Git and GitHub, enabling seamless collaboration and efficient change tracking in coding projects.<br>
• Familiar with Agile methodologies, contributing to iterative development, sprint planning, and a collaborative work environment.<br>
`
                }
            ]
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


