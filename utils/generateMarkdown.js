// Generates a function that returns a license badge based on which license the user selected
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  var licBadge = "";
  switch(license) {
    case "GNU AGPLv3":
      licBadge = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "GNU GPLv3":
      licBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "GNU LGPLv3":
      licBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "Mozilla Public License 2.0":
      licBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
      break;
    case "Apache License 2.0":
      licBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
      break;
    case "MIT License":
      licBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
      break;
    case "Boost Software License 1.0":
      licBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license)})`;
      break;
    case "The Unlicense":
      licBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license)})`;
      break;
  }
  return licBadge;  
}

// Generates a function that returns a license link based on which license the user selected
// If there is no license, an empty string is returned
function renderLicenseLink(license) {
  var licLink = "";
  switch(license) {
    case "GNU AGPLv3":
      licLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU GPLv3":
      licLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "GNU LGPLv3":
      licLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      licLink = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "Apache License 2.0":
      licLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "MIT License":
      licLink = "https://opensource.org/licenses/MIT";
      break;
    case "Boost Software License 1.0":
      licLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "The Unlicense":
      licLink = "http://unlicense.org/";
      break;
  }
  return licLink;
}

// This function generates the license section of README
function renderLicenseSection(license) {
  return `This application is operating under the following license: **${license}**.  
  \n\nFurther information regarding this license, to include the required notice, can be read by navigating to the following link: ${renderLicenseLink(license)}.`;
}

// This function to generates the complete markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n${renderLicenseBadge(data.license)}
  \n\n## Description
  \n\n${data.description}
  \n\n## Table of Contents
  \n\n- [Installation](#installation)
  \n- [Usage](#usage)
  \n- [License](#license)
  \n- [Contributing](#contributing)
  \n- [Tests](#tests)
  \n- [Questions](#questions)
  \n\n## Installation
  \n\n${data.installation}
  \n\n## Usage
  \n\n${data.usage}
  \n\n## License
  \n\n${renderLicenseSection(data.license)}
  \n\n## Contributing
  \n\n${data.contribute}
  \n\n## Tests
  \n\n${data.testing}
  \n\n## Questions
  \n\nAny questions regarding this project can be answered by contacting me through my GitHub profile or by email:
  \nGitHub Profile: https://github.com/${data.ghUsername}
  \nemail: ${data.email}
`;
}

// Exported functions
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
