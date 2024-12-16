import "./styles.css";
import { appendArr } from "./elm-creator";
import { homePage } from "./home-page";
import { eventPage } from "./events";
import { contactPage } from "./contact";

const wrapper = document.getElementById("content");

// appendArr(wrapper, homePage);
// appendArr(wrapper, eventPage);
appendArr(wrapper, contactPage);
