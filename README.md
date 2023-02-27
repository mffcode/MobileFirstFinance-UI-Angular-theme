# Requirements

• Visual studio (IDE)

• Npm 

• Node.js

• Angular CLI (version:7.x.x)

• Angular 6

•	Bootstrap 4

# Installing The Prerequisite

•	Verify that you are running at least node 8.x.x and npm 6.x.x by running node -v and npm -v in a terminal/console window.

•	Node.js and NPM : You can download Node.js from https://nodejs.org. NPM comes bundled with Node.js.

•	angular-cli: You can install angular-cli by executing following command from your terminal: npm install -g @angular/cli . More details can be found here https://github.com/angular/angular-cli.

# Download the code

When you completed tools setup, you need to download the code.The easiest way to do that is to clone GitHub repository:

git clone [Project URL]

# Run the application:

•	cd [PROJECT NAME] 

•	Before proceding you'll need to install npm packages. You can do this by running npm install from the root of your project to install all the necessary dependencies described in the package.json and verify that it works.

•	npm install

•	ng serve

# Code Scaffoldings
•	Run ng generate component component-name to generate a new component. You can also use ng generate directive/pipe/service/class

•	API configuration are done on app.service.ts and login.service.ts file

•	Every modules contains three files i.e .html , .ts, .scss file.

•	Path i.e src/landing-page/pages which has landing-page module to shows the application landing page 

•	Lazy loading of modules are done under folder /shared/routes/

# Preloading Strategy

•	Provides a preloading strategy that preloads all modules as quickly as possible.

•	To get more help on the PreloadAllModules check out the https://angular.io/api/router/PreloadAllModules .

•	You can put this code in app-routing.module.ts

# Building

•	Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.





