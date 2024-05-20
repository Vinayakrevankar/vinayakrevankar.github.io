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

const CV = {
    "aboutMe": aboutMe,
    "company": [
        {
            "name": "Capgemini Technology Services India Limited",
            "details": [{
                "role": "Consultant - Software Engineer Lead",
                "duration": "20-AUG-2021 — 29-DEC-2023",
                "description": `Part of Middleware development Team for design and development of API for food restaurant for five modules using NodeJS, Serverless Frameworks , AWS  ( Lambda, API Gateway, CloudWatch, Dynamodb, SQS, S3 ) and Azure DevOps.
\n Developed a tool for internal use which will help the developer for easy navigation to AWS services.`

            }
            ]
        },
        {
            "name": "Neviton Softech Private Limited",
            "details": [
                {
                    "role": "Associate Software Engineer",
                    "duration": "01-JUN-2019 — 30-JULY-2021",
                    "description": "Advanced Product and Quality Planning development team to design and develop an integrated software solution for the Aircraft Manufacturing Industry using NodeJS and other technologies."
                },
                {
                    "role": "Intern",
                    "duration": "15-APR-2019 — 31-MAY-2019",
                    "description": "Exposure to HTML, CSS, JavaScript, NodeJS. Knowledge of database (MySQL, SQL SERVER) Familiarity with software version control: Git, GitHub Agile Software Development methodology concepts Complete programming assignment using a JavaScript."
                }
            ]
        }
    ],
    "technologies": [
        "Javascript",
        "NodeJS",
        "Serverless",
        "Mocha",
        "TypeScript",
        "Azure DevOps",
        "ExpressJS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Python",
        "HTML",
        "MySQL",
        "MSSQL",
        "Java",
        "Android Studio",
        "CSS",
        "PHP",
        "C#",
        "JIRA",
        "GitHub",
        "VS Code",
        "Swagger",
        "Postman",
        "Lucid Chart"
    ]
}


