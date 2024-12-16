import "./styles.css";
import { homePage } from "./home-page";
import { appendArr } from "./elm-creator";

const wrapper = document.getElementById("content");

appendArr(wrapper, homePage);
