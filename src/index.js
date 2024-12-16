import "./styles.css";
import { homePage } from "./home-page";
import { appendArr } from "./elm-creator";
import { eventPage } from "./events";

const wrapper = document.getElementById("content");

// appendArr(wrapper, homePage);
appendArr(wrapper, eventPage)
