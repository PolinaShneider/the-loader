export const make = ({tagName, textContent = '', classes = [], attributes = {}}) => {
    const el = document.createElement(tagName);
    
    if (Array.isArray(classes)) {
        el.classList.add(...classes);
    } else {
        el.classList.add(classes)
    }

    for (let attr in attributes) {
        el.setAttribute(attr, attributes[attr]);
    }

    if (textContent) {
        el.textContent = textContent;
    }
    return el;
};