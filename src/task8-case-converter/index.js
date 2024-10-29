
/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    return snakeCaseString
      .split('_')
      .reduce((previousValue, currentValue, currentIndex) =>
        currentIndex === 0 ? currentValue : previousValue + currentValue[0].toUpperCase() + currentValue.slice(1)
    , '')
};
