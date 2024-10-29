/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const result = {};
    for (const value of Object.values(obj)) {
      result[typeof value] = isNaN(result[typeof value]) ? 1 : result[typeof value] + 1;
    }
    return result;
};
