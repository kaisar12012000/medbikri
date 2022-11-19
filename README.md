# SpaceX launchpad app
Simple mobile app built for SpaceX launchpads

## Table of content
* [General overview](#general-overview)
* [Tech Stack](#tech-stack)
* [Purpose and Working](#purpose-and-working)

## General overview
The project is a mobile application developed using javascript framework for frontend and a REST API for backend. The basic idea of the project is to fetch lauchpad details and mission details carried from each launchpad owned by SpaceX.

## Tech Stack
* React native
* SpaceX RESTful API
* Expo
* Required React native libraries

## Purpose and working
The project was built as an assessment of skills in the field of cross platform mobile application development.
The working of the project is very simple. On opening the app the splash page is shown and after that home page is rendered. The homepage makes the a GET request to the API and returns all the active launchpads.
On clicking on any one launchpad, a POST request is made to another endpoint of the same API with the launchpad unique id as param. This endpoint return all the missions that were performed on that launchpad.
