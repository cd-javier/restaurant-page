import { Element, appendArr } from "./elm-creator";

const homePage = [];

const heroHeading = new Element("h2", 0);
heroHeading.innerHTML = "Welcome to <br> The Overlook Hotel";
const heroP = new Element(
  "p",
  0,
  "An iconic retreat nestled in the heart of the Colorado Rockies, where unforgettable views meet the eerie harm of history."
);
const heroBtn = new Element("button", 0, "Book Now");

const heroTextArr = [];
heroHeading.pushElm(heroTextArr);
heroP.pushElm(heroTextArr);
heroBtn.pushElm(heroTextArr);

const heroText = new Element("div", "text").createElement();

appendArr(heroText, heroTextArr);
homePage.push(heroText);

export { homePage };
