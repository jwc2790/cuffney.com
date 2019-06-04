# cuffney.com


> personal website and playground for project configuration, operations, and best practices.

[![CircleCI][circle-ci-badge]][circle-ci-url]
[![Greenkeeper][greenkeeper-badge]][greenkeeper-url]
[![Maintainability][code-climate-maintainability-badge]][code-climate-maintainability-url]
[![Test Coverage][code-climate-test-coverage-badge]][code-climate-test-coverage-url]

The practical function of this site is to serve as a "landing page" for anyone looking to learn more about the work I do as a software engineer.

The ansilary purpose of this project is to serve as a playground for staying on top of industry best practices.  As such this repository is configured to follow a adgile "process-light" scrum process within GitHub using it's build in issues and projects feature.  It also is configured to run code reviews via code climate, and uses CircleCI for CI/CD. 

![][site-screenshot]

## Installation

```sh
npm install
```

## Development setup

```sh
npm install
npm start
```

## Development process

#### Protected Branches

- `master`: production environment
- `dev`: development environment

#### CI/CD

- The CI pipeline runs on code climate and runs on every commit and is required to be passing in order for PR's to be merged.
- As apart of the CI build, data is sent to code climate to analyze and review the code for maintainability and test coverage

###### Testing CircleCI Locally

1. make sure `circleci` is installed `brew install circleci`
2. run `circleci local execute --job <job_name>` (workflows not supported)

<!-- Markdown link & img dfn's -->
[site-screenshot]: public/imgs/home-screenshot.png
[circle-ci-badge]: https://circleci.com/gh/jcuffney/cuffney.com.svg?style=svg
[circle-ci-url]: https://circleci.com/gh/jcuffney/cuffney.com
[code-climate-maintainability-badge]: https://api.codeclimate.com/v1/badges/38e97723b5dda025cc10/maintainability
[code-climate-maintainability-url]: https://codeclimate.com/github/jcuffney/cuffney.com/maintainability
[code-climate-test-coverage-badge]: https://api.codeclimate.com/v1/badges/38e97723b5dda025cc10/test_coverage
[code-climate-test-coverage-url]: https://codeclimate.com/github/jcuffney/cuffney.com/test_coverage
[greenkeeper-badge]: https://badges.greenkeeper.io/jcuffney/cuffney.com.svg
[greenkeeper-url]: https://greenkeeper.io/