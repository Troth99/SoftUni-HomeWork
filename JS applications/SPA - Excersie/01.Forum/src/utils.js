 export function creatingElements(type, textName, parrent, attributes){
    let element = document.createElement(type);
    element.textContent = textName

    if(parrent){
        parrent.appendChild(element)
    }

    const attributeKeys = Object.keys(attributes);
    for (const attribute of attributeKeys) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    return element
 }