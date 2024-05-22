"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[196],{6225:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(4848),i=s(8453);const l={sidebar_position:2},r="Global Settings",o={id:"reference/global",title:"Global Settings",description:"A global setting is a parameter that applies to the entire Mercury environment and all the instruments that are created within it. The global settings are adjust with the set keyword.",source:"@site/docs/reference/global.md",sourceDirName:"reference",slug:"/reference/global",permalink:"/mercury/docs/reference/global",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Actions",permalink:"/mercury/docs/reference/actions"},next:{title:"Instrument Functions",permalink:"/mercury/docs/reference/instruments"}},a={},c=[{value:"tempo",id:"tempo",level:2},{value:"scale",id:"scale",level:2},{value:"scalar",id:"scalar",level:2},{value:"randomSeed",id:"randomseed",level:2},{value:"volume",id:"volume",level:2},{value:"highPass",id:"highpass",level:2},{value:"lowPass",id:"lowpass",level:2},{value:"beatRepeat",id:"beatrepeat",level:2},{value:"osc",id:"osc",level:2},{value:"midi",id:"midi",level:2},{value:"midiClock",id:"midiclock",level:2},{value:"click",id:"click",level:2},{value:"single soundfile",id:"single-soundfile",level:2},{value:"freesound",id:"freesound",level:3},{value:"github",id:"github",level:3},{value:"multiple soundfiles",id:"multiple-soundfiles",level:2},{value:"lists",id:"lists",level:3},{value:"json",id:"json",level:3},{value:"base",id:"base",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"global-settings",children:"Global Settings"}),"\n",(0,t.jsxs)(n.p,{children:["A global setting is a parameter that applies to the entire Mercury environment and all the instruments that are created within it. The global settings are adjust with the ",(0,t.jsx)(n.code,{children:"set"})," keyword."]}),"\n",(0,t.jsxs)(n.p,{children:["For detailed explanation of the syntax see: ",(0,t.jsx)(n.a,{href:"syntax",children:"Syntax"})," and ",(0,t.jsx)(n.a,{href:"actions#set",children:(0,t.jsx)(n.code,{children:"set"})})," under ",(0,t.jsx)(n.a,{href:"actions",children:"Actions"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set <setting-name> value1 value2 ... value-n\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Some settings are different between Mercury4Max and the MercuryPlayground"})}),"\n",(0,t.jsx)(n.h2,{id:"tempo",children:"tempo"}),"\n",(0,t.jsxs)(n.p,{children:["Change the global tempo in Beats Per Minute (BPM), counted in quarter-notes. The second argument sets a ramptime in milliseconds or ",(0,t.jsx)(n.code,{children:"fraction"})," to gradually change the tempo over the provided amount of time."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number+"})," -> The BPM as a positive number"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Number/Fraction"})," -> The ramptime (optional/experimental, default=0)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set tempo 128\n\nset tempo 80 5000\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The tempo ramp change is experimental and may lag/glitch depending on the code you have"})}),"\n",(0,t.jsx)(n.h2,{id:"scale",children:"scale"}),"\n",(0,t.jsxs)(n.p,{children:["Set the scale in a 12-TET system for which all the played notes will be mapped to. An optional second argument sets the tone-center (or root) for the scale. The default scale and root is ",(0,t.jsx)(n.code,{children:"chromatic c"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," -> the scale name (default=chromatic)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," -> the root (optional, default=c)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set scale major D#\n\nset scale minor_harmonic Eb\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"The scale names can differ slightly between Mercury4Max and the MercuryPlayground"})}),"\n",(0,t.jsx)(n.p,{children:"Currently available scales are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"chromatic" :            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,  10, 11],\n"major" :                [0, 0, 2, 2, 4, 5, 5, 7, 7, 9,  9,  11],\n"minor" :                [0, 0, 2, 3, 3, 5, 7, 7, 8, 8,  10, 10],\n"minor_melodic" :        [0, 0, 2, 3, 3, 5, 7, 7, 9, 9,  11, 11],\n"minor_harmonic" :       [0, 0, 2, 3, 3, 5, 7, 7, 8, 8,  11, 11],\n"dorian" :               [0, 0, 2, 3, 3, 5, 5, 7, 7, 9,  10, 10],\n"phrygian" :             [0, 1, 1, 3, 3, 5, 7, 7, 8, 8,  10, 10],\n"lydian" :               [0, 0, 2, 4, 4, 6, 6, 7, 7, 9,  11, 11],\n"myxolydian" :           [0, 0, 2, 4, 4, 5, 5, 7, 7, 9,  10, 10],\n"locrian" :              [0, 1, 1, 3, 3, 5, 6, 6, 8, 8,  10, 10],\n"hungarian" :            [0, 0, 2, 3, 3, 6, 6, 7, 8, 8,  11, 11],\n"gypsy" :                [0, 1, 1, 4, 4, 5, 5, 7, 8, 8,  11, 11],\n"major_neapolitan" :     [0, 1, 1, 3, 3, 5, 7, 7, 8, 8,  11, 11],\n"minor_neapolitan" :     [0, 1, 1, 3, 3, 5, 7, 7, 9, 9,  11, 11],\n"hexatonic" :            [0, 0, 2, 2, 4, 4, 6, 6, 8, 8,  10, 10],\n"hexatonic_blues" :      [0, 0, 2, 2, 4, 4, 6, 6, 7, 7,  10, 10],\n"hexatonic_prometheus" : [0, 0, 2, 2, 4, 4, 6, 6, 9, 9,  10, 10],\n"major_pentatonic" :     [0, 0, 2, 2, 4, 4, 7, 7, 7, 9,  9,  9],\n"minor_pentatonic" :     [0, 0, 3, 3, 3, 5, 5, 7, 7, 10, 10, 10]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The naming convention and offsets for the roots are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-6 gb Gb ges Ges\n-5 g  G\n-4 g# G# gis Gis\n-4 ab Ab as  As\n-3 a  A\n-2 a# A# ais Ais\n-2 bb Bb bes Bes\n-1 b  B \n-1 cb Cb ces Ces\n+0  b# B# bis Bis\n+0  c  C\n+1  c# C# cis Cis\n+1  db Db des Des\n+2  d  D\n+3  d# D# dis Dis\n+3  eb Eb es  Es\n+4  e  E\n+4  fb Fb fes Fes\n+5  e# E# eis Eis\n+6  f  F\n"})}),"\n",(0,t.jsx)(n.h2,{id:"scalar",children:"scalar"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["A scalar transposition. All the current notes are shifted up or down a certain amount of semitones but also remap the notes to the ",(0,t.jsx)(n.code,{children:"set scale"}),". This is different from transposing the scales because it preserves the original scale."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Int"})," -> scalar to shift notes by (default=0)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set scalar 2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"randomseed",children:"randomSeed"}),"\n",(0,t.jsxs)(n.p,{children:["Set the random seed as an integer for the psuedo-random number generators used in all ",(0,t.jsx)(n.code,{children:"list-function"}),'s across the environment. There is no such thing as true randomness, the random numbers are generated by a deterministic process. Once you know the "seed" that initializes this process, you can reproduce the output of the algorithm over and over. Setting the ',(0,t.jsx)(n.code,{children:"randomSeed"})," to a fixed integer will make sure random values keep the same sequence every time you re-evaluate the code. A value of ",(0,t.jsx)(n.code,{children:"0"})," sets to unpredictable seeding (which is the default)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Int+"})," -> the seed for the psudeorandom number generators (default=0)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set randomSeed 31415\nset randomSeed 1618\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Mercury4Max",type:"warning",children:[(0,t.jsxs)(n.p,{children:["The seed can only be set ",(0,t.jsx)(n.strong,{children:"once"})," in Mercury4Max every time you evaluate. The last value will take effect for all list functions."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set randomSeed 31415 \n// ^^^ will be overwritten by 1618 before random() call\nlist randomValues random(10 0 100)\n// ^^^ the random() will use the seed from below\nset randomSeed 1618\n// ^^^ 1618 overwrites 31415\n"})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"MercuryPlayground",type:"warning",children:[(0,t.jsx)(n.p,{children:"The seed can be reconfigured between lines of code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set randomSeed 31415 \n// ^^^ will not be overwritten\nlist randomValues random(10 0 100)\n// ^^^ the random() uses the seed 31415\nset randomSeed 1618\n// ^^^ a new seed is set for other functions below\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"volume",children:"volume"}),"\n",(0,t.jsxs)(n.p,{children:["Set the global volume in floating-point amplitude for all instruments across the entire environment. Additional ramptime in milliseconds or ",(0,t.jsx)(n.code,{children:"fraction"})," can be provided to create fade-in/fade-out or smooth transitions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Float"})," -> attenuate the total volume of all instruments (default=1)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Divison/Int+"})," -> ramptime in milliseconds or fractions (optional, default=0)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set volume 0.5 5000\nset volume 0.4 2/1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"highpass",children:"highPass"}),"\n",(0,t.jsxs)(n.p,{children:["Set the global highPass filter cutoff in Hz for all instruments across the entire environment. Additional ramptime in milliseconds can be provided to create smooth transitions from one value to another. The default value is ",(0,t.jsx)(n.code,{children:"5 Hz"})," to remove DC offsets."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Float+"})," -> cutoff frequenzy in Hertz"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Divison/Int+"})," -> ramptime in milliseconds or fraction (optional, default=5)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set highPass 900 5000\nset highPass 800 2/1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alias: ",(0,t.jsx)(n.code,{children:"hipass"})]}),"\n",(0,t.jsx)(n.h2,{id:"lowpass",children:"lowPass"}),"\n",(0,t.jsxs)(n.p,{children:["Set the global low-pass filter cutoff in Hz for all instruments across the entire environment. Additional ramptime in milliseconds can be provided to create smooth transitions from one value to another. The default value is ",(0,t.jsx)(n.code,{children:"18000 Hz"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Float+"})," -> cutoff frequenzy in Hertz"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Divison/Int+"})," -> ramptime in milliseconds or fraction (optional, default=1)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set lowPass 900 5000\nset lowPass 800 2/1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alias: ",(0,t.jsx)(n.code,{children:"lopass"})]}),"\n",(0,t.jsx)(n.h2,{id:"beatrepeat",children:"beatRepeat"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["A beatrepeating effect (sometimes called ",(0,t.jsx)(n.code,{children:"stutter"}),") that continuously repeats a section of the entire sound that was last played. The repating interval is determined in fractions (",(0,t.jsx)(n.code,{children:"1/4"}),", ",(0,t.jsx)(n.code,{children:"3/16"}),", etc). It immediately starts repeating at the moment of evaluating the code, so timing is key! You can switch to a different section of the beatrepeat recording with optionally adding a second argument. Maximum recording length is 8 seconds (2x 4/4 bars at 60bpm, 1x 4/4 bar at 120bpm)."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Fraction"})," -> beatrepeat time interval in fraction"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Fraction"})," -> beatrepeat offset time in fraction"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set beatRepeat 1/4\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alias: ",(0,t.jsx)(n.code,{children:"stutter"})]}),"\n",(0,t.jsx)(n.h2,{id:"osc",children:"osc"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsx)(n.p,{children:"Set the ip-address, in-port and out-port number for the network to transmit OSC-messages using UDP. Default settings are 8000 (in-port), 9000 (out-port), localhost (127.0.0.1) (ip)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Int+"})," -> receiving port (default=8000)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Int+"})," -> sending port (default=9000)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," -> ip-address in the form of xxx.xxx.xxx.xxx or localhost (default=localhost)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// set everything to default\nset osc default\n\n// apply in-port, out-port and server-ip in one line\nset osc 8000 9000 127.0.0.1\n\n// apply settings separately\nset osc ip 127.0.0.1\nset osc in 8000\nset osc out 9000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"midi",children:"midi"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["With the midi object you can get the available devices (ports) that you can use to send midi notes to with a ",(0,t.jsx)(n.code,{children:"new midi"})," instrument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set midi getPorts\n// prints the available ports to the console\n"})}),"\n",(0,t.jsx)(n.h2,{id:"midiclock",children:"midiClock"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["Output midiClock sync messages to sync an external device to the tempo of Mercury. The device name can have spaces. Use the ",(0,t.jsx)(n.code,{children:"getports"})," argument to automatically open the console and view the different portnames. Use the ",(0,t.jsx)(n.code,{children:"off"})," message or ",(0,t.jsx)(n.code,{children:"silence"})," or ",(0,t.jsx)(n.code,{children:"alt + ."})," to stop the syncing and send a stop message."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," -> getPorts, the midi portname or off (default=off)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set midiClock getPorts\n// returns the port names in console and automatically opens the console\n\nset midiClock midiPortName\n// turn the clock on and \n// outputs clock-sync to midiport of that name\n\nset midiClock off\n// turn the clock off (default)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"click",children:"click"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["Enable a clicktrack/metronome sound to allow you to easily play along with the music. You can adjust the interval for the low pitch separately from the interval of the accent. The accent sounds an octave higher. You can also adjust the channel output for the click so you can hear it separately from the main output. Reset the settings with ",(0,t.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Name"})," -> ",(0,t.jsx)(n.code,{children:"on"}),", ",(0,t.jsx)(n.code,{children:"off"})," or ",(0,t.jsx)(n.code,{children:"default"})," (default=off)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set click on\n// turn the click on/off (default=off)\n\nset click freq 1000\n// set the base frequency for the click (default=900)\n\nset click length 0.9\n// adjust the length of the tone (default=0.65)\n\nset click time 1/8\n// set the base interval for the low pitch (default=1/4)\n\nset click accent 1/2\n// set the accent interval for the high pitch (default=1/1)\n\nset click gain 0.8\n// adjust the volume of the click sound (default=0.75)\n\nset click out 3 4\n// set the output channel(s) for the click, can be mono or stereo (default=1 2)\n\nset click default\n// reset all attributes to the default settings\n"})}),"\n",(0,t.jsx)(n.h1,{id:"crossfade",children:"crossFade"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury Playground only",type:"warning"}),"\n",(0,t.jsx)(n.p,{children:"Set the crossfade for the engine to fade from the previous running code to the newly evaluated code in x-amount of milliseconds or fractions. This feature is only applicable to the MercuryPlayground browser version because it works differently under the hood than the Max version."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"arguments"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Fraction/Int+"})," -> crossfade time in milliseconds or fraction (default=250)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set crossFade 1000\nset crossFade 2/1\n"})}),"\n",(0,t.jsx)(n.h1,{id:"samples",children:"samples"}),"\n",(0,t.jsx)(n.admonition,{title:"Mercury Playground only",type:"warning"}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.code,{children:"set samples"})," you can load samples in the playback buffer so they can be used with the ",(0,t.jsx)(n.code,{children:"sample"}),", ",(0,t.jsx)(n.code,{children:"loop"})," and ",(0,t.jsx)(n.code,{children:"polySample"})," instruments. There are multiple ways to add samples, for example using a ",(0,t.jsx)(n.code,{children:"url"})," from a freesound.org preview file, or by using a soundfile from a raw github content link."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"set samples"})," can only be called ",(0,t.jsx)(n.strong,{children:"once"})," in the code-file, so it is important to add all the sounds you want in that single line. This can lead to a very long line of code, so there are some ways to work around this. For example it is possible to input a ",(0,t.jsx)(n.code,{children:".json"})," file that consists of ",(0,t.jsx)(n.code,{children:"name:url"})," pairs for the soundfiles."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You don't have to load the samples every time you evaluate, once at the beginning of a session is enough. So after loading you can comment the line and the samples are available until you refresh/restart the browser."})}),"\n",(0,t.jsx)(n.p,{children:"Below you can read various use-case scenarios:"}),"\n",(0,t.jsx)(n.h2,{id:"single-soundfile",children:"single soundfile"}),"\n",(0,t.jsx)(n.h3,{id:"freesound",children:"freesound"}),"\n",(0,t.jsxs)(n.p,{children:["Load a single soundfile from for example freesound.org. Go to the site and find the file you like, right-click on the file and click 'inspect' (in chromium browser). Search for the ",(0,t.jsx)(n.code,{children:"cdn.freesound.org/previews"})," url in the html, this is the soundfile that needs to be copy-pasted. By default the name of the soundfile will be the name you use in the code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// only evaluate set samples once, when loading is done you can comment the line\nset samples 'https://cdn.freesound.org/previews/145/145778_2101444-lq.mp3'\n\nnew sample '145778_2101444-lq' time(1/4)\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can load a single soundfile and also adjust the name by creating a list. The first item in the list is the name you want to give the sample. The second item in the list is the url to the file."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// only evaluate set samples once, when loading is done you can comment the line\nset samples [ psykick 'https://cdn.freesound.org/previews/145/145778_2101444-lq.mp3' ]\n\nnew sample psykick time(1/4)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"github",children:"github"}),"\n",(0,t.jsxs)(n.p,{children:["Load a single soundfile from a source like github by locating the file in the repository. For example the url looks like this: ",(0,t.jsx)(n.code,{children:"https://github.com/tmhglnd/mercury/blob/master/mercury_ide/media/samples/drums/kick/kick_house.wav"}),". Now construct a new url starting with ",(0,t.jsx)(n.code,{children:"https://raw.githubusercontent.com/"})," then past the ",(0,t.jsx)(n.code,{children:"user/repository/branch"})," after this but remove the ",(0,t.jsx)(n.code,{children:"/blob"}),"! For example the result should look like this: ",(0,t.jsx)(n.code,{children:"https://raw.githubusercontent.com/tmhglnd/mercury/master/mercury_ide/media/samples/drums/kick/kick_house.wav"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set samples [ housekick 'https://raw.githubusercontent.com/tmhglnd/mercury/master/mercury_ide/media/samples/drums/kick/kick_house.wav' ]\n\nnew sample housekick time(1/4)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"multiple-soundfiles",children:"multiple soundfiles"}),"\n",(0,t.jsx)(n.h3,{id:"lists",children:"lists"}),"\n",(0,t.jsxs)(n.p,{children:["There are two ways to load a larger collection of samples. The first option is by creating variables of ",(0,t.jsx)(n.code,{children:"list"}),"s that store the name and url combination. Then in one single ",(0,t.jsx)(n.code,{children:"set samples"})," line you can add all the names of the lists"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"list s1 [ snare_short 'https://cdn.freesound.org/previews/671/671221_3797507-lq.mp3' ]\nlist s2 [ psykick 'https://cdn.freesound.org/previews/145/145778_2101444-lq.mp3' ]\nlist s3 [ hat_short 'https://cdn.freesound.org/previews/222/222058_1676145-lq.mp3' ]\nset samples s1 s2 s3\n\nnew sample psykick time(1/4)\nnew sample snare_short time(1/16) play(euclid(7 3)) gain(0.5)\nnew sample hat_short time(1/4 1/8) gain(1.3)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"json",children:"json"}),"\n",(0,t.jsxs)(n.p,{children:["The second option is creating a ",(0,t.jsx)(n.code,{children:".json"})," file. This file can be stored on the computer or on for example github. The json file is structured in the following way: ",(0,t.jsx)(n.code,{children:'{ "sample-name" : "url-to-file" }'}),". When clicking ",(0,t.jsx)(n.code,{children:"add sounds"})," the json file can be selected instead of a soundfile and it will be used to load the samples."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "snare_short" : "https://cdn.freesound.org/previews/671/671221_3797507-lq.mp3",\n    "psykick" : "https://cdn.freesound.org/previews/145/145778_2101444-lq.mp3",\n    "hat_short" : "https://cdn.freesound.org/previews/222/222058_1676145-lq.mp3"\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"set samples <url-to-raw-json-file>\n\nnew sample psykick time(1/4)\nnew sample snare_short time(1/16) play(euclid(7 3)) gain(0.5)\nnew sample hat_short time(1/4 1/8) gain(1.3)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"base",children:"base"}),"\n",(0,t.jsxs)(n.p,{children:["If the base url is the same for all the sample files, for example when loading samples via freesound, you can add a ",(0,t.jsx)(n.code,{children:'"_base" :'})," key, followed by the part of the url that is the same for all the samples. Make sure you include the last ",(0,t.jsx)(n.code,{children:"/"})," so the complete url is correct."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "snare_short" : "671/671221_3797507-lq.mp3",\n    "psykick" : "145/145778_2101444-lq.mp3",\n    "hat_short" : "222/222058_1676145-lq.mp3",\n    "_base" : "https://cdn.freesound.org/previews/"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const i={},l=t.createContext(i);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);