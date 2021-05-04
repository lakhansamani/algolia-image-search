# Algolia Image Search

A web application that lets you search on the images with text. It performs OCR on the uploaded images and enables the search on their content with the help of Algolia.

### Use Cases

* A user should be able to upload the images.
* A user should be able to search & filter the content for the uploaded images

# Demo
* [Live Website](https://algolia-image-search.netlify.app/)
* [Quick Video Explaining the Application](https://www.loom.com/share/1e2dc67b7ed341ff9d3956928db7ac4e)

# Architecture
![architecture](https://raw.githubusercontent.com/lakhansamani/algolia-image-search/main/doc/architecture.png)

# Tools and Technologies Used

* [React](https://reactjs.org/) for building user interface
* [Create React App](https://github.com/facebook/create-react-app) for bootstrapping the React project
* [Tailwindcss](https://tailwindcss.com/) as styling framework
* [Jest](https://jestjs.io/) For asserting tests
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to perform tests
* [Tesseract.js](https://tesseract.projectnaptha.com/) to perform the OCR on the uploaded images and extract their text.
* [Netlify Functions](https://www.netlify.com/products/functions/) for securely indexing the data to algolia
* [Algolia Javascript Client](https://www.algolia.com/doc/api-client/getting-started/install/javascript/?client=javascript) to connect to algolia and index data
* [Algolia React Instant Search](https://github.com/algolia/react-instantsearch) to build the search, filter, result components
* [Netlify](https://www.netlify.com/) to deploy the web application

# How to start/build/test project locally?

### Clone

- `git clone https://github.com/lakhansamani/algolia-image-search.git`
- Change directory `cd algolia-image-search`

### Install Dependencies

- `yarn`

### Start Locally

- `yarn start`

### Create Production Build

- `yarn build`

### Test

- `yarn test`

# Code Structure

- `functions/`: Serverless functions that are deployed on Netlify
- `public/`: Index HTML file and public assets
- `src/`: Root source code folder
- `src/components`: All the components used by application
- `src/App.test.tsx`: Test file
- `src/index.tsx`: Entry point
- `src/craco.config.js`: [Craco](https://github.com/gsoft-inc/craco) configuration to add `create-react-app` configs
- `netlify.toml`: Netlify configuration file
- `package.json`: Project meta information and dependencies
- `tailwind.config.js`: Tailwindcss configurations
- `tsconfig.json`: Typescript configurations

