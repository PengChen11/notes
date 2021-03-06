# Notesy

A terminal based `(CLI)` application allowing users to easily create and manage a list of categorized notes

This project is devided into 4 classes.

[Click here to go to the readme file for phase-01](phase-docs/phase_01_readme.md)

[Click here to go to the readme file for phase-02](phase-docs/phase_02_readme.md)

[Click here to go to the readme file for phase-03](phase-docs/phase_03_readme.md)

[Click here to go to the readme file for phase-04](phase-docs/phase_04_readme.md)

## Business Requirements

Using only the terminal, a user should be able to perform the following actions:

- List the notes in the database
  - All Notes: node notes.js --list
  - Notes in a category: node notes.js --list school

- Add a note to the database.
  - i.e. `node notes.js -add “This is fun” –category school

- Users should be able to delete a single note
  - node notes.js --delete id

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. Node.js

   - ustom Modules to handle the application logic
     - input.js will:
       - Parse the users’ input
       - Map that to a command `(i.e. add, delete)`
       - Identify the data to give to the command `(i.e. the note text)`
     - notes.js will take a command + it’s data and execute it
       - add, delete, list
   - Third party modules to handle common cases
     - Command Line input parsing using a node/npm library
     - Mongo persistence using Mongoose

2. ES6 Classes

3. Persistence using a Mongo Database `(NoSQL)`

4. Mongoose Schemas to define and model the data for Mongo
  - lib/model/notes-schema.js will define the data for a note

5. Abstracted Data Models representing the Mongo Collections
  - lib/model/notes-collection.js will be used by notes.js save/delete/query the database

6. Test Driven Development, using Jest
   - Tests will be runnable locally
   - Tests will auto-execute `(CI)` in your repo using GitHub actions
   - Tests will use a 3rd party library called supergoose to “mock” the mongo running database

7. Documented Code using JSDoc

8. Deployment via NPM

## Application Structure `(proposed)`

```CLI
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── input.test.js
│   ├── notes.test.js
├── lib
│   ├── input.js
│   ├── model
│   │   ├── notes-collection.js
│   │   └── notes-schema.js
│   ├── notes.js
├── notes.js
└── package.json
```

## Development Process, Milestones

1. Phase 1: Application Setup
  - Basic Input & Output from the command line, with flags and arguments

2. Phase 2: Testing and Engineering
  - Uses Classes and Object Orientation
  - Uses TDD Practices
  - Integrates with an online CI framework

3. Phase 3: Persistence
  - Notes may be assigned a category and will be saved in a database
  - Notes may be viewed as a list
  - Notes my be deleted

4. Phase 4: Fit and Finish
  - Data Models are tuned
  - App is Fully Tested
  - App is Fully Documented
  - Notesy is Deployed to NPM and Installable
