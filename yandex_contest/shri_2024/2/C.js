// C. Темплейтер
// Реализуйте "компоненты" с помощью HTML тега template

// Компонент задается тегом template с атрибутом component. Значение этого атрибута далее будет использоваться как название компонента

// Пример:

// <template component="hello-world">
//     <div>Hello!</div>
// </template>
// <!-- будет использоваться-->

// <hello-world></hello-world>

// <!-- скрипт должен преобразовать такой код в: -->

// <hello-world>
//     <div>Hello!</div>
// </hello-world>

// Компоненты могут иметь пропсы типа str - строки и bool - булевы значения. Объявляться будут в template теге компонента. Пропсы могут иметь дефолтные значения, которые задаются значением атрибута у template тега <name>:<type>="<defaultValue>"

// <template 
//     component="person-component" 
//     name:str="John Doe" 
//     happy:bool="true"
// ></template>
// Использование пропсов:

// Будем внутри темплейта указывать у тегов атрибуты, начинающиеся с ":". Значениями этих атрибутов будут названия пропсов :<attrName>="<propName>". При этом такие служебные атрибуты не должны попадать в итоговый компонент

// <template component="my-input" name:str>
//     <input :value="name">
// </template>
// <my-input name="Den Abramov"></my-input>
// <!-- скрипт должен преобразовать компонент в: -->

// <my-input name="Den Abramov">
//     <input name="Den Abramov">
// </my-input>

// Так же можно использовать внутри темплейта просто форму :<name>, если название данного атрибута совпадает с названием переменной

// Обратите внимание, что для типа bool значением истина считается только "true". Так же если переменная этого типа ложна - атрибут подставлять не нужно

// <template component="my-check" value:bool>
//     <input type="checkbox" :checked="value">
// </template>
// <my-check value="true"></my-check>
// <my-check value="false"></my-check>
// <!-- скрипт должен преобразовать компоненты в: -->

// <my-check value="true">
//     <input type="checkbox" checked="true">
// </my-check>
// <my-check value="false">
//     <input type="checkbox">
// </my-check>

// Зарезервируем использование атрибута :content - он будет подставлять значение переменной в innerHTML

// <template component="hello-person" name:str>
//     Hello!
//     <span :content="name"></span>
// </template>
// <hello-person name="Bill"></hello-person>
// <!-- скрипт должен преобразовать компонент в: -->

// <hello-person name="Bill">
//     Hello!
//     <span>Bill</span>
// </hello-person>

// Примечания
// В тестирующую систему нужно отправлять содержимое файла solution.js

// Не нужно помещать ваш код внутрь подобных конструкций

// document.addEventListener('DOMContentLoaded’, () => { /* your code not here */})
// Не нужно экспортировать ничего через export или module.exports

// Он будет вызван в правильный момент тестирующей системой


const getTemplates = () => {
  const templates = {};

  for (const el of document.querySelectorAll("template[component]")) {
    const nodeName = el.getAttribute("component");
    templates[nodeName] = el;
  }

  return templates;
};

const processAttributes = (element, templateNode, attrName, attrValue) => {
  for (const node of templateNode.querySelectorAll("*")) {
    if (node.hasAttribute(":" + attrName)) {
      node.removeAttribute(":" + attrName);
      node.setAttribute(attrName, attrValue);
    }
  }

  if (!element.hasAttribute(attrName)) {
    element.setAttribute(attrName, attrValue);
  }
};

const processElementAttributes = (element, templateNode) => {
  for (const attr of element.attributes) {
    const attrName = attr.name;
    const attrValue = attr.value;

    for (const node of templateNode.querySelectorAll("*")) {
      for (const templateAttr of node.attributes) {
        if (templateAttr.name.startsWith(":")) {
          const propName = templateAttr.name.slice(1);

          if (propName === attrName) {
            if (attrValue !== "false") {
              node.setAttribute(propName, attrValue);
            }
            node.removeAttribute(":" + propName);
          }
        }

        const propName = templateAttr.name.slice(1);
        const propValue = templateAttr.value;

        if (propValue === attrName) {
          if (propName === "content") {
            node.textContent = attrValue;
          } else {
            if (attrValue === "true" && propName.endsWith(":bool")) {
              node.setAttribute(propName.slice(0, -5), "");
            } else if (!propName.endsWith(":bool")) {
              if (attrValue !== "false") {
                node.setAttribute(propName, attrValue);
              }
            }
          }
          node.removeAttribute(":" + propName);
        }
      }
    }
  }
};

const processElements = (templates) => {
  for (const element of document.body.getElementsByTagName("*")) {
    const tagName = element.tagName.toLowerCase();

    if (templates.hasOwnProperty(tagName)) {
      const templateNode = templates[tagName].content.cloneNode(true);

      for (const attribute of templates[tagName].attributes) {
        if (attribute.name.includes(":")) {
          if (attribute.value === "" && attribute.name.split(":")[1] === "bool") {
            attribute.value = "true";
          }
          const attrName = attribute.name.split(":")[0];
          const attrValue = attribute.value || element.getAttribute(attrName);

          processAttributes(element, templateNode, attrName, attrValue);
        }
      }

      processElementAttributes(element, templateNode);
      element.replaceChildren(templateNode);
    }
  }
};

const main = () => {
  const templates = getTemplates();
  processElements(templates);
};

main();