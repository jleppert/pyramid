module.exports = {
    "name": "UnConeD -  Zero-G Maze",
    "date": "2009-04-28T20:19:36.000Z",
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
            "onBeatFrames": 1,
            "components": [
                {
                    "type": "SuperScope",
                    "version": true,
                    "code": {
                        "init": "n=800;ro=0;go=2.0;bo=4.0",
                        "perFrame": "t=t-0.05;red=sin(t+ro)*.5+1.3;green=sin(t+go)*.5+1.3;blue=sin(t+bo)*.5+1.3",
                        "onBeat": "ro=rand(100)/100*6.28;go=rand(100)/100*6.28;bo=rand(100)/100*6.28",
                        "perPoint": "d=v*2+0.1; r=t+i*3.14159*2; x=cos(r)*d; y=sin(r)*d;\r\n"
                    },
                    "audioChannel": "Center",
                    "audioSource": "Waveform",
                    "colors": [
                        "#ffffff"
                    ],
                    "lineType": "Dots"
                },
                {
                    "type": "DynamicMovement",
                    "version": true,
                    "code": {
                        "init": "rv=rand(628)/100;dx=cos(rv);dy=sin(rv);ca=1;sa=0",
                        "perFrame": "",
                        "onBeat": "rv=rand(628)/100;\r\ndx=cos(rv);\r\ndy=sin(rv);\r\nra=rand(100)/500;\r\nca=cos(ra);\r\nsa=sin(ra);",
                        "perPoint": "xx=x+dx/10;\r\nyy=y+dy/10;\r\nx=xx*ca+yy*sa;\r\ny=yy*ca-xx*sa"
                    },
                    "bilinear": true,
                    "coordinates": "Cartesian",
                    "gridW": 1,
                    "gridH": 1,
                    "alpha": false,
                    "wrap": true,
                    "buffer": "Current",
                    "alphaOnly": false
                }
            ]
        },
        {
            "type": "BufferSave",
            "mode": "Save",
            "buffer": "Current",
            "blend": "Replace"
        },
        {
            "type": "SuperScope",
            "version": true,
            "code": {
                "init": "n=50;ro=0;go=2.0;bo=4.0",
                "perFrame": "t=t-0.05;aa=aa*0.7;",
                "onBeat": "aa=0.0;ro=rand(100)/100*6.28;go=rand(100)/100*6.28;bo=rand(100)/100*6.28",
                "perPoint": "x=0;y=i*.2-.1;\r\nred=sin(t+ro+i*2)/2+.5;\r\ngreen=sin(t+go+i*2)/2+.5;\r\nblue=sin(t+bo+i*2)/2+.5;"
            },
            "audioChannel": "Center",
            "audioSource": "Waveform",
            "colors": [
                "#000000"
            ],
            "lineType": "Lines"
        },
        {
            "type": "SuperScope",
            "version": true,
            "code": {
                "init": "n=50;ro=0;go=2.0;bo=4.0",
                "perFrame": "t=t-0.05;aa=aa*0.7;",
                "onBeat": "aa=0.0;ro=rand(100)/100*6.28;go=rand(100)/100*6.28;bo=rand(100)/100*6.28",
                "perPoint": "y=0;x=i*.5-.1;\r\nred=sin(t+ro+i*2)*.5+.5;\r\ngreen=sin(t+go+i*2)*.5+.5;\r\nblue=sin(t+bo+i*2)*.5+.5;"
            },
            "audioChannel": "Center",
            "audioSource": "Waveform",
            "colors": [
                "#000000"
            ],
            "lineType": "Lines"
        },
        {
            "type": "DynamicMovement",
            "version": true,
            "code": {
                "init": "t=0;rx=1.57;ry=1.57;rx=0;ry=0;rz=0;rxo=0;ryo=0;rzo=0;rxt=0;ryt=0;rzt=0;",
                "perFrame": "t=t+0.2;\r\nrx=rx+rxo-0.03*cos(t/9)*cos(t/20)*sin(sin(t/9));\r\nry=ry+ryo+0.03*sin(t/10)*cos(t/22)*sin(cos(t/31));\r\nrz=rz+rzo+0.03;\r\ncx=cos(rx);sx=sin(rx);cy=cos(ry);sy=sin(ry);cz=cos(rz);sz=sin(rz);\r\nrxo=(rxo+rxt)*.5;\r\nryo=(ryo+ryt)*.5;\r\nrzo=(rzo+rzt)*.5;\r\nox=sin(t*.5)*.5;\r\noy=sin(t*.53)*.5;\r\noz=sin(t*.57)*.5;\r\n",
                "onBeat": "rxt=(rand(80)/320);\r\nryt=(rand(80)/320);\r\nrzt=(rand(80)/320)-0.125;",
                "perPoint": "x=sin(r)*d;y=-cos(r)*d;\r\ndx=x;dy=y;dz=0.6;\r\ndx1=dx*cz-dy*sz;\r\ndy1=dx*sz+dy*cz;\r\ndy2=dy1*cx-dz*sx;\r\ndz2=dy1*sx+dz*cx;\r\ndx3=dx1*cy-dz2*sy;\r\ndz3=dx1*sy+dz2*cy;\r\nk1=abs((-1-oy)/dy2);\r\nk1=if(below(k1*dy2,0),abs((1-oy)/dy2),k1);\r\nk2=abs((-1-ox)/dx3);\r\nk2=if(below(k2*dx3,0),abs((1-ox)/dx3),k2);\r\nk3=abs((-1-oz)/dz3);\r\nk3=if(below(k3*dz3,0),abs((1-oz)/dz3),k3);\r\nk=min(min(max(k1,k2),max(k2,k3)),max(k1,k3));\r\nix=dx3*k-ox;iy=dy2*k-oy;iz=dz3*k-oz;\r\nx=if(equal(k,k1),-ix,if(equal(k,k2),-iy,-ix));\r\ny=if(equal(k,k1),iz,if(equal(k,k2),iz,iy));\r\nix=ix+ox;iy=iy+oy;iz=iz+oz;\r\nd=sqrt(ix*ix+iy*iy+iz*iz);\r\nalpha=2/d-0.4;\r\nx=asin(sin(x*2.7))*.5;\r\ny=asin(sin(y*2.7))*.5;\r\nalpha=if(above(alpha,1),1,if(below(alpha,0),0,alpha));\r\n"
            },
            "bilinear": true,
            "coordinates": "Cartesian",
            "gridW": 36,
            "gridH": 36,
            "alpha": true,
            "wrap": true,
            "buffer": 1,
            "alphaOnly": false
        }
    ]
};
