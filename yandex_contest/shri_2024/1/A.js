// A. Озаряющий луч
// Ограничение времени	10 секунд
// Ограничение памяти	640.0 Мб
// Ввод	input.js
// Вывод	output.png
// Сидя за рабочим столом, разработчица Арина заглядывала в окно своего мрачного города, где редко светило солнце. Внезапно к ней пришло вдохновение. Она решила внести свет и тепло в жизнь горожан с помощью кода, осветить каждый уголок интернета солнечными лучами. Так начался её новый проект. На практике, правда, сайт оказался не таким уж привлекательным, как она представляла. Казалось, сайт был просто недостаточно ярким для этого города. Немного подумав, Арина пришла к решению - можно сделать блоки текста на сайте сияющими, выделяя слова цветом и подчёркивая их светлыми лучами.

// Нужно помочь Арине раскрасить блоки на сайте. Одним из способов сделать это, является CSS Custom Highlight API

// Полезные ссылки
// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API
// https://www.bram.us/2024/02/18/custom-highlight-api-for-syntax-highlighting
// https://css-tricks.com/css-custom-highlight-api-early-look

// Формат ввода
// Для решения задачи вам будет предоставлен html файл, который представляет из себя приложение с поиском, текстовым блоком и переключателем для тестов. Каждый раз, когда в поиске изменяется значение, в коде вызывается функция highlight.

// Тест — это объект, который состоит из следующих полей

// comment – краткое описание того, что этот тест проверяет
// content – вёрстка, в которой необходимо найти и выделить стилями некоторый текст
// searchFor — текст, который требуется найти на странице и выделить стилями
// Внутри архива с условием задаче также добавлены скриншоты с правильной работой программы для первых трёх тестов

// Формат вывода
// Ваше решение будет проверяться с помощью скриншотного тестирования. В качестве ответа требуется скопировать целиком содержимое тега script, в котором находится функция highlight.

// Примечания
// Для стилизации выделенного текста можно использовать либо класс search-results, либо псевдо-элемент highlight с идентификатором search-results
// Поиск выделяет текстовые блоки, не обращая внимания на регистр (верхний или нижний)
// Текст, который необходимо выделить, может находиться в разных тегах: вложенных и в соседних
// Текст, визуально, разделённый пробелом, в разметке может быть обозначен любым символом пробела
// Для решения используйте, пожалуйста, современные версии браузеров
// Скачать условие задачи

const searchInput = document.getElementById('site-search');
const currentTest = document.getElementById("tests-select");

const getTextNodes = (root) => {
  const treeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let currentNode = treeWalker.nextNode();

  while (currentNode) {
    textNodes.push(currentNode);
    currentNode = treeWalker.nextNode();
  }

  return textNodes;
};

const findTextIndices = (allText, searchText) => {
  const indices = [];

  for (let i = 0; i < allText.length; i += 1) {
    if (allText.substring(i, i + searchText.length) === searchText) {
      indices.push(i);
    }
  }

  return indices;
};

const createRanges = (textNodes, textIndices, searchText) => {
  const ranges = [];

  textIndices.forEach((textIndex) => {
    let firstIndex = 0;
    let lastIndex = 0;
    let firstNode = null;
    let lastNode = null;
    let curIndex = 0;

    for (let i = 0; i < textNodes.length; i += 1) {
      const text = textNodes[i].textContent.toLowerCase();
      const textLength = text.length;
      if (textIndex < textLength + curIndex && curIndex <= textIndex) {
        firstIndex = textIndex - curIndex;
        firstNode = textNodes[i];
      }

      if (curIndex + textLength >= textIndex + searchText.length
        && textIndex + searchText.length > curIndex
      ) {
        lastIndex = textIndex + searchText.length - curIndex;
        lastNode = textNodes[i];
      }

      curIndex += textLength;
    }

    if (lastNode && firstNode) {
      const range = new Range();
      range.setStart(firstNode, firstIndex);
      range.setEnd(lastNode, lastIndex);
      ranges.push(range);
    }
  });

  return ranges;
};

const highlightText = () => {
  const root = document.getElementById('root');

  if (!CSS.highlights) return;

  CSS.highlights.clear();

  const searchText = searchInput.value.trim().toLowerCase();

  if (!searchText) return;

  const textNodes = getTextNodes(root);
  const allText = textNodes.map((node) => node.textContent.toLowerCase().replace(/\s/g, ' ')).join('');
  const textIndices = findTextIndices(allText, searchText);
  const ranges = createRanges(textNodes, textIndices, searchText);

  const searchResultsHighlight = new Highlight(...ranges);

  CSS.highlights.set("search-results", searchResultsHighlight);
};

searchInput.addEventListener("input", highlightText);
currentTest.addEventListener("change", highlightText);


