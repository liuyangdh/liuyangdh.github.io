// Initialize medium zoom.
$(document).ready(function() {
  medium_zoom = mediumZoom('[data-zoomable]', {
    background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
  })
});

// Click-to-zoom for <video> previews (medium-zoom only supports images).
// Mirrors medium-zoom's FLIP feel: the clip glides/scales from its thumbnail
// position to the centered enlarged size, smoothly revealing the full (uncropped) frame.
$(document).ready(function() {
  var ZOOM_TRANSITION = 'top .3s cubic-bezier(.2,0,.2,1),left .3s cubic-bezier(.2,0,.2,1),'
      + 'width .3s cubic-bezier(.2,0,.2,1),height .3s cubic-bezier(.2,0,.2,1),'
      + 'border-radius .3s cubic-bezier(.2,0,.2,1)';

  function openVideoZoom(video) {
    var bg = getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color').trim() + 'ee';  // match medium-zoom overlay.
    var rect = video.getBoundingClientRect();

    var overlay = document.createElement('div');
    overlay.className = 'video-zoom-overlay';
    overlay.style.cssText =
      'position:fixed;inset:0;z-index:10000;cursor:zoom-out;background:' + bg +
      ';opacity:0;transition:opacity .3s ease;';

    // Clone starts exactly over the thumbnail (square, object-fit:cover), then
    // animates to the video's natural aspect ratio — cover==contain when the box
    // matches the media aspect, so it un-crops with no mid-animation jump.
    var enlarged = video.cloneNode(true);
    enlarged.removeAttribute('data-zoomable-video');
    enlarged.muted = true;
    enlarged.loop = true;
    enlarged.autoplay = true;
    enlarged.setAttribute('playsinline', '');
    enlarged.style.cssText =
      'position:fixed;top:' + rect.top + 'px;left:' + rect.left + 'px;' +
      'width:' + rect.width + 'px;height:' + rect.height + 'px;margin:0;' +
      'object-fit:cover;border-radius:6px;z-index:10001;pointer-events:none;' +
      'box-shadow:0 10px 40px rgba(0,0,0,.5);transition:' + ZOOM_TRANSITION + ';';

    document.body.appendChild(overlay);
    document.body.appendChild(enlarged);
    video.style.visibility = 'hidden';  // hide the in-grid original while zoomed.
    var p = enlarged.play();
    if (p && p.catch) { p.catch(function() {}); }

    // Target: fit the video's natural size into 90% of the viewport, centered.
    var vw = video.videoWidth || rect.width;
    var vh = video.videoHeight || rect.height;
    var scale = Math.min(window.innerWidth * 0.9 / vw, window.innerHeight * 0.9 / vh);
    var tw = vw * scale, th = vh * scale;

    requestAnimationFrame(function() {
      overlay.style.opacity = '1';
      enlarged.style.top = (window.innerHeight - th) / 2 + 'px';
      enlarged.style.left = (window.innerWidth - tw) / 2 + 'px';
      enlarged.style.width = tw + 'px';
      enlarged.style.height = th + 'px';
    });

    function close() {
      var r = video.getBoundingClientRect();  // recompute (page may have scrolled).
      overlay.style.opacity = '0';
      enlarged.style.top = r.top + 'px';
      enlarged.style.left = r.left + 'px';
      enlarged.style.width = r.width + 'px';
      enlarged.style.height = r.height + 'px';
      document.removeEventListener('keydown', onKey);
      setTimeout(function() {
        overlay.remove();
        enlarged.remove();
        video.style.visibility = '';
      }, 300);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', onKey);
  }

  document.querySelectorAll('video[data-zoomable-video]').forEach(function(video) {
    video.addEventListener('click', function() { openVideoZoom(video); });
  });
});
