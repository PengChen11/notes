# LAB: Advanced Mongo/Mongoose

Notesy Phase 4: Continue working on a multi-day build of a command-line (Terminal-based) note taking application.

In this lab, we’ll be refining our persistence layer by implementing a CRUD interface to our Mongoose Schema as a collection of data models.

## Phase 4 Requirements

From a business/user perspective, the requirements remain unchanged from the previous lab

Users will be able to create and save notes to a database, organize them into categories, view, and delete them.

Upon completion of this phase, your Notesy application should be complete and ready for final delivery

## Technical Requirements / Notes

Although the requirements are the same as the previous lab, in this assignment you’ll be refactoring the application as follows

- Create a notes “collection” through which you will perform CRUD operations with your notes mongoose schema.
- model/notes-collection.js
  - Requires the notes-schema.js module
  - Implement the following collection interface methods for CRUD operations
    - `get()`
    - `create()`
    - `update()`
    - `delete()`
  - Each method should invoke the proper mongoose method via your schema
  - Write a suite of tests, using TDD to get the tests and your model working in sync.
  - Use @code-fellows/supergoose
- Refactor your lib/notes.js module to save, list, delete notes using the collection interface rather than the schema/mongoose methods directly
