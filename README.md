# Introduction
This repository is a seed to start an Angular2 meteor project with authentication, pagination and Angular2 Material.

## Includes :
* Meteor 1.4.2
* Angular 2
* Typescript configuration (**Note  this configuration is or the Atom IDE. See below for the generic configuration**)
* Angular2 Material
* Simple Todo application
* Authentication + User Sign up
* Working code to paginate tsaks
* Working code to search tasks by name
* Working code to sort tasks alphabetically (on server side)

# Installation
Clone this repository
```
git clone https://github.com/KyneSilverhide/angular2-meteor-seed.git
```

Install dependencies
```
npm install
```

Run the project
```
meteor
```

You can now access it at http://localhost:3000

# Typescript configuration
## Atom (default file)
In Atom, install the "atom-typescript" package
This will automatically fill this base file, but you probably don't need to change anything.
```
{
  "atom": {
    "rewriteTsconfig": true
  },
  "compileOnSave": false,
  "buildOnSave": false,
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true
  },
  "filesGlob": [
    "**/*.ts"
  ],
  "files": []
  ]
}
```

## Other IDEs 
This is based on the Angular2 Meteor Tutorial : https://angular-meteor.com/tutorials/socially/angular2/bootstrap
```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "es6",
      "dom"
    ],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ],
  "files": [
    "typings.d.ts"
  ],
  "compileOnSave": false,
  "angularCompilerOptions": {
    "genDir": "aot",
    "skipMetadataEmit": true
  }
}
```
