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
// Get guide buttons
const guidebtns = document.querySelectorAll("#guide-cont>li>div> button>svg");
// Get the Use tags
const guideUse = document.querySelectorAll("#guide-cont button use");
// Get Guide articles
const guideArticles = document.querySelectorAll("#guide-cont article");
// Get Guide articles
const guideMains = document.querySelectorAll("#guide-cont footer");
// Get Guide Images
const guideImages = document.querySelectorAll("#guide-cont img");
// Get guide count
const guidecount = document.querySelector("#guide-count");
// Get guide progress
const guideprogress = document.querySelector("#guide-progress");
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
  //   Remove the close animation
  hasClass(subMenu, "sub-close") && removeClass(subMenu, ["sub-close"]);
};

// Function to hide Menu
const HideMenu = () => {
  addClass(subMenu, ["sub-close"]);
  //   Remove the open animation class
  removeClass(subMenu, ["sub-open"]);
  // Wrap up submenu
  setTimeout(() => {
    addClass(subMenu, ["hidden"]);
  }, 401);
};

// Function to close setup Guide
const closeGuideSteps = () => {
  // Remove the open class if it has been toggled
  hasClass(guideContainer, "guide-open") &&
    removeClass(guideContainer, ["guide-open"]);
  // Remove the unclicked class if its the first click
  hasClass(guideContainer, "unclicked") &&
    removeClass(guideContainer, ["unclicked"]);
  // Hide Guide List
  addClass(guideContainer, ["guide-close"]);
};

// Function to close setup Guide
const showGuideSteps = () => {
  // Remove the close class if it has been toggled
  hasClass(guideContainer, "guide-close") &&
    removeClass(guideContainer, ["guide-close"]);
  // Show Guide List
  addClass(guideContainer, ["guide-open"]);
};

// Function to change the circle of the guide btn on an event
function hoverGuideCircle(event) {
  event.stopPropagation();
  const { target } = event;
  const getUse = target.firstElementChild;
  getUse.setAttribute("xlink:href", "#lhover");
}
function hoverOutGuideCircle(event) {
  event.stopPropagation();
  const { target } = event;
  const getUse = target.firstElementChild;
  getUse.setAttribute("xlink:href", "#linitial");
}

// Function to Collapse Guide
const closeGuideInfo = (index) => {
  //  Get the guide li
  const getCont = guidesteps[index];
  // Get the article
  const getArticle = guideArticles[index];
  // Get the footer
  const getFooter = guideMains[index];
  // Get the Image
  const getImage = guideImages[index];
  // Remove guide-open added by show function
  hasClass(getArticle, "guide-open") && removeClass(getArticle, ["guide-open"]);
  //  --->Ends

  // Add pointer class
  addClass(getArticle, ["cursor-pointer"]);
  // Remove the ash background
  removeClass(getCont, ["bg-ash"]);
  // Remove Padding from footer and collapse
  addClass(getFooter, ["pb-0", "collapse"]);
  // Remove Guide Image
  addClass(getImage, ["collapse"]);
};

// Function to Open A Guide
const ShowGuideInfo = (index) => {
  //  Get the guide li
  const getCont = guidesteps[index];
  // Get the article
  const getArticle = guideArticles[index];
  // Get the footer
  const getFooter = guideMains[index];
  // Get the Image
  const getImage = guideImages[index];
  // Remove guide-open added by close function
  hasClass(getFooter, "collapse") && removeClass(getFooter, ["collapse"]);
  //  --->Ends

  // If there is a max-h-0 class from first load remove it
  hasClass(getArticle, "max-h-0") && removeClass(getArticle, ["max-h-0"]);
  //  --->Ends

  // remove pointer class
  removeClass(getArticle, ["cursor-pointer"]);
  // add the ash background
  addClass(getCont, ["bg-ash"]);
  // Run the Open height animation
  addClass(getArticle, ["guide-open"]);
  // add default Padding from footer
  removeClass(getFooter, ["pb-0"]);
  // Add Guide Image
  removeClass(getImage, ["collapse"]);
};

// Get the previosly open index ~ mini useState
let prevOpen = 0;
// Array state for checked index ~ mini useState
let checkedArray = [];
// Function to change button to checked when clicked
const RollCheck = function (index) {
  const getUse = guideUse[index];
  const isClicked = getUse.getAttribute("xlink:href");
  if (isClicked === "#linitial" || isClicked === "#lhover") {
    // Run button clicked effect
    getUse.setAttribute("xlink:href", "#lloader");
    setTimeout(() => {
      getUse.setAttribute("xlink:href", "#lfinal");
    }, 100);

    // Remove the eventlistners when checked
    guidebtns[index].removeEventListener("mouseenter", hoverGuideCircle);
    guidebtns[index].removeEventListener("mouseleave", hoverOutGuideCircle);

    // Add index to array of checked
    checkedArray.push(index);
    // Close currently open guide
    closeGuideInfo(index);
    // Open Next unchecked step----->
    // Loop that runs 5 times
    for (let i = 0; i < 5; i++) {
      // Check if the current index (0-4) is not in the array
      if (!checkedArray.includes(i)) {
        // Check if this is the first displayed guide
        // Open the first guide info between 0-4 that is not in the array
        i !== prevOpen && ShowGuideInfo(i);
        prevOpen = i;
        break;
      }
    }
    // If checked boxes is complete set prevOpen to 6
    // This allows reopening any guide
    if (checkedArray.length === 5) {
      prevOpen = 6;
    }
  } else {
    // Add the hover event Listners back
    getUse.setAttribute("xlink:href", "#linitial");
    guidebtns[index].addEventListener("mouseenter", hoverGuideCircle);
    guidebtns[index].addEventListener("mouseleave", hoverOutGuideCircle);

    // Remove index from array of checked
    checkedArray = checkedArray.filter((checked) => checked !== index);
  }
  // Set the progress count value
  guidecount.innerHTML = checkedArray.length.toString();
  // Set the progress bar value
  const getprogress = 14.4 * checkedArray.length;
  guideprogress.setAttribute("width", getprogress.toString());
};
const OpenGuide = (index) => {
  // Close the previously open guide info
  index !== prevOpen && prevOpen !== 6 && closeGuideInfo(prevOpen);

  // Open Up The Clicked Guide Info
  index !== prevOpen && ShowGuideInfo(index);
  prevOpen = index;
};
// ---------> Function Ends Here

// Toggle animation when user profile is clicked
userProfile.addEventListener("click", () => {
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
// Toggle Setup Guide
setupArrow.addEventListener("click", () => {
  if (
    hasClass(guideContainer, "unclicked") ||
    hasClass(guideContainer, "guide-open")
  ) {
    addClass(setupArrow, ["rotate-180"]);
    closeGuideSteps();
  } else {
    removeClass(setupArrow, ["rotate-180"]);
    showGuideSteps();
  }
});

// Add eventListner to each guide buttons
guidebtns.forEach((e, i, array) => {
  e.addEventListener("mouseenter", hoverGuideCircle);
  e.addEventListener("mouseleave", hoverOutGuideCircle);
  e.addEventListener("click", () => RollCheck(i, array));
});

guideArticles.forEach((e, i) => {
  e.addEventListener("click", () => OpenGuide(i));
});
