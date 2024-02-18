// 15. Великое Лайнландское переселение

// Ограничение времени 1 секунда
// Ограничение памяти	256Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Лайнландия представляет из себя одномерный мир, являющийся прямой, на котором располагаются N городов,
// последовательно пронумерованных от 0 до N - 1 .
// Направление в сторону от первого города к нулевому названо западным, а в обратную — восточным.
// Когда в Лайнландии неожиданно начался кризис, все были жители мира стали испытывать глубокое смятение.
// По всей Лайнландии стали ходить слухи, что на востоке живётся лучше, чем на западе.
// Так и началось Великое Лайнландское переселение.
// Обитатели мира целыми городами отправились на восток, покинув родные улицы, и двигались до тех пор, пока не приходили в город, в котором средняя цена проживания была меньше, чем в родном.

// Формат ввода
// В первой строке дано одно число N (2 ≤ N ≤ 10**5) — количество городов в Лайнландии.
// Во второй строке дано N чисел ai (0 ≤ ai ≤ 10**9) — средняя цена проживания в городах с нулевого по
// (N - 1)-ый соответственно.

// Формат вывода
// Для каждого города в порядке с нулевого по (N - 1)-ый выведите номер города,
// в который переселятся его изначальные жители.
// Если жители города не остановятся в каком-либо другом городе,
// отправившись в Восточное Бесконечное Ничто, выведите -1.

// Пример
// Ввод	                     Вывод
// 10                        -1 4 3 4 -1 6 9 8 9 -1
// 1 2 3 2 1 4 2 5 3 1

const checkCities = (citiesArr) => {
  const stack = [];
  
  for (let i = 0; i < citiesArr.length; i++) {
    const curCity = [citiesArr[i], i];

    while (stack.length > 0 && stack[stack.length - 1][0] > curCity[0]) {
      citiesArr[stack[stack.length - 1][1]] = i;
      stack.pop();
    }

    stack.push(curCity);
  }

  for (let i = 0; i < stack.length; i++) {
    citiesArr[stack[i][1]] = -1;
  }

  console.log(citiesArr.join(' '));
};

const fs = require('fs');
const [[n], cities] = fs.readFileSync('input.txt', 'utf-8').trim().split('\n').map(
  el => el.split(' ').map(Number)
);

checkCities(cities);