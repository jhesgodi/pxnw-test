# Project PXNW Challenge

We're transporting you back to the early 2000's – we're building a quick blog. We're asking you to build an application with two pages, one to list blog posts and a short excerpt, one to display a full blog post. The backend for this blog are Github Gists. The idea is that you can configure a username to look up on Github and the index page will display excerpts of the Gists. The post detail page will then display the full content of the gist. Possible enhancements are a searchable list of posts, only show certain Gists as blog posts, formatted Markdown as HTML etc.

## Requirements

- [x] As a reader, I want to be able to see a list of blog posts that a writer has posted on Github in the form of Gists, so that I can make a decision on which post to read.
- [x] As a reader, I want to be able to select a post on the index page and see the post details, so that I can read the post.
- [x] As a reader, I want to be able to navigate from a post to the next post so that I can read the next post.
- [x] As a reader, I want to be able to navigate to the index page from a post so that I can select a different post to read.
- [ ] As a writer, I want to be able to post a Gist to Github and have that post show up on my blog so that a reader can read the new post.
- [ ] As a writer, I want to able to make updates to a post by updating the Gist so that I can correct typos and make content updates.

### Questions

**What do you think you would do different if you had 2 weeks to complete this assignment and no requirement to use Github. What would your backend solution look like?**

*__Answer:__*
  With the time given time I primarly focus on general scaffolding. By having more time I would like to focus more on:
  - Services integration with github, perhaps make use of its new grapql api
  - componentization, work on having a set of primary and base UI components for rendering the content after devising some mockups for data the UI
  - Tests & Error handling, plan on how to work on the coverage and error handling

**How and where do you feel like this application should be deployed to?**

*__Answer:__*
I beleive this strongly depends on the client's insfractrure. But that being said said, I think this app can be deployed under a Serverless schema. It quite isolates the infraestructre handling from the app itself, and save you time and money.

**Are you happy with your own solutions? If yes, what parts do you think are really
well done, if not, what would you want to change?**

*__Answer:__*
I really like the output for this project, I would like to highlight the work done in the general scaffolding for:
- Handling screens navigation/routing
- State and props intherence
- Directory structure

I beleive this are good foundations for scalability althoug they might require more work later.

I the other hand, in a next chance in this project I would like to improve in:
- Styling, propose a more scalable way to configure a stylesheet
-Error handling, work on planing a suite for testing and handling side effects

### TODOS
- [] Fix github OAuth2 integration for login
- [] Submit Gists to Github after create
- [] update existing Gists

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites (macOS only)

##### Node, Watchman
We recommend installing Node and Watchman using [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
```
##### The React Native CLI
Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

```
npm install -g react-native-cli
```

##### CocoaPods
CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

Using the default Ruby install will require you to use `sudo` when installing gems. (This is only an issue for the duration of the gem installation, though.)

```
sudo gem install cocoapods
```

##### Xcode
The easiest way to install Xcode is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 8 or higher.

##### React Native Debugger
```
brew update && brew cask install react-native-debugger
```
For more info, please follow installation steps at https://github.com/jhen0409/react-native-debugger

### Installing
1. Install yarn package manager, follow instructions at: https://yarnpkg.com/lang/en/docs/install/#mac-stable

2. Install package dependencies

```
yarn install
```
3. Link Native dependencies to XCODE using react-native cli

```
react-native link
```

## Running

1. Open react native debugger, it should be installed as a regular app

2. Run iOS app with the following command
```
yarn run ios
```

### Coding style

TODO: //

## Deployment

TODO: //

## Built With

* [React Native](https://facebook.github.io/react-native/) - A framework for building native apps using React
