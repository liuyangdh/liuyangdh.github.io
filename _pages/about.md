---
layout: about
title: about
permalink: /
# add link to my lab website
# subtitle: PhD student at [LASA](https://www.epfl.ch/labs/lasa/), EPFL.
# subtitle: PhD student at <a href="https://www.epfl.ch/labs/lasa/">LASA, EPFL</a>.

# subtitle: PhD student at [LASA](https://www.epfl.ch/labs/lasa/), EPFL.

profile:
  # align: middle
  align: right
  image: IMG_1343.jpg
  image_circular: false # crops the image to make it circular
  more_info: false

# research: true
news: true  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---
My research focuses on robotic dynamic manipulation and physical interaction. Currently, I'm a Member of Technical Staff at [Enact Intelligence](https://enact-intelligence.com/), working on force-aware robotic manipulation.

I obtained my PhD from [EPFL](https://www.epfl.ch/labs/lasa/) in 2025 supervised by [Prof. Aude Billard](https://people.epfl.ch/aude.billard), where I discovered some *[Computational and Physical Structures in Robot Throwing](https://infoscience.epfl.ch/entities/publication/13e633d6-15e6-469b-9ce4-fd0a0b8242a0)*. Previously, I received my M.Sc. in [Robotics, Systems and Control](https://master-robotics.ethz.ch/) from [ETH Zurich](https://ethz.ch/en.html) and my B.Eng. in Mechanical Engineering from [Jilin University](https://mae.jlu.edu.cn/en/).

<!-- Fascinated by the [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox#:~:text=Moravec's%20paradox%20is%20the%20observation,skills%20require%20enormous%20computational%20resources.) - simply put, sensorimotor skills skills require enormous compute -->

<!-- # Amazed by the dexterity and robustness of human manipulation,  -->

<!-- **Research.** Amazed by our human's dexterous, adaptive and yet unconscious sensorimotor skills, my research is about trying to understand such [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox#:~:text=Moravec's%20paradox%20is%20the%20observation,skills%20require%20enormous%20computational%20resources.), by designing reliable and run-time efficient algorithms for robots.  -->

<div class="highlights-section">
<h2 id="highlights">Highlights</h2>
<div class="video-highlights">
  <div class="video-item" id="boomerang-highlight">
    <video autoplay loop muted playsinline preload="auto" data-full-video="{{ '/assets/video/boomerang-teaser-clean.mp4' | relative_url }}" aria-label="Boomerang throwing: model-guided design and returning flight. Click for the full video." onclick="openLightbox(this)">
      <source src="{{ '/assets/video/boomerang-highlight-clean.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p>Robotic Boomerang Throwing [<a href="https://arxiv.org/abs/2610.10472">arXiv'26</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" data-playback-rate="0.85" onclick="openLightbox(this)">
      <source src="assets/video/hydroelastic-contact.mp4" type="video/mp4">
    </video>
    <p>GPU-Accelerated Hydroelastic Contact [<a href="https://openreview.net/forum?id=ogndqznZyY">CR2@ICRA'26</a>]</p>
  </div>
  <div class="video-item" id="momt-highlight">
    <video autoplay loop muted playsinline preload="auto" data-full-video="{{ '/assets/video/IROS2026_Paper3056_MOMT_Presentation.mp4' | relative_url }}" aria-label="Multi-object multi-target throwing. Click for the full presentation." onclick="openLightbox(this)">
      <source src="{{ '/assets/video/momt-highlight-crop.mp4' | relative_url }}" type="video/mp4">
    </video>
    <p>Multi-object Multi-target Throwing [<a href="https://arxiv.org/abs/2610.09224">IROS'26</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/throw-flip.mp4" type="video/mp4">
    </video>
    <p>Throw-Flip [<a href="https://arxiv.org/abs/2510.10357">IROS'25</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/reactive_robust_dexterous_throwing.mp4?v=20261009" type="video/mp4">
    </video>
    <p>Robust Dexterous Throwing [<a href="https://ieeexplore.ieee.org/document/9981231">IROS'22</a>][<a href="https://ieeexplore.ieee.org/document/10494917">T-RO'24</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/whole-body-highlight.mp4" type="video/mp4">
    </video>
    <p>Whole-body Throwing [<a href="https://arxiv.org/abs/2506.16986">IROS'25</a>]</p>
  </div>
</div>
</div>

<!-- Video Lightbox -->
<div class="video-lightbox" id="videoLightbox" onclick="closeLightbox(event)">
  <span class="close-btn">&times;</span>
  <video id="lightboxVideo" controls loop>
    <source src="" type="video/mp4">
  </video>
</div>

<script>
const highlightVideos = Array.from(document.querySelectorAll('.video-item video'));
const highlightLightbox = document.getElementById('videoLightbox');

function shouldPlayPreview() {
  return !document.hidden && !highlightLightbox.classList.contains('active');
}

function playPreview(video) {
  if (!shouldPlayPreview(video) || !video.paused) return;
  video.muted = true;
  video.playbackRate = parseFloat(video.dataset.playbackRate) || 1;
  const play = video.play();
  if (play) play.catch(function () {});
}

function updateHighlightPlayback() {
  highlightVideos.forEach(function (video) {
    if (shouldPlayPreview(video)) playPreview(video);
    else video.pause();
  });
}

highlightVideos.forEach(function (video) {
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.playsInline = true;
  video.playbackRate = parseFloat(video.dataset.playbackRate) || 1;
  video.addEventListener('loadedmetadata', function () {
    video.playbackRate = parseFloat(video.dataset.playbackRate) || 1;
    playPreview(video);
  });
  video.addEventListener('canplay', function () { playPreview(video); });
  // Keep every preview looping while this page is active, including lower rows.
  video.addEventListener('pause', function () {
    if (shouldPlayPreview(video)) requestAnimationFrame(function () { playPreview(video); });
  });
  video.addEventListener('ended', function () {
    if (shouldPlayPreview(video)) {
      video.currentTime = 0;
      playPreview(video);
    }
  });
});

document.addEventListener('visibilitychange', updateHighlightPlayback);
window.addEventListener('pageshow', updateHighlightPlayback);
window.addEventListener('focus', updateHighlightPlayback);
window.addEventListener('resize', updateHighlightPlayback);
document.addEventListener('pointerdown', updateHighlightPlayback, { once: true });
updateHighlightPlayback();

function openLightbox(videoElement) {
  const lightboxVideo = document.getElementById('lightboxVideo');
  const source = videoElement.dataset.fullVideo || videoElement.querySelector('source').src;
  const rate = parseFloat(videoElement.dataset.playbackRate) || 1;

  highlightLightbox.classList.add('active');
  highlightVideos.forEach(function (video) { video.pause(); });
  document.body.style.overflow = 'hidden';
  lightboxVideo.querySelector('source').src = source;
  lightboxVideo.addEventListener('loadedmetadata', function () {
    lightboxVideo.playbackRate = rate;
  }, { once: true });
  lightboxVideo.load();
  lightboxVideo.playbackRate = rate;
  const play = lightboxVideo.play();
  if (play) play.catch(function () {});
}

function closeLightbox(event) {
  if (event.target.tagName === 'VIDEO') return;
  document.getElementById('lightboxVideo').pause();
  highlightLightbox.classList.remove('active');
  document.body.style.overflow = '';
  updateHighlightPlayback();
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && highlightLightbox.classList.contains('active')) {
    closeLightbox({ target: highlightLightbox });
  }
});
</script>


<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->