/**
 * Executes an non-blocking sleep-timer for given time
 * @param {Number} ms Wait time in milliseconds
 */
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
