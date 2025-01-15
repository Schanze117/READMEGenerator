// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }else if (license == 'APACHE 2.0'){
    return '[![License: APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  }else if (license == 'GPL 3.0'){
    return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }else if (license == 'BSD 3'){
    return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--CLause-blue.svg)]'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return '(https://opensource.org/licenses/MIT)'
  }else if (license == 'APACHE 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }else if (license == 'GPL 3.0'){
    return '(https://opensource.org/licenses/gpl-3.0)'
  }else if (license == 'BSD 3'){
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None'){
    return ''
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({gitHub, email, project, description, languages, dependencies, tests, repoInfo, contributions, license}) {
  return `
  # <${project}>
  
  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributions](#contributions)
  - [Tests](#tests)
  
  ## Installation
  
  ${dependencies}
  
  ## Usage
  
  ${repoInfo}
      
  
  ## Credits
  
  The creator of this README file is ${gitHub}.
  
  You can reach them at ${email} if you have any questions or concerns!
  
  ## License
  
${renderLicenseSection(license)}
  
  ---
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  ${contributions}
  
  ## Tests
  
  These are the tests you can run to troubleshoot!
  
  ${tests}
  `;
}

export default generateMarkdown;
