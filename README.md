# Sitecore Helix CLI

The purpose of this project is to provide a simple interface for creating new Helix projects in their respective layer (Foundation, Feature, Project) and importing community based modules into existing solutions.

## Installation

This helper command can be installed to any existing Helix project.  Run the command below to install.

    yarn add sitecore-helix-cli

This will make available a `yarn` (or `npm`) command, `helix`.  See the Usage section on how to make use of the command.

## Usage

At present this command can be used to create new projects and import existing projects from the community driven repository.

You can access these commands by running the command below.

    yarn helix

To create a new project called "Example" in the Foundation layer you can run the below command.

    yarn helix new foundation Example

To import a project from the community repository run the command below.  A listing of available modules can be found in [this repository](https://github.com/deepend-melbourne/sitecore-helix-module-registry).

    yarn helix import Foundation.Analytics

## About

This project was designed to be as unobtrusive as possible.  The `new` command simply creates a new project with the base configuration.  The `import` command adds a git submodule to your repository.

There is a slight level of opinion expected by this tool in that your solution should follow the Habitat folder structure, where Foundation projects are located at `./src/Foundation/*` relative to the root of your repository.

This is definitely a work in progress project and community input and involvement is most welcome!
