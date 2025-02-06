const shareIcon = document.getElementById("share-icon");
const shareIconMobile = document.getElementById("share-icon-mobile");
const shareContainer = document.getElementById("share-container");
const profileInfo = document.getElementById("profile-info");
const desktopBar = document.getElementById("share-desktop");
const mobileBar = document.getElementById("share-mobile");



shareIcon.addEventListener("click", function () {
  if (window.innerWidth > 1024) {
    if (desktopBar.style.display === "none") {
      desktopBar.style.display = "flex";
    } else {
      desktopBar.style.display = "none";
    }
  }
  else if (window.innerWidth < 1024) {
    shareContainer.style.display = "flex";
    profileInfo.style.display = "none";
  }

})


shareIconMobile.addEventListener("click", function () {
  if (window.innerWidth < 1024) {
    profileInfo.style.display = "flex";
    shareContainer.style.display = "none";

  }
})
