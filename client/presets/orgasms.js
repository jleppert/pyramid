module.exports = {
    "name": "pulsing shit",
    "date": "2016-06-11T06:20:27.000Z",
    "clearFrame": false,
    "components": [
        {
            "type": "EffectList",
            "enabled": true,
            "clearFrame": false,
            "input": "Ignore",
            "output": "Replace",
            "inAdjustBlend": 128,
            "outAdjustBlend": 128,
            "inBuffer": 0,
            "outBuffer": 0,
            "inBufferInvert": false,
            "outBufferInvert": false,
            "enableOnBeat": false,
            "onBeatFrames": 280
        },
        {
            "type": "Brightness",
            "enabled": true,
            "output": "Replace",
            "red": 355,
            "green": 355,
            "blue": 355,
            "separate": false,
            "excludeColor": "#000000",
            "exclude": false,
            "distance": 169
        }
    ]
};
