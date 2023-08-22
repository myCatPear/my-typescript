"use strict";
const data = [
    { group: 1, name: "Denis" },
    { group: 1, name: "Anna" },
    { group: 2, name: "Kostya" },
];
function group(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let currentElement = map[itemKey];
        if (Array.isArray(currentElement)) {
            currentElement.push(item);
        }
        else {
            currentElement = [item];
        }
        map[itemKey] = currentElement;
        return map;
    }, {});
}
const res = group(data, "group");
console.log(res);
