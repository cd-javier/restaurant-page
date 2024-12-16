import "./styles.css";
import { appendArr } from "./elm-creator";
import { homePage } from "./home-page";
import { eventPage } from "./events";
import { contactPage } from "./contact";

(function eventListeners() {
  const wrapper = document.getElementById("content");
  const homeBtn = document.getElementById("home");
  const eventsBtn = document.getElementById("events");
  const contactBtn = document.getElementById("contact");

  homeBtn.addEventListener("click", renderHome);
  eventsBtn.addEventListener("click", renderEvents);
  contactBtn.addEventListener("click", renderContact);
  document.addEventListener("DOMContentLoaded", renderHome);

  function renderHome() {
    wrapper.innerHTML = "";
    appendArr(wrapper, homePage);
    homeBtn.classList.add("active")
    eventsBtn.classList.remove("active")
    contactBtn.classList.remove("active")
  }
  
  function renderEvents() {
    wrapper.innerHTML = "";
    appendArr(wrapper, eventPage);
    homeBtn.classList.remove("active")
    eventsBtn.classList.add("active")
    contactBtn.classList.remove("active")
  }
  
  function renderContact() {
    wrapper.innerHTML = "";
    appendArr(wrapper, contactPage);
    homeBtn.classList.remove("active")
    eventsBtn.classList.remove("active")
    contactBtn.classList.add("active")
  }
})();
