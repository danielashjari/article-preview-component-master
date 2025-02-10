const shareBtn = document.getElementById("share-btn");
const shareContainer = document.getElementById("share-container");
const shareWrapper = document.getElementById("share-wrapper");
const profileInfo = document.getElementById("profile-info");
const profileCard = document.getElementById("profile-card");


shareBtn.addEventListener('click', function(){
  shareContainer.classList.toggle('hidden');
  shareContainer.classList.toggle('flex');
  profileInfo.classList.toggle('flex');
  profileInfo.classList.toggle('hidden');
  
  if(shareContainer.classList.contains('flex')){
    shareBtn.setAttribute('aria-expanded', 'true');
  }else if(shareContainer.classList.contains('hidden')){
    shareBtn.setAttribute('aria-expanded', 'false');
  }
})

