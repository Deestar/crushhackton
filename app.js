// Get User Profile
const userProfile = document.querySelector("#devil");
// Get User Profile
const subMenu = document.querySelector("#menu");
// Get Name from submenu
const subName = document.querySelector("#menu footer h2");
// Get the Items In submenu
const subAnchors = document.querySelectorAll("#menu a");
// Get the Items In submenu
const subHeader = document.querySelector("#menu ul");
// Get the Items In submenu
const subUl = document.querySelector("#menu header");
// Get cancel trial
const cancelTrial = document.querySelector("#trial_cancel");
// Get Plan alert
const planAlert = document.querySelector("#planselect");
// Get Plan alert
const getNotification = document.querySelector("#notification");
// Get Dialog Notification box
const dialog = document.querySelector("#dialog");
// Get Setup Arrow
const setupArrow = document.querySelector("#setup-arrow");
// Get guide steps container
const guideContainer = document.querySelector("#guide-cont");
// Get guide List items
const guidesteps = document.querySelectorAll("#guide-cont li");

// Function to remove a class array from an element or nodelist
const removeClass = (elements, classNames) => {
  // If elements is a single element, convert it to a NodeList
  if (!elements.length) {
    elements = [elements];
  }

  // Loop through each element in the NodeList
  for (var i = 0; i < elements.length; i++) {
    // Remove all specified class names from the current element
    elements[i].classList.remove(...classNames);
  }
};

// Function to add a class array from an element or nodelist
const addClass = (elements, classNames) => {
  // If elements is a single element, convert it to a NodeList
  if (!elements.length) {
    elements = [elements];
  }

  // Loop through each element in the NodeList
  for (var i = 0; i < elements.length; i++) {
    // Remove all specified class names from the current element
    elements[i].classList.add(...classNames);
  }
};
// Check If element has a class
const hasClass = (element, className) => {
  return element.classList.contains(className);
};

// Function to show Menu
const ShowMenu = () => {
  // Remove display hidden and run height animation
  removeClass(subMenu, ["hidden"]);
  //      Add Open Animation
  addClass(subMenu, ["sub-open"]);
  //  Remove the fade animation
  hasClass(subAnchors[0], "fade") && removeClass(subAnchors, ["fade"]);
  hasClass(subName, "fade") && removeClass(subName, ["fade"]);
  //   Remove the close animation
  hasClass(subMenu, "sub-close") && removeClass(subMenu, ["sub-close"]);
  //   After Submenu Animation Runs Add the menu classes and border
  setTimeout(() => {
    removeClass(subAnchors, ["v-o", "h-0"]);
    removeClass(subName, ["v-o", "h-0"]);
    addClass(subUl, ["b-bottom-stroke"]);
    addClass(subHeader, ["b-bottom-stroke"]);
  }, 801);
};

// Function to hide Menu
const HideMenu = () => {
  addClass(subMenu, ["sub-close"]);
  //   Fade the nav items out
  addClass(subAnchors, ["fade"]);
  addClass(subName, ["fade"]);
  //   Remove the open animation class
  removeClass(subMenu, ["sub-open"]);
  // Wrap up submenu
  setTimeout(() => {
    // Hide List Items
    removeClass(subUl, ["b-bottom-stroke"]);
    removeClass(subHeader, ["b-bottom-stroke"]);
    addClass(subAnchors, ["v-o", "h-0"]);
    addClass(subName, ["v-o", "h-0"]);
    addClass(subMenu, ["hidden"]);
  }, 401);
};

// Function to close setup Guide
const closeGuideSteps = () => {
  // Hide List Items
  addClass(guideContainer, ["guide-close"]);
};
// Function to close setup Guide
const showGuideSteps = () => {
  // Hide List Items
  addClass(guideContainer, ["guide-open"]);
};

// Toggle animation when user profile is clicked
userProfile.addEventListener("click", (event) => {
  if (hasClass(subMenu, "hidden")) {
    // If the dialog notification is open
    dialog.close();
  }
  hasClass(subMenu, "hidden") ? ShowMenu() : HideMenu();
});

// Remove plan alert when cancel button is clicked
cancelTrial.addEventListener("click", () => {
  addClass(planAlert, ["fade"]);
  setTimeout(() => {
    addClass(planAlert, ["collapse"]);
  }, 100);
});

// Toggle Notification
getNotification.addEventListener("click", () => {
  if (!dialog.open) {
    // If the submenu is open close it
    !hasClass(subMenu, "hidden") && HideMenu();
  }
  dialog.open ? dialog.close() : dialog.show();
});
