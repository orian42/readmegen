// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licBadge = "";
  switch(license) {
    case "GNU AGPLv3":
      licBadge = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      break;
    case "GNU GPLv3":
      licBadge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "GNU LGPLv3":
      licBadge = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      break;
    case "Mozilla Public License 2.0":
      licBadge = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      break;
    case "Apache License 2.0":
      licBadge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case "MIT License":
      licBadge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Boost Software License 1.0":
      licBadge = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
      break;
    case "The Unlicense":
      licBadge = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
  }
  return licBadge;  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
  \n\n${data.license} (${renderLicenseLink(data.license)})
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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
