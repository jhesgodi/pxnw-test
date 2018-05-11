/**
 * Placeholder function performs no operations
 *
 */
export const noop = () => {
  // No operation performed
};

/**
 * Promise handler, transform a promise resolve into a tuple
 * allowing inline error handling
 *
 * @param {*} promise
 * @return {Array} a tuble based result [error, data]
 *
 */
export const awaitTo = promise => {
  return promise.then(({ data }) => [null, data]).catch(err => {
    return [err, null];
  });
};

/**
 * Gets the extension from a file
 *
 * @param {String} path file name
 * @return {Array} a tuble based result ['fileName', 'fileExtension']
 *
 */
export const getExtension = path => {
  return path.split(/\.(\w+)$/, 2);
};
