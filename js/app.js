let check = document.querySelector('.check')
check.addEventListener('click', idiom)

function idiom() {
    let value = check.checked
    if (value == true) {
        location.href='./es/index.html'
    } else {
        location.href='../index.html'
    }
}

/*document.addEventListener('DOMContentLoaded', function() {
    const check = document.querySelector('.check');
  
    check.addEventListener('click', function idiom() {
      let value = check.checked;
      if (value == true) {
        location.href = './es/index.html';
      } else {
        location.href = '../index.html';
      }
    });
  
    const videoContainer = document.querySelector('.video-container');
    const videoSrc = videoContainer.getAttribute('data-video-src');
  
    videoContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('video-container')) {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.controls = false;
        video.play();
  
        videoContainer.replaceChild(video, videoContainer.firstChild);
      }
    });
  });*/