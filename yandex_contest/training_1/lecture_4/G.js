// G. Банковские счета

// Ограничение времени 1 секунда
// Ограничение памяти	64Mb
// Ввод	стандартный ввод или input.txt
// Вывод стандартный вывод или output.txt

// Некоторый банк хочет внедрить систему управления счетами клиентов, поддерживающую следующие операции:
// Пополнение счета клиента.
// Снятие денег со счета.
// Запрос остатка средств на счете.
// Перевод денег между счетами клиентов.
// Начисление процентов всем клиентам.

// Вам необходимо реализовать такую систему.
// Клиенты банка идентифицируются именами (уникальная строка, не содержащая пробелов).
// Первоначально у банка нет ни одного клиента.
// Как только для клиента проводится операция пололнения, снятия или перевода денег,
// ему заводится счет с нулевым балансом.
// Все дальнейшие операции проводятся только с этим счетом.
// Сумма на счету может быть как положительной, так и отрицательной, при этом всегда является целым числом.

// Формат ввода
// Входной файл содержит последовательность операций.
// Возможны следующие операции: DEPOSIT name sum - зачислить сумму sum на счет клиента name.
// Если у клиента нет счета, то счет создается.
// WITHDRAW name sum - снять сумму sum со счета клиента name.
// Если у клиента нет счета, то счет создается.
// BALANCE name - узнать остаток средств на счету клиента name.
// TRANSFER name1 name2 sum - перевести сумму sum со счета клиента name1 на счет клиента name2.
// Если у какого-либо клиента нет счета, то ему создается счет.
// INCOME p - начислить всем клиентам, у которых открыты счета, p% от суммы счета.
// Проценты начисляются только клиентам с положительным остатком на счету,
// если у клиента остаток отрицательный, то его счет не меняется.
// После начисления процентов сумма на счету остается целой,
// то есть начисляется только целое число денежных единиц.
// Дробная часть начисленных процентов отбрасывается.

// Формат вывода
// Для каждого запроса BALANCE программа должна вывести остаток на счету данного клиента.
// Если же у клиента с запрашиваемым именем не открыт счет в банке, выведите ERROR.

// Пример 1
// Ввод	                          Вывод
// DEPOSIT Ivanov 100             105
// INCOME 5                       -50
// BALANCE Ivanov                 ERROR
// TRANSFER Ivanov Petrov 50
// WITHDRAW Petrov 100
// BALANCE Petrov
// BALANCE Sidorov

// Пример 2
// Ввод	                          Вывод
// BALANCE Ivanov                 ERROR
// BALANCE Petrov                 ERROR
// DEPOSIT Ivanov 100             100
// BALANCE Ivanov                 ERROR
// BALANCE Petrov                 150
// DEPOSIT Petrov 150             110
// BALANCE Petrov                 165
// DEPOSIT Ivanov 10              156
// DEPOSIT Petrov 15              165
// BALANCE Ivanov                 156
// BALANCE Petrov                 179
// DEPOSIT Ivanov 46
// BALANCE Ivanov
// BALANCE Petrov
// DEPOSIT Petrov 14
// BALANCE Ivanov
// BALANCE Petrov

// Ввод	                          Вывод
// Ввод	Вывод                     ERROR
// BALANCE a                      ERROR
// BALANCE b                      100
// DEPOSIT a 100                  ERROR
// BALANCE a                      80
// BALANCE b                      ERROR
// WITHDRAW a 20                  80
// BALANCE a                      -78
// BALANCE b                      -704
// WITHDRAW b 78                  -78
// BALANCE a                      -704
// BALANCE b                      771
// WITHDRAW a 784
// BALANCE a
// BALANCE b
// DEPOSIT b 849
// BALANCE a
// BALANCE b

const getBalance = (dataArr) => {
  const customerBalances = {};
  const res = [];

  for (let operation of dataArr) {
    let [operationType, name, sum] = operation.split(' ');
    sum = +sum;

    switch (operationType) {
      case 'DEPOSIT':
        if (!customerBalances[name]) customerBalances[name] = 0;
        customerBalances[name] += sum;
        break;
      case 'WITHDRAW':
        if (!customerBalances[name]) customerBalances[name] = 0;
        customerBalances[name] -= sum;
        break;
      case 'BALANCE':
        if (customerBalances[name] !== undefined) {
          res.push(customerBalances[name]);
        } else res.push('ERROR');
        break;
      case 'TRANSFER':
        let [from, to, curSum] = operation.split(' ').slice(1);
        curSum = +curSum;

        if (!customerBalances[from]) customerBalances[from] = 0;
        if (!customerBalances[to]) customerBalances[to] = 0;

        customerBalances[from] -= curSum;
        customerBalances[to] += curSum;
        break;
      case 'INCOME':
        const percent = +operation.split(' ')[1];

        for (let key in customerBalances) {
          if (customerBalances[key] > 0) {
            customerBalances[key] += Math.floor(
              customerBalances[key] * (percent / 100)
            );
          }
        }
        break;
    }
  }

  return res.join('\n');
};

const fs = require('fs');
const operations = fs.readFileSync('input.txt', 'utf8').trim().split('\n');

fs.writeFileSync('output.txt', getBalance(operations));