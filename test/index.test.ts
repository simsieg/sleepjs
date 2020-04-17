import {
  sleep,
  sleepMilliseconds,
  sleepSeconds,
  sleepMinutes,
  sleepHours,
  sleepDays,
} from '../source/index'

test('should return contain all available functions', () => {
  expect(typeof sleep).toBe('function')
  expect(typeof sleepMilliseconds).toBe('function')
  expect(typeof sleepSeconds).toBe('function')
  expect(typeof sleepMinutes).toBe('function')
  expect(typeof sleepHours).toBe('function')
  expect(typeof sleepDays).toBe('function')
})
test('should execute sleep correctly', async () => {
  const startDate = Date.now()
  const result = await sleep(1000)
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
test('should execute sleepMilliseconds correctly', async () => {
  const startDate = Date.now()
  const result = await sleepMilliseconds(1000)
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
test('should execute sleepSeconds correctly', async () => {
  const startDate = Date.now()
  const result = await sleepSeconds(1)
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
test('should execute sleepMinutes correctly', async () => {
  const startDate = Date.now()
  const result = await sleepMinutes(1 / 60)
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
test('should execute sleepHours correctly', async () => {
  const startDate = Date.now()
  const result = await sleepHours(1 / (60 * 60))
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
test('should execute sleepDays correctly', async () => {
  const startDate = Date.now()
  const result = await sleepDays(1 / (60 * 60 * 24))
  expect(result).toBe(1000)
  expect(startDate <= Date.now() - 1000).toBeTruthy()
})
