// Get User Profile
const userProfile = document.querySelector("#navLabel");
// Get User Profile button
const userProfileBtn = document.querySelector("#devil");
// Get User Submenu
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
// Get guide buttons svg
const guidebtns = document.querySelectorAll("#guide-cont > li > div > button");
// Get guide article buttons svg
const guideArticlebtns = document.querySelectorAll(
  "#guide-cont > li > div >article button"
);
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

// Function to close menu when escape key is pressed
function handleEscapeKeyPess(event) {
  event.key === "Escape" && HideMenu();
}

// Function to hide Menu
const HideMenu = () => {
  addClass(subMenu, ["sub-close"]);
  //   Remove the open animation class
  removeClass(subMenu, ["sub-open"]);
  userProfileBtn.setAttribute("aria-expanded", "false");
  // Wrap up submenu
  setTimeout(() => {
    addClass(subMenu, ["hidden"]);
  }, 401);
  userProfileBtn.focus();
};

// Function to show Menu
const ShowMenu = () => {
  // Remove display hidden and run height animation
  removeClass(subMenu, ["hidden"]);
  //      Add Open Animation
  addClass(subMenu, ["sub-open"]);
  //   Remove the close animation
  hasClass(subMenu, "sub-close") && removeClass(subMenu, ["sub-close"]);
  userProfileBtn.setAttribute("aria-expanded", "true");
  // Focusing bringing element from overflow hidden so i set timeout to delay focus for animation
  setTimeout(() => {
    subAnchors[0].focus();
  }, 500);
  // Add escape close for menu
  subMenu.addEventListener("keyup", handleEscapeKeyPess);
};

// Function to move user focus in submenu with keypress
const moveSubMenuFocus = (event, index) => {
  // Get the key pressed
  const getKey = event.key;
  // If user press arrow right or down move to next arrow

  // If user press arrow left or up move to previous arrow
  if (
    getKey === "ArrowDown" ||
    getKey === "ArrowRight" ||
    getKey === "x" ||
    getKey === "d"
  ) {
    index === 7 ? subAnchors[0].focus() : subAnchors[index + 1].focus();
  } else if (
    getKey === "ArrowUp" ||
    getKey === "ArrowLeft" ||
    getKey === "w" ||
    getKey === "a"
  ) {
    index === 0 ? subAnchors[7].focus() : subAnchors[index - 1].focus();
  }
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
  // Set aria-label to open
  setupArrow.setAttribute("aria-label", "open setup guide");
  // Set aria-expanded to false
  setupArrow.setAttribute("aria-expanded", "false");
};

// Function to close setup Guide
const showGuideSteps = () => {
  // Remove the close class if it has been toggled
  hasClass(guideContainer, "guide-close") &&
    removeClass(guideContainer, ["guide-close"]);
  // Show Guide List
  addClass(guideContainer, ["guide-open"]);

  // Set aria-label to open
  setupArrow.setAttribute("aria-label", "close setup guide");
  // Set aria-expanded to open
  setupArrow.setAttribute("aria-expanded", "true");
};

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
  hasClass(getArticle, "guide-info-open") &&
    removeClass(getArticle, ["guide-info-open"]);
  // Get btns in article
  const ButtonInArticle = getArticle.querySelectorAll("button");
  //  --->Ends

  // Add pointer class
  addClass(getArticle, ["cursor-pointer"]);
  // Remove the ash background
  removeClass(getCont, ["bg-ash"]);
  // Remove Padding from footer and collapse
  addClass(getFooter, ["pb-0", "collapse"]);
  // Remove Guide Image
  addClass(getImage, ["collapse"]);
  // Show Article Btns
  addClass(ButtonInArticle, ["collapse"]);
  // set guide button aria-expanded to collapsed
  guidebtns[index].setAttribute("aria-expanded", "false");
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
  // Get btns in article
  const ButtonInArticle = getArticle.querySelectorAll("button");
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
  addClass(getArticle, ["guide-info-open"]);
  // add default Padding from footer
  removeClass(getFooter, ["pb-0"]);
  // Add Guide Image
  removeClass(getImage, ["collapse"]);
  // Collapse Article buttons
  removeClass(ButtonInArticle, ["collapse"]);
  // set guide button aria-expanded to expanded
  guidebtns[index].setAttribute("aria-expanded", "true");
};

