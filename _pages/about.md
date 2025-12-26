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
I am a Postdoctoral Researcher at the [Learning Algorithms and Systems Laboratory (LASA)](https://www.epfl.ch/labs/lasa/), EPFL. My research focuses on dynamic manipulation, contact modeling, and kinodynamic motion planning for robots.

I obtained my PhD from EPFL in 2025 supervised by [Prof. Aude Billard](https://people.epfl.ch/aude.billard), where I studied *[Computational and Physical Structures in Robot Throwing](https://infoscience.epfl.ch/entities/publication/13e633d6-15e6-469b-9ce4-fd0a0b8242a0)*.

<!-- Fascinated by the [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox#:~:text=Moravec's%20paradox%20is%20the%20observation,skills%20require%20enormous%20computational%20resources.) - simply put, sensorimotor skills skills require enormous compute -->

<!-- # Amazed by the dexterity and robustness of human manipulation,  -->

Previously, I received my M.Sc. in [Robotics, Systems and Control](https://master-robotics.ethz.ch/) from [ETH Zurich](https://ethz.ch/en.html) and my B.Eng. in Mechanical Engineering from [Jilin University](https://mae.jlu.edu.cn/en/).

<!-- **Research.** Amazed by our human's dexterous, adaptive and yet unconscious sensorimotor skills, my research is about trying to understand such [Moravec's paradox](https://en.wikipedia.org/wiki/Moravec%27s_paradox#:~:text=Moravec's%20paradox%20is%20the%20observation,skills%20require%20enormous%20computational%20resources.), by designing reliable and run-time efficient algorithms for robots.  -->

<div class="highlights-section">
<h2>Highlights</h2>
<div class="video-highlights">
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/reactive_robust_dexterous_throwing.mp4" type="video/mp4">
    </video>
    <p>Robust Dexterous Throwing [<a href="https://ieeexplore.ieee.org/document/9981231">IROS'22</a>][<a href="https://ieeexplore.ieee.org/document/10494917">T-RO'24</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/throw-flip.mp4" type="video/mp4">
    </video>
    <p>Throw-Flip [<a href="https://arxiv.org/abs/2510.10357">IROS'25</a>]</p>
  </div>
  <div class="video-item">
    <video autoplay loop muted playsinline preload="auto" onclick="openLightbox(this)">
      <source src="assets/video/whole-body-throwing.mp4" type="video/mp4">
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
function openLightbox(videoElement) {
  const lightbox = document.getElementById('videoLightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const source = videoElement.querySelector('source').src;

  lightboxVideo.querySelector('source').src = source;
  lightboxVideo.load();
  lightboxVideo.play();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event.target.tagName === 'VIDEO') return;
  const lightbox = document.getElementById('videoLightbox');
  const lightboxVideo = document.getElementById('lightboxVideo');

  lightboxVideo.pause();
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox({target: document.getElementById('videoLightbox')});
  }
});
</script>


<!-- Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](http://fortawesome.github.io/Font-Awesome/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them. -->