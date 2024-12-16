import { Element, appendArr } from "./elm-creator";
import cardOneImgSrc from "./assets/nye.jpg";
import cardTwoImgSrc from "./assets/writers-retreat.jpg";
import cardThreeImgSrc from "./assets/winter.jpg";

const eventPage = [];

const headingWrapper = new Element(0, "text.two-col").createElement();
const heading = new Element("h2", 0, "Unforgettable Events at the Overlook");
const textBody = new Element("p", 0, "From timeless celebrations to chillingly unique getaways, the Overlook Hotel offers events that are anything but ordinary. Explore our exclusive experiences and make memories that will last a lifetime—or longer.");

headingWrapper.appendChild(heading.createElement())
headingWrapper.appendChild(textBody.createElement())

eventPage.push(headingWrapper)

// Function to create cards more easily
function createCard(imgSrc, heading, body1, body2) {
  const cardWrapper = new Element(0, "card.two-col").createElement();
  const cardArr = [];

  const cardImg = new Element("img", "img.card-img");
  cardImg.src = imgSrc;
  cardImg.pushElm(cardArr);

  const cardBodyWrapper = new Element(0, "card-body").createElement();
  const cardBodyArr = [];

  const cardHeading = new Element("h3", 0, heading);
  const cardBody1 = new Element("p", 0, body1);
  const cardBody2 = new Element("p", 0, body2);
  const cardBtn = new Element("button", 0, "Learn more");

  cardHeading.pushElm(cardBodyArr);
  cardBody1.pushElm(cardBodyArr);
  cardBody2.pushElm(cardBodyArr);
  cardBtn.pushElm(cardBodyArr);

  appendArr(cardBodyWrapper, cardBodyArr);
  cardArr.push(cardBodyWrapper);

  appendArr(cardWrapper, cardArr);

  return cardWrapper;
}

const cardOne = createCard(
  cardOneImgSrc,
  "Eternal Celebrations: New Year’s Eve at the Overlook",
  "Ring in the New Year in timeless style at the Overlook Hotel! Join us for an evening of glitz, glamour, and ghostly grandeur in our grand ballroom. Indulge in exquisite hors d’oeuvres, sip on classic cocktails from our spirited bartenders, and dance the night away with guests who’ve been celebrating here for decades—some longer than others.",
  "As the clock strikes midnight, raise your glass to new beginnings, old memories, and the kind of party that stays with you long after the last toast. Who needs resolutions when you’ve already arrived at the party of the century?"
);

const cardTwo = createCard(
  cardTwoImgSrc,
  "Relaxing Writers Retreat",
  "Escape to the Overlook Hotel for the ultimate writers' retreat—a haven of inspiration and tranquility nestled deep in the mountains. Whether you’re penning the next great novel or journaling your thoughts, our serene atmosphere is perfect for creativity to flourish.",
  "Write by the glow of a roaring fire, wander the quiet halls for ideas that seem to come alive, or take in the stunning mountain views that will leave you breathless (literally, at this altitude). With no distractions—aside from the occasional mysterious typewriter or faint whispers in the distance—you’ll have all the time in the world to focus on your craft."
);

const cardThree = createCard(
  cardThreeImgSrc,
  "Relaxing Writers Retreat",
  "Winter at the Overlook Hotel is nothing short of unforgettable. Get ready to embrace the thrill of being snowed in with activities that range from braving the blizzards to navigating our world-famous hedge maze—just watch your step, it’s easy to lose track of time (and yourself).",
  "Cozy up by the fire with a warm drink, explore the hotel’s many intriguing hallways (some of which you might not remember from your last visit), or simply let the majestic, snow-covered scenery take your breath away. Feeling adventurous? The Overlook offers unique winter experiences that will stick with you forever—sometimes in ways you never expected."
);

eventPage.push(cardOne);
eventPage.push(cardTwo);
eventPage.push(cardThree);

export { eventPage };
