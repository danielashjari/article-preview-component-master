const shareIcon = document.getElementById("share-icon");
const profileInfo = document.getElementById("profile-Info");
const desktopBar = document.getElementById("share-desktop");
const mobileBar = document.getElementById("share-mobile");

shareIcon.addEventListener("click", function(){
    if (window.innerWidth > 1024 ) {
        if (desktopBar.style.display === "none") {
            desktopBar.style.display = "flex";
          } else {
            desktopBar.style.display = "none";
          }
    }

    
})

shareIcon.addEventListener("mouseover", function() {
    if (window.innerWidth < 1024){
        if (mobileBar.style.display === "none") {
            mobileBar.style.display = "flex";
          } else {
            mobileBar.style.display = "none";
          }
    }

})