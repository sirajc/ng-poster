# NgPoster

An [Angular 2](https://angular.io/) webapp to list movies and maintain watchlist, powered by [TMDB](https://www.themoviedb.org) using angular-cli and [Angular styleguide](https://angular.io/styleguide)

> This app is based on poster webapp by @kushalpandya. HTML Markup, SCSS and layout is picked as is from [poster](https://github.com/kushalpandya/poster). Both the apps looks and behaves the same, only the code is different. poster is built with react and ng-poster is built with Angular 2

#### Installation

##### Pre-Req Angular CLI
This app uses webpack build system of [Angular CLI](http://cli.angular.io), Globally install version `1.0.0-beta.11-webpack` or above if available.

_OR_

Use CLI from master branch directly
```
git clone https://github.com/angular/angular-cli.git
cd angular-cli
npm link
```

##### Pre-Req Poster Server
Setup the [poster-server](https://github.com/kushalpandya/poster-server). Instructions available at https://github.com/kushalpandya/poster-server

##### Setup ng-poster
Download tarball and extract _OR_ clone using `git clone https://github.com/sirajc/ng-poster`
Install Dependencies (_Note this will take time due to huge no of dependencies for CLI_)
```
cd ng-poster
npm install
```

If you are using local version of CLI (i.e. master branch) then run `npm link angular-cli` from `ng-poster/` path

##### Run the App
You can run the app using `ng serve` or `npm start`

##### Configuration options
NgPoster will run on port 4200 & Poster Server will run on port 9000.
If you change Poster Server port (from its configuration.json), you need to also change the same in NgPoster's `src/app/section/shared/movie-service.ts` file for value of constant variable API_URL.

#### TODO

[ ] App Structure explanation
[ ] Documentation
[ ] Tests
