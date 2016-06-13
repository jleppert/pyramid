window.LiveReloadOptions = { host: 'localhost' };
require('livereload-js');
window.Events = require('backbone-events-standalone');
window._ = require('underscore');
var Webvs = require('./vendor/webvs.js');

var visualizer = document.getElementById('visualizer');
visualizer.width = window.innerWidth;
visualizer.height = window.innerHeight;
var analyser = new Webvs.WebAudioAnalyser();
var webvs = new Webvs.Main({
  canvas: visualizer,
  analyser: analyser,
  showStat: false
});

webvs.loadPreset(require('./presets/superscope'));

webvs.start();
analyser.load('http://localhost:9001/http://prem1.di.fm:80/deepnudisco_hi?198f0d27e27e521ed98c303f');
