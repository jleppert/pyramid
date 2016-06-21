window.LiveReloadOptions = { host: 'localhost' };
require('livereload-js');
window.Events = require('backbone-events-standalone');
window._ = require('underscore');
var Webvs = require('./vendor/webvs.js');

var dat = require('dat-gui');

var visualizer = document.getElementById('visualizer');
var analyser = new Webvs.WebAudioAnalyser();
var webvs = new Webvs.Main({
  canvas: visualizer,
  analyser: analyser,
  showStat: false
});

function resize() {
  visualizer.width = window.innerWidth;
  visualizer.height = window.innerHeight;
  webvs.notifyResize();
}
window.onresize = resize;
resize();

var State = function() {
  this.station = 'disco_house';
  this.vis = 'jello_cube';
};

var presets = {
  anja: require('./presets/jello-cube'),
  jello_cube: require('./presets/jello-cube'),
  maze: require('./presets/maze'),
  orgasms: require('./presets/orgasms'),
  scope: require('./presets/scope'),
  silkstring: require('./presets/silkstring'),
  superscope: require('./presets/superscope')
};

var stations = {
  disco_house: 'http://localhost:9001/http://prem1.di.fm:80/deepnudisco_hi?198f0d27e27e521ed98c303f',
  vocal_trance: 'blah',
  deep_nu_disco: 'blah2'
};

window.onload = function() {
  var gui = new dat.GUI();
  var app = new State();

  gui.add(app, 'station', Object.keys(stations));
  gui.add(app, 'vis', Object.keys(presets));
}

webvs.loadPreset(require('./presets/jello-cube'));

webvs.start();
analyser.load('http://localhost:9001/http://prem1.di.fm:80/deepnudisco_hi?198f0d27e27e521ed98c303f');
