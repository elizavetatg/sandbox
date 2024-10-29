/**
 * Кастомная реализация метода Array.prototype.filter
 *
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет",
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
  if (inplace) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (!filterFn(array[i])) {
        array.splice(i, 1);
      }
    }
    return array;
  } else {
    const result = [];
    for (const element of array) {
      if (filterFn(element)) {
        result.push(element);
      }
    }
    return result;
  }
};
