function editElement(element, match, replacer) {
    if (element.textContent.includes(match)){
        element.textContent = element.textContent.split(match).join(replacer);
    }

}