//License objects
const MIT = {
  badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  link: 'https://opensource.org/licenses/MIT'
}

const Apache2 = {
  badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  link: 'https://opensource.org/licenses/Apache-2.0',
}

const CreativeCommons = {
  badge: 'https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg',
  link: 'http://creativecommons.org/publicdomain/zero/1.0/',
}

const GPLv2 = {
  badge: 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
  link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
}

const GPLv3 = {
  badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  link: 'https://www.gnu.org/licenses/gpl-3.0',
}


const getLicenseInfo = ({badge, link}, license) => {
  return `## License
  [![License badge](${badge})](${link})

  This work is covered by ${license} license. For more information [see full license.](${link})`
}


function renderLicenseSection(license, name) {
  let licCode;

  switch (license){
    case 'MIT':
      licCode = MIT;
      break;
    case 'Apache 2.0':
      licCode = Apache2;
      break;
    case 'Creative Commons':
      licCode = CreativeCommons;
      break;
    case 'GPLv2':
      licCode = GPLv2;
      break;
    case 'GPLv3':
      licCode = GPLv3;
      break;
  }

  if (license === 'no license') {
    return `## License
    No license.`
  } else {
    return `${getLicenseInfo(licCode, license)}
  ${license} © ${name}`
  }
  
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license, data.name);

  return `# ${data.title}

  ## Description
  ${data.description}

  [See deployed application.](${data.deployedLink})

  ## Table of Contents
  - [Features](#features)
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions and Feedback](#questions-and-feedback)

  ## Features
  ${data.features}

  ![${data.title} screenshot](${data.screenshot})

  ## How to use
  ${data.howtouse}

  ${licenseSection}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions and Feedback
  Got questions or feedback? You can contact me on:

    - [Github](https://github.com/${data.username})
    - [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
