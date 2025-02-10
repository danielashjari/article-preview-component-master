const shareBtn = document.getElementById("share-btn");
const shareContainer = document.getElementById("share-container");
const profileInfo = document.getElementById("profile-info");

shareBtn.addEventListener('click', function(){
    //event listener for mobile view
    if (window.innerWidth <=1020) {
      shareContainer.classList.toggle('hidden');
      shareContainer.classList.toggle('flex');
      profileInfo.classList.toggle('flex');
      profileInfo.classList.toggle('hidden');}
      else if(window.innerWidth >1020){
        //event listener for desktop view
      shareContainer.classList.toggle('hidden');
      shareContainer.classList.toggle('flex');
    }
    
    if(shareContainer.classList.contains('flex')){
      shareBtn.setAttribute('aria-expanded', 'true');
    }else if(shareContainer.classList.contains('hidden')){
      shareBtn.setAttribute('aria-expanded', 'false');
    }
  })