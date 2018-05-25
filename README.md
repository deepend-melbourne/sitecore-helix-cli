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

## Versioning

When importing packages, this command adds a git submodule reference to the requested package.  This means that the parent repository (your project) will reference a specific commit in the module.  If your project works at the time that you import the module then it will continue to work forever, even if changes are made to the module as your project is referencing a specific commit of that module.  See the section below about Updates for information about referencing newer versions of modules.

## Updates

It is inevitable that changes will be made to modules that you are using, it's also likely that you will want to make changes to modules that will benefit the community.  This section will outline the ideal process to take for both scenarios.

### Receiving updates to modules

If a module has been updated and you want to pull those changes into your project you will need to use the git commands to update your repositories reference to the module - which is just a git submodule.

To update a module, the simplest way is to run the following commands.

    cd src/<Layer>/<Module> # e.g., src/Foundation/Grid
    # you are now inside a git submodule, so all git commands relate to the submodule, not your repository
    git pull # this will pull in the latest changes from the git upstream
    cd ../../../ # this will take you back to the root of your repository
    # you are now back in your repository, so git commands relate to your repository
    git status # this will show you that the submodule has "(new commits)"
    git add src/<Layer>/<Module> # this updates the reference to the submodule using what's currently the HEAD of the submodule
    git commit # commit the change so that your repository points to the new commit of the submodule

### Making updates to modules

If you would like to make changes to an existing module, the easiest way is to fork the repository of the module, make the updates then submit a pull request.

To submit your updates, run the following commands.

    cd src/<Layer>/<Module> # e.g., src/Foundation/Grid
    # make your changes
    git remote add update git@github.com:your-account/sitecore-helix-foundation-grid.git # this is the URL of your fork
    git push update master # this pushes your changes to the fork
    # submit a pull request to the source repository's maintainer

After a review and once the module's maintainer has accepted your pull request it will be merged, others can then receive the updates by following the [above section](#receiving-updates-to-modules).

## About

This project was designed to be as unobtrusive as possible.  The `new` command simply creates a new project with the base configuration.  The `import` command adds a git submodule to your repository.

There is a slight level of opinion expected by this tool in that your solution should follow the Habitat folder structure, where Foundation projects are located at `./src/Foundation/*` relative to the root of your repository.

This is definitely a work in progress project and community input and involvement is most welcome!
