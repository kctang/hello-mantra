## Hello, World!

This is a Meteor "Hello, World!" application that applies core concepts described in [Mantra specifications](https://kadirahq.github.io/mantra) version 0.2.0.

* It has a [functional stateless UI component](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d) called `line`. It is rendered with a `width` that can be manipulated via `grow`, `shrink` actions.
* the `grow`, `shrink` actions manipulate `width` stored in `LocalState`.
* A `line` container component is composed using the corresponding `line` UI component, actions (`grow`, `shrink`) and local state (`width`).

These help to understand core concepts of decoupling UI, actions and "dependency injection". Basically, applications should be using the "composed" component.

To use the composed component:

* The composed line component is exposed via `FlowRouter` using a layout (`MainLayout`).
* Route and actions are exposed as the part of the `core` module. When the core module `load()`, it sets the initial `width` for the line component.
* The application defines `ReactiveDict` as `LocalState`, among other context data.
* As with all mantra based applications, `main.js` loads all the modules (only `coreModule` in this demo).

This repository was created as a result of this [issue](https://github.com/kadirahq/mantra/issues/63). Feedback, ideas and corrections appreciated.

##### NPM Scripts

To run code linting and tests:

    npm test

To continuously watch for file changes and run tests (useful during development, especially TDD):

    npm run test-watch

To run code linting:

    npm run lint

