const sleep = async (time: number): Promise<number> =>
  new Promise(resolve => setTimeout(() => resolve(time), time))

const sleepSeconds = async (timeInSeconds: number): Promise<number> => sleep(timeInSeconds * 1000)
const sleepMinutes = async (timeInMinutes: number): Promise<number> => sleepSeconds(timeInMinutes * 60)
const sleepHours = async (timeInHours: number): Promise<number> => sleepMinutes(timeInHours * 60)
const sleepDays = async (timeInDays: number): Promise<number> => sleepHours(timeInDays * 24)

export {
  sleep,
  sleep as sleepMilliseconds,
  sleepSeconds,
  sleepMinutes,
  sleepHours,
  sleepDays,
}
