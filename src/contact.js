import { Element, appendArr } from "./elm-creator";
import contactImgSrc from "./assets/lobby.jpg";

const contactPage = [];

// Heading
const headingWrapper = new Element(0, "text.two-col").createElement();
const heading = new Element("h2", 0, "Contact Us");
const textBody = new Element(
  "p",
  0,
  "Have questions? Want to book your stay or learn more about our events? Reach out to the Overlook Hotel—we’re here to assist, day or night."
);

headingWrapper.appendChild(heading.createElement());
headingWrapper.appendChild(textBody.createElement());

contactPage.push(headingWrapper);

// Body
const contactBody = new Element(0, "text.two-col").createElement();
const contactBodyArr = [];

//Subheading
// Text
const subheading = new Element(
  "h3",
  0,
  "Use one of the following methods of contact:"
);
subheading.pushElm(contactBodyArr);

// Contact List
const contactList = new Element("ul").createElement();
const contactListArr = [];

const listPhone = new Element("li", 0);
listPhone.innerHTML = "<span>Phone Number:</span> (555) 192-1921";
listPhone.pushElm(contactListArr);

const listMail = new Element("li", 0);
listMail.innerHTML = "<span>Email:</span> reservations@overlook.hotel";
listMail.pushElm(contactListArr);

const listAddress = new Element("li", 0);
listAddress.innerHTML =
  "<span>Address:</span><p>The Overlook Hotel<br>42 Mountain View Drive<br>Sidewinder, Colorado</p>";
listAddress.pushElm(contactListArr);

appendArr(contactList, contactListArr);
contactBodyArr.push(contactList);

// Text
const text = new Element(
  "p",
  0,
  "We look forward to making your stay unforgettable."
);
text.pushElm(contactBodyArr);

appendArr(contactBody, contactBodyArr);
contactPage.push(contactBody);

// Img
const contactImg = new Element("img","img.two-col")
contactImg.src = contactImgSrc;

contactPage.push(contactImg.createElement())


// Disclaimer
const disclaimerWrapper = new Element(0, "text.two-col.disclaimer").createElement();
const disclaimerWrapperArr = [];

const disclaimerHeading = new Element("h3", 0, "DISCLAIMER");
disclaimerHeading.pushElm(disclaimerWrapperArr);

const disclaimerBody = new Element(
  "p",
  0,
  'Please note that Room 237 is currently overbooked for the foreseeable future. While we understand its allure, the room has a reputation for "extending" its vacancies, and we advise against attempting to request it. We promise the rest of our luxurious accommodations will more than make up for it—unless you’re into that sort of thing. Book your stay today, and experience a room with a view you won’t soon forget (or ever escape).'
);
disclaimerBody.pushElm(disclaimerWrapperArr);

appendArr(disclaimerWrapper, disclaimerWrapperArr);
contactPage.push(disclaimerWrapper);

export { contactPage };
