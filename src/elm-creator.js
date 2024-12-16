class Element {
  constructor(type, classList, textContent) {
    this.type = type;
    this.classList = classList ? classList.split(".") : 0;
    this.textContent = textContent;
  }

  createElement() {
    const elm = document.createElement(this.type);
    if (this.classList) this.classList.forEach((cl) => elm.classList.add(cl));
    if (this.textContent) elm.textContent = this.textContent;
    if (this.innerHTML) elm.innerHTML = this.innerHTML;
    if (this.src) elm.src = this.src;

    return elm;
  }

  pushElm(targetArr) {
    targetArr.push(this.createElement());
  }
}

function appendArr(target, arr) {
  arr.forEach((elm) => target.appendChild(elm));
}

export { Element, appendArr };
