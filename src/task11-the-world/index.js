/**
 * Останавливает время на определённое количество миллисекунд
 *
 * @param {Number} ms - количество миллисекунд, на которое необходимо остановить время
 */
const theWorld = (ms) => {
  const endTime = Date.now() + ms;
  const startSeconds = Math.ceil(ms / 1000);

  for (let i = startSeconds; i >= 0; i--) {
    console.log(`Time will continue running in ${i}`);
    const secondEnd = Date.now() + 1000;
    while (Date.now() < secondEnd && Date.now() < endTime) {
    }
  }
};

console.log("Выведется до остановки времени");

theWorld(3000);

console.log("Выведется после того, как время продолжит ход");
