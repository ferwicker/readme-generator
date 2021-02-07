// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

  ## Licence

  ## Questions and Feedback
  Got questions or feedback? You can contact me on:

    - [Github](https://github.com/${data.username})
    - [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
