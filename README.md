# _Github User Lookup_

#### _Enables people to lookup information about Github users, 8/5/2016_

#### By _**TJ2001**_

## Description

_This application enables the user to lookup information about Github users, specifically the name of the repositories and the quantity Github user has produced. Information should come out in an easy to read list format._

## Installation Instructions/Requirements

* _Download zip or clone git repository._
* _Npm, Gulp, and Bower must be installed globally._
* _Run NPM install via command console in GithubUserLookup folder._
* _Run Bower install via command console in GithubUserLookup folder._
* _If not already installed download Git from https://git-scm.com/downloads for easy application installation using Bash._
* _User must provide own api-key for an .env file using text-editor of choice. Write the following script in the .env file._
```
exports.apiKey = "<put api key here>"
```
* Use the terminal to run the following command-line on Github bash:
```
npm install; bower install; apm install atom-typescript; gulp build; gulp serve
```
* _Go to http://sass-lang.com/install and install Sass as well._
* _Enjoy._

_If user has issues with installing NPM. Checkout: https://docs.npmjs.com/cli/install._<br />
_If user has issues with installing Gulp. Checkout: https://travismaynard.com/writing/getting-started-with-gulp._<br />
_If user has issues with installing Gulp. Checkout: http://blog.teamtreehouse.com/getting-started-bower._

## Known Bugs

_No known bugs at this time._

## Specifications

* _Input: Github Username_
* _Output: Github User's name, Number of Repositories, and Names of the Repositories_

## Support and contact details

_Contact TJ2001 @ Epicodus via snail mail._

## Technologies Used

_Most coding was done in Javascript using JQuery and Gulp._

### License

*MIT license*

Copyright (c) 2016 **_TJ2001_**

# Message-board-ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
