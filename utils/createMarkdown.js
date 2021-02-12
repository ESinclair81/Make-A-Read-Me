/*____________________________________ THIS SCRIPT CREATES THE README.MD ______________________________________*/

function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`

    }
    return ''
}

function renderLicenseLink(license) {
    if (license !== "None") {
        return (
        `\n* [License](#license)\n`
        )
    }
    return ''
}

function renderLicenseSection(license) {
    if (license !== "None") {
        return (
            `## License
    This project is licensed under the ${license} license.`
        )
    }
    return ''
};


function createMarkdown(data) {
    return `# ${data.projectname}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, please run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, please run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

Any Q's about this repo? Feel free to contact me at ${data.email}, or go ahead and open an issue for me. To see more ESinclair81 works, check [$[data.github]](http://)

`;
}

module.exports = createMarkdown;