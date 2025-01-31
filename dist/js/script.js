const shareIcon = document.getElementById("share-icon");
const profileName = document.getElementById("profile-name");
const profileImage = document.getElementById("profile-image");
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


})

shareIcon.addEventListener("mouseover", function () {
  if (window.innerWidth < 1024) {
    if (mobileBar.style.display === "none") {
      profileName.style.display = "none";
      profileImage.style.display = "none";
      mobileBar.style.display = "flex";

    } else {
      profileName.style.display = "block";
      profileImage.style.display = "block";
      mobileBar.style.display = "none";
    }
  }

})