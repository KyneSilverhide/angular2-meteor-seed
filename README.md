**Table of Contents**

- [Introduction](#)
	- [Includes :](#)
- [Installation](#)
- [Typescript configuration](#)
	- [Atom (default file)](#)
	- [Other IDEs](#)
- [Docker image](#)
- [Demo](#)

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

# Docker image
If you are familiar with Docker, you can simply build a docker image and deploy it in production.
I've already atatched the proper `Dockerfile`, so you just have to run these commands (inside this application folder)
```
docker build -t yourname/your-app-name .
```

Then, you can push your image to the Docker hub (you need an account at https://hub.docker.com/) and pull it on your production server.
Start by sign in into Docker Hub
```
docker login
```
Then, push your image
```
docker push yourname/your-app-name
```

Finally, on the production server (you may need to use `sudo`)
```
docker login
docker pull yourname/your-app-name
docker run -d -e ROOT_URL=http://example.com -e MONGO_URL=mongodb://url -e MONGO_OPLOG_URL=mongodb://oplog_url -p 80:3000 yourname/your-app-name
```

If you are using the MongoDb inside a Docker container, prefix the MONGO_URL part with
```
--link mongo:mongo -e MONGO_URL=mongodb://mongo
```


# Demo
A demo of this application can be seen here : http://ns352915.ovh.net:8082/.
Please excuse me if the website is down, I'll try to keept it up as much as possible.

