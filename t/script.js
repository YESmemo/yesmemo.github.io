function resizeIframe() {
  var headerHeight = document.querySelector('header').offsetHeight;
  var windowHeight = window.innerHeight;
  var iframe = document.querySelector('#myIframe');
  iframe.style.height = windowHeight - headerHeight + 'px';
}

window.addEventListener('load', function() {
  resizeIframe();
  window.addEventListener('resize', resizeIframe);
});