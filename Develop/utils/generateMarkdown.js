// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "APACHE":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log("renderlicsnese" + license);
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "APACHE":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(renderLicenseBadge(license));
  console.log(renderLicenseLink(license));
  console.log(license);
  return `## License\n
  ${renderLicenseBadge(license)}\n
  ${renderLicenseLink(license)}\n`
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(answers) {

  if (answers.tableOfContents === "y") {
    answers.tableOfContents = `
    - [Installation](#installation)\n
    - [Usage](#usage)\n
    - [Credits](#credits)\n
    - [License](#license)\n
    - [Badges](#badges)\n
    - [Features](#features)\n
    - [Contributing](#contributing)\n
    - [Tests](#tests)\n
    - [Table of Contents](#tableofcontents)\n\n
    `;
  }
  else {
    answers.tableOfContents = "";
  }


  return `# ${answers.title}
    ## Description
    ${answers.description}
    ${answers.tableOfContents}
    ## Installation
    ${answers.installation}
    ## Usage
    ${answers.usage}
    ## Credits
    ${answers.credits}
    ## License
    ${renderLicenseSection(answers.license)}
    ## Badges
    ${answers.badges}
    ## Features
    ${answers.features}
    ## How to contribute
    ${answers.contributing}
    ## Tests
    ${answers.tests}



  
`;
}


