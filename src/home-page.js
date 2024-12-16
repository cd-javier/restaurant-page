import { Element, appendArr } from "./elm-creator";
import heroImgSrc from "./assets/lobby.jpg";
import cardOneImgSrc from "./assets/writers-retreat.jpg";
import cardTwoImgSrc from "./assets/winter.jpg";

const homePage = [];

//------------------------
//   Hero text section
//------------------------
const heroTextWrapper = new Element(0, "text").createElement();
const heroTextArr = [];

const heroHeading = new Element("h2", 0);
heroHeading.innerHTML = "Welcome to <br> The Overlook Hotel";
const heroP = new Element(
  "p",
  0,
  "An iconic retreat nestled in the heart of the Colorado Rockies, where unforgettable views meet the eerie harm of history."
);
const heroBtn = new Element("button", 0, "Book Now");

heroHeading.pushElm(heroTextArr);
heroP.pushElm(heroTextArr);
heroBtn.pushElm(heroTextArr);

// Adds all the contents of the heroText array into the heroText element
appendArr(heroTextWrapper, heroTextArr);

// Adds the heroText section to the homePage
homePage.push(heroTextWrapper);

//------------------------
//      Hero image
//------------------------
const heroImg = new Element("img", "img.hero-img");
heroImg.src = heroImgSrc;

heroImg.pushElm(homePage);

//------------------------
//       Text Body
//------------------------
const textBodyWrapper = new Element(0, "text.two-col").createElement();
const textBodyP = new Element(
  "p",
  0,
  "Step into a world where luxury, mystery, and a touch of the supernatural await. The Overlook Hotel has stood for decades, offering guests an extraordinary experience that blends elegance with the untold stories of its past. Whether you're seeking a serene escape or a place where adventure beckons at every turn, our sprawling grounds and legendary accommodations offer something for every traveler. But remember, not all guests check out when the season ends. Embrace the beauty of isolation, the thrill of the unknown, and the timeless allure of a place like no other. Will you be part of our next chapter?"
);
textBodyWrapper.appendChild(textBodyP.createElement());
homePage.push(textBodyWrapper);

//------------------------
//         Gap
//------------------------
const gap = new Element(0, "two-col").createElement();
homePage.push(gap);

//------------------------
//     Cards Heading
//------------------------
const cardsHeadingWrapper = new Element(0, "text.two-col").createElement();
const cardsHeading = new Element("h2", 0, "Don't miss out:");
cardsHeadingWrapper.appendChild(cardsHeading.createElement());
homePage.push(cardsHeadingWrapper);

//------------------------
//       Card 1
//------------------------
const cardOneWrapper = new Element(0, "card").createElement();
const cardOneArr = [];

const cardOneImg = new Element("img", "img.card-img");
cardOneImg.src = cardOneImgSrc;
cardOneImg.pushElm(cardOneArr);

const cardOneBodyWrapper = new Element(0, "card-body").createElement();
const cardOneBodyArr = [];

const cardOneHeading = new Element("h3", 0, "Relaxing Writers Retreat");
const cardOneBody = new Element(
  "p",
  0,
  "Our Writers' Retreat offers the perfect environment to unwind, recharge, and let your creativity run wild."
);
const cardOneBtn = new Element("button", 0, "Learn more");

cardOneHeading.pushElm(cardOneBodyArr);
cardOneBody.pushElm(cardOneBodyArr);
cardOneBtn.pushElm(cardOneBodyArr);

appendArr(cardOneBodyWrapper, cardOneBodyArr);
cardOneArr.push(cardOneBodyWrapper);

appendArr(cardOneWrapper, cardOneArr);

homePage.push(cardOneWrapper);

//------------------------
//       Card 2
//------------------------
const cardTwoWrapper = new Element(0, "card").createElement();
const cardTwoArr = [];

const cardTwoImg = new Element("img", "img.card-img");
cardTwoImg.src = cardTwoImgSrc;
cardTwoImg.pushElm(cardTwoArr);

const cardTwoBodyWrapper = new Element(0, "card-body").createElement();
const cardTwoBodyArr = [];

const cardTwoHeading = new Element("h3", 0, "Snowed-In Shenanigans");
const cardTwoBody = new Element(
  "p",
  0,
  "Whether you're braving the blizzards or chopping through the competition in our hedge maze, this winter trip will stick with you forever (literally)."
);
const cardTwoBtn = new Element("button", 0, "Learn more");

cardTwoHeading.pushElm(cardTwoBodyArr);
cardTwoBody.pushElm(cardTwoBodyArr);
cardTwoBtn.pushElm(cardTwoBodyArr);

appendArr(cardTwoBodyWrapper, cardTwoBodyArr);
cardTwoArr.push(cardTwoBodyWrapper);

appendArr(cardTwoWrapper, cardTwoArr);

homePage.push(cardTwoWrapper);

//------------------------
//       Export
//------------------------

export { homePage };
