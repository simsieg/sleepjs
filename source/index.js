const sleep = async time =>
  new Promise(resolve => setTimeout(() => resolve(time), time))

const sleepSeconds = async timeInSeconds => sleep(timeInSeconds * 1000)
const sleepMinutes = async timeInMinutes => sleepSeconds(timeInMinutes * 60)
const sleepHours = async timeInHours => sleepMinutes(timeInHours * 60)
const sleepDays = async timeInDays => sleepHours(timeInDays * 24)

exports = module.exports = sleep
exports.sleep = sleep
exports.sleepMilliseconds = sleep
exports.sleepSeconds = sleepSeconds
exports.sleepMinutes = sleepMinutes
exports.sleepHours = sleepHours
exports.sleepDays = sleepDays
