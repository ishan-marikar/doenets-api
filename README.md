# doenets-api

A small library that works as a wrapper to the API that is used behind the DOENETS app. I was curious of a way to parse the results in a more machine-readable format for a weird little side project I was planning on doing and created this to facilitate it.

I do believe in having an open-data initiative and find no harm in having this released, but if you think it does, do let me know. Having data accessible this way allows people to represent them in newer, creative and more meaningful ways.

Also, I did this out of curiosity and to satisfy the mad scientist in me, so please don't sue me ^^"

## Installation

npm install doenets-api --save
or
yarn add doenets-api

## Usage

```js
examResults.getCurrentExams().then(console.log);

// DISCLAIMER: I picked these index numbers off Facebook's search feature to test.
// Send in a PR or create an issue to remove it.
examResults.getALResults("5026024").then(console.log);
examResults.getOLResults("60043156").then(console.log);
examResults.getGrade5Results("2905809").then(console.log);
```

## Tests

No tests yet. I like to live dangerously.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

- 1.0.0 Initial release
- 1.0.1 Add retry on fail functionality
