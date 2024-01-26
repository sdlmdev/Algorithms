// A. Кондиционер

// Ограничение времени	1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// В офисе, где работает программист Петр, установили кондиционер нового типа.
// Этот кондиционер отличается особой простотой в управлении.
// У кондиционера есть всего лишь два управляемых параметра: желаемая температура и режим работы.

// Кондиционер может работать в следующих четырех режимах:
// «freeze» — охлаждение. В этом режиме кондиционер может только уменьшать температуру.
// Если температура в комнате и так не больше желаемой, то он выключается.
// «heat» — нагрев. В этом режиме кондиционер может только увеличивать температуру.
// Если температура в комнате и так не меньше желаемой, то он выключается.
// «auto» — автоматический режим. В этом режиме кондиционер может как увеличивать,
// так и уменьшать температуру в комнате до желаемой.
// «fan» — вентиляция. В этом режиме кондиционер осуществляет только вентиляцию воздуха и не изменяет температуру в комнате.

// Кондиционер достаточно мощный, поэтому при настройке на правильный режим работы
// он за час доводит температуру в комнате до желаемой.

// Требуется написать программу, которая по заданной температуре в комнате troom,
// установленным на кондиционере желаемой температуре tcond и режиму работы определяет температуру,
// которая установится в комнате через час.

// Формат ввода

// Первая строка входного файла содержит два целых числа troom, и tcond,
// разделенных ровно одним пробелом (–50 ≤ troom ≤ 50, –50 ≤ tcond ≤ 50).

// Вторая строка содержит одно слово, записанное строчными буквами латинского алфавита — режим работы кондиционера.

// Формат вывода

// Выходной файл должен содержать одно целое число — температуру, которая установится в комнате через час.

// Пример 1

// Ввод	       Вывод
// 10 20       20
// heat

// Пример 2

// Ввод	       Вывод
// 10 20       10
// freeze

// Примечания

// В первом примере кондиционер находится в режиме нагрева.
// Через час он нагреет комнату до желаемой температуры в 20 градусов.

// Во втором примере кондиционер находится в режиме охлаждения.
// Поскольку температура в комнате ниже, чем желаемая,
// кондиционер самостоятельно выключается и температура в комнате не поменяется.

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const [temp, mode] = fileContent.split('\n');
const [troom, tcond] = temp.split(' ').map(Number);

let result;

switch (mode) {
  case 'freeze':
    result = Math.min(troom, tcond);
    break;
  case 'heat':
    result = Math.max(troom, tcond);
    break;
  case 'auto':
    result = tcond;
    break;
  case 'fan':
    result = troom;
    break;
}

fs.writeFileSync('output.txt', result.toString());

// ------------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});

const data = [];
let result;

rl.on('line', line => {
  data.push(line);
  
  if (data.length === 2){
    const [temp, mode] = data;
    const [troom, tcond] = temp.split(' ').map(Number);
    
    switch (mode) {
  	  case 'freeze':
        result = Math.min(troom, tcond);
        break;
      case 'heat':
      	result = Math.max(troom, tcond);
      	break;
  	  case 'auto':
      	result = tcond;
      	break;
  	  case 'fan':
      	result = troom;
      	break;
	  }
    
    rl.close();
    
    console.log(result);
  }
})