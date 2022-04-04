import { NETOLOGY_URL } from './constants.js';
import { make } from './utils.js';

export const makeLoader = () => {
    const loader = make({ tagName: 'span', classes: 'loader' })
    return loader;
}

export const makeTitle = () => {
    const title = make({ tagName: 'h1', textContent: 'Изучайте', classes: 'content-title' });
    const span = make({ tagName: 'span', textContent: ' актуальные темы', classes: 'emphasize' });

    title.append(span);
    return title;
}

export const makeListItem = (course) => {
    const item = make({ tagName: 'li' });

    const itemTextholder = make({ tagName: 'div' });
    const itemTitle = make({ tagName: 'h2', textContent: course.direction.title })
    const itemContent = make({ tagName: 'p', textContent: `${countCourses(course.groups)} курсов`, classes: 'course-count' });
    itemTextholder.append(itemTitle, itemContent);

    const itemPlaceholder = make({ tagName: 'div', classes: 'course-placeholder' })
    const link = make({ 
        tagName: 'a', 
        attributes: { href: `${NETOLOGY_URL}${course.direction.link}`, target: '_blank' },
        classes: ['courses-item', 'course-link']
    })
    link.append(itemTextholder, itemPlaceholder);
    item.append(link);

    return item;
}

export const countCourses = (groups) => {
    return groups.reduce((total, item) => total + item.items.length, 0);
};

export const renderCourses = (courses = []) => {
    const container = make({ tagName: 'div', classes: 'container' });
    const title = makeTitle();
    const list = make({ tagName: 'ul', classes: 'courses-list' });
    for (let course of courses) {
        const item = makeListItem(course)
        list.append(item);
    }
    container.append(title, list);
    return container;
};