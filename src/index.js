import { make } from './utils.js';
import {renderCourses, makeLoader} from './dom-helpers.js';

import './styles.css';

const REQUEST_URL = 'https://raw.githubusercontent.com/netology-code/ajs-task/master/netology.json';
const root = document.querySelector('#root');

const renderContent = (data) => {
    const template = renderCourses(data);
    root.append(template);
}

const showError = () => {
    const error = make({tagName: 'p', textContent: 'Не удалось загрузить данные о курсах', classes: 'error-message'});
    root.append(error);
}

const init = async() => {
    const loader = makeLoader();
    root.append(loader) 
    try {
        const response = await fetch(REQUEST_URL)
        const {data} = await response.json()
        renderContent(data);
    } catch (e) {
        console.error(e);
        showError();
    } finally {
        loader.remove();
    }
}

init()