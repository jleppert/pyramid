window.LiveReloadOptions = { host: 'localhost' };
require('livereload-js');
window.events = require('backbone-events-standalone');
window._ = require('underscore');
var Webvs = require('./vendor/webvs.js');
var soundmanager = require('soundmanager2');

soundManager.setup({
  url: '/swf/soundmanager2_flash9.swf',
  flashVersion: 9,
  preferFlash: true,
  useHighPerformance: true,
  useFastPolling: true
});

soundManager.onready(function() {

var webvs;
var stream = soundManager.createSound({
  id: 'disco',
  url: 'http://prem1.di.fm:80/deepnudisco_hi?198f0d27e27e521ed98c303f',
  type: 'audio/mp4',
  autoPlay: true,
  stream: true,
  autoLoad: true,
  onload: function() {
    console.log('loaded, started visualizer...');
    webvs.start();
  }
});

var analyser = new Webvs.SMAnalyser();
analyser.setSound(stream);
webvs = new Webvs.Main({
  canvas: document.getElementById('visualizer'),
  analyser: analyser
  showStat: true
});

webvs.loadPreset({
  "clearFrame": true,
  "components": [
    {
      "type": "SuperScope",
      "source": "WAVEFORM",
      "code": {
        "perPoint": "x=i*2-1;y=v;"
      },
      "colors": ["#ffffff"]
    }
  ]
});


});


console.log('got here!!', Webvs, soundmanager);
