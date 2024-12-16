class Element {
  constructor(type, classList, textContent) {
    this.type = type ? type : "div";
    this.classList = classList ? classList.split(".") : 0;
    this.textContent = textContent;
  }

  // Turns the object into an HTML element
  createElement() {
    const elm = document.createElement(this.type);
    if (this.classList) this.classList.forEach((cl) => elm.classList.add(cl));
    if (this.textContent) elm.textContent = this.textContent;
    if (this.innerHTML) elm.innerHTML = this.innerHTML;
    if (this.src) elm.src = this.src;

    return elm;
  }

  // Turns the object into an HTML element and pushes it into an array
  pushElm(targetArr) {
    targetArr.push(this.createElement());
  }
}

// Appends every element of an array into a wrapper
function appendArr(target, arr) {
  arr.forEach((elm) => target.appendChild(elm));
}

export { Element, appendArr };