// -------------> Use of use tags in logic starts here

// Get the previosly open index ~ mini useState
let prevOpen = 0;
// Array state for checked index ~ mini useState
let checkedArray = [];
// Function to change button to checked when clicked
const RollCheck = (event, index) => {
  event.stopPropagation();
  const getButton = guidebtns[index];
  const isClicked = getButton.getAttribute("class");
  // If the check button is unchecked run click fn
  if (isClicked !== "click") {
    // Run button clicked effect
    addClass(getButton, ["click", "btnAnimate"]);
    setTimeout(() => {
      removeClass(getButton, ["btnAnimate"]);
      getButton.innerHTML = `
      <svg>
        <use xlink:href="#lfinal" />
      </svg>
    `;
    }, 500);
    // Add index to array of checked
    checkedArray.push(index);

    // Check if currently open guide is clicked
    let isCurrentClicked = false;
    if (prevOpen !== false) {
      const currentUse = guidebtns[prevOpen];
      isCurrentClicked = hasClass(currentUse, "click");
    }
    // If the current btn is clicked
    if (isCurrentClicked) {
      // Close current guide
      closeGuideInfo(prevOpen);
      // Open Next unchecked step ------->

      // Loop that runs 5 times
      for (let i = 0; i < 5; i++) {
        // Check if the current index (0-4) is not in the array
        if (!checkedArray.includes(i)) {
          // Check if this is the first displayed guide
          // Open the first guide info between 0-4 that is not in the array
          i !== prevOpen && ShowGuideInfo(i);

          // Move focus on the next guide button
          guidebtns[i].focus();
          prevOpen = i;
          break;
        }
      }

      // If checked boxes is complete set prevOpen to 6
      // This allows reopening any guide
      if (checkedArray.length === 5) {
        prevOpen = false;
      }
    } else {
      // Retain focus on the current guide button
      guidebtns[prevOpen]?.focus();
    }
  } else {
    addClass(getButton, ["btnRemove"]);
    setTimeout(() => {
      removeClass(getButton, ["click"]);
      removeClass(getButton, ["btnRemove"]);
      getButton.innerHTML = ``;
    }, 500);
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
  index !== prevOpen && prevOpen !== false && closeGuideInfo(prevOpen);

  // Open Up The Clicked Guide Info
  index !== prevOpen && ShowGuideInfo(index);
  prevOpen = index;
};
// ---------> Function Ends Here

// Toggle sub-menu with animation when user profile is clicked
userProfile.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  event.stopPropagation();
  if (hasClass(subMenu, "hidden")) {
    // If the dialog notification is open
    dialog.close();
  }
  hasClass(subMenu, "hidden") ? ShowMenu() : HideMenu();
});

// If user profile is focused and enter is clicked
userProfile.addEventListener("keydown", (event) => {
  // Get the element that is clicked ~ to make sure it doesnt run when the button is clicked
  const targetId = event.target.id;
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter" && targetId !== "devil") {
    ShowMenu();
  }
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

    // Allow escape key to close dialog
    dialog.addEventListener("keydown", (event) => {
      event.stopImmediatePropagation();
      if ((event.key = "Escape")) {
        dialog.close();
      }
    });
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

guideArticles.forEach((e, i) => {
  e.addEventListener("click", () => OpenGuide(i));
});

// Add onclick to the guide buttons to check them
guidebtns.forEach((e, i) => {
  e.addEventListener("click", (event) => RollCheck(event, i));
});

// Add keydown event to all submenu items
subAnchors.forEach((e, index) => {
  e.addEventListener("keydown", (event) => moveSubMenuFocus(event, index));
});
