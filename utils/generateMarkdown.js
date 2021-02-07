// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'Creative Commons':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'no license':
      return ``;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    default:
      return '';
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'Creative Commons':
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
    case 'GPLv2':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case 'GPLv3':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'no license':
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  if (license === 'no license' || license === undefined){
    return `## License
    No license.`
  } else {
    const licenseBadge = renderLicenseBadge (license);
    const licenseLink = renderLicenseLink (license);
    return `## License
    ${licenseBadge}
    
    [See license.](${licenseLink})
    
    ${license} © ${name}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.yourname);

  return `# ${data.title}

  ## Description
  ${data.description}

  [See deployed application.](${data.deployedLink})

  ## Table of Contents
  - [Motivation](#motivation)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [How to use](#how-to-use)
  - [Tests](#tests)
  - [Roadmap](#roadmap)
  - [Credits](#credits)
  - [Licence](#licence)
  - [Questions and Feedback](#questions-and-feedback)

  ## Motivation
  ${data.motivation}

  ## Features
  ${data.features}

  ## Screenshot
  ![${data.title} screenshot](${data.screenshot})

  ## How to use
  ${data.howtouse}

  ## Tests
  ${data.tests}

  ## Roadmap
  ${data.roadmap}

  ## Credits

  ${licenseSection}

  ## Questions and Feedback
  Got questions or feedback? You can contact me on:

    - [Github](https://github.com/${data.username})
    - [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
