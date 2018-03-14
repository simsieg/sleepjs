const assert = require('assert')
const describe = require('mocha').describe
const it = require('mocha').it

const sleepjs = require('../source/index')

describe('SleepJs', () => {
  it('should return contain all available functions', () => {
    const sleep = sleepjs.sleep
    const sleepMilliseconds = sleepjs.sleepMilliseconds
    const sleepSeconds = sleepjs.sleepSeconds
    const sleepMinutes = sleepjs.sleepMinutes
    const sleepHours = sleepjs.sleepHours
    const sleepDays = sleepjs.sleepDays

    assert.equal(typeof sleep, 'function')
    assert.equal(typeof sleepMilliseconds, 'function')
    assert.equal(typeof sleepSeconds, 'function')
    assert.equal(typeof sleepMinutes, 'function')
    assert.equal(typeof sleepHours, 'function')
    assert.equal(typeof sleepDays, 'function')
  })
  it('should execute sleepjs correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs(1000)
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleep correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleep(1000)
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleepMilliseconds correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleepMilliseconds(1000)
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleepSeconds correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleepSeconds(1)
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleepMinutes correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleepMinutes(1 / 60)
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleepHours correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleepHours(1 / (60 * 60))
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
  it('should execute sleepDays correctly', async () => {
    const startDate = Date.now()
    const result = await sleepjs.sleepDays(1 / (60 * 60 * 24))
    assert.equal(result, 1000)
    assert(startDate <= Date.now() - 1000)
  })
})
