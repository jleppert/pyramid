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
  this.station = 'dj_mixes';
  this.vis = 'jello_cube';
};

var presets = {
  jello_cube: require('./presets/jello-cube'),
  maze: require('./presets/maze'),
  scope: require('./presets/scope'),
  silkstring: require('./presets/silkstring'),
  superscope: require('./presets/superscope')
};

var stations = {
  dj_mixes: 'http://prem1.di.fm:80/djmixes?198f0d27e27e521ed98c303f',
  techno: 'http://prem1.di.fm:80/techno?198f0d27e27e521ed98c303f',
  mainstage: 'http://prem4.di.fm:80/mainstage?198f0d27e27e521ed98c303f',
  tropical_house: 'http://prem1.di.fm:80/chillntropicalhouse?198f0d27e27e521ed98c303f',
  disco_house: 'http://prem1.di.fm:80/discohouse?198f0d27e27e521ed98c303f',
  deep_nu_disco: 'http://prem1.di.fm:80/deepnudisco?198f0d27e27e521ed98c303f',
  vocal_chillout: 'http://prem1.di.fm:80/vocalchillout?198f0d27e27e521ed98c303f',
  vocal_trance: 'http://prem1.di.fm:80/vocaltrance?198f0d27e27e521ed98c303f',
  vocal_lounge: 'http://prem1.di.fm:80/vocallounge?198f0d27e27e521ed98c303f'
};

var proxyPort = 9001;
function audioSrc(key) {
  return window.location.protocol + '//' + window.location.hostname + ':' + proxyPort + '/' + stations[key];
}

window.onload = function() {
  var gui = new dat.GUI();
  var app = new State();
  
  var audio = new Audio();
  audio.setAttribute('crossorigin', 'anonymous');
  audio.setAttribute('preload', 'auto');
  audio.setAttribute('autoplay', 'autoplay');
  audio.src = audioSrc(app.station);

  gui.add(app, 'station', Object.keys(stations)).onFinishChange(function(key) {
    audio.src = audioSrc(key);
  });
  gui.add(app, 'vis', Object.keys(presets)).onFinishChange(function(key) {
    webvs.loadPreset(presets[key]);  
  });

  webvs.loadPreset(presets[app.vis]);
  analyser.load(audio);
  
  window.analyser = analyser;
  
  webvs.start();
}
