import skrollr from 'skrollr';

if (matchMedia('(min-width: 1024px)').matches && !window.Modernizr.touchevents) {
  skrollr.init();
}
