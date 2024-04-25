const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    document.querySelector(".line1").classList.toggle("change1"); 
    document.querySelector(".line3").classList.toggle("change2"); 
    document.querySelector("nav").classList.toggle("change3"); 
    document.querySelector(".nav-list").classList.toggle("change4"); 
});

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener("timeupdate",()=>{
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
}})

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 95,
      stretch: 0,
      depth: 90,
      modifier: 1.2,
      slideShadows: true,
    },
  });