# SleepJS

[![Build Status](https://travis-ci.org/simsieg/sleepjs.svg?branch=master)](https://travis-ci.org/simsieg/sleepjs) [![Coverage Status](https://coveralls.io/repos/github/simsieg/sleepjs/badge.svg?branch=master)](https://coveralls.io/github/simsieg/sleepjs?branch=master) <br />

Asyncronus sleep functions for Node.js.

## Installation

Install sleepjs with npm:

```bash
npm install @simsieg/sleepjs
```

Or with yarn:

```bash
yarn add @simsieg/sleepjs
```

## Usage

The default function sleeps for a time given in milliseconds.
But also different sleep functions can be required.

### Async / Await

The sleep timer can be awaited with async / await.

```javascript
const sleep = require('@simsieg/sleepjs')

async function myFunction () {
  await sleep(500)
  console.info('500 ms later')
}

myFunction()
```

### Promise

The Promise returns the value of slept milliseconds when it resolves.

```javascript
const sleepMinutes = require('@simsieg/sleepjs').sleepMinutes

function myFunction () {
  return sleepMinutes(5)
    .then(time => {console.info(`${time} ms later`)})
}

myFunction() // Will print: '300000 ms later'
```

### Concurrent

Different sleep instances can be run and awaited concurrently with `Promise.all`.

```javascript
const sleep = require('@simsieg/sleepjs')

async function myFunction () {
  await Promise.all([sleep(100), sleep(100), sleep(200)])
}

myFunction() // Will take only slightly more than 200 ms
```

## Functions

Sleepjs includes several functions to wrap common sleep times:

```javascript
const sleep = require('@simsieg/sleepjs').sleep
const sleepMilliseconds = require('@simsieg/sleepjs').sleepMilliseconds
const sleepSeconds = require('@simsieg/sleepjs').sleepSeconds
const sleepMinutes = require('@simsieg/sleepjs').sleepMinutes
const sleepHours = require('@simsieg/sleepjs').sleepHours
const sleepDays = require('@simsieg/sleepjs').sleepDays
```
