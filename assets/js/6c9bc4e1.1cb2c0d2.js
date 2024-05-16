"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[868],{5998:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(4848),t=i(8453);const r={sidebar_position:4},l="Instrument Effects",d={id:"reference/effects",title:"Instrument Effects",description:"You can add one ore multiple effects to the sound of the instrument to manipulate the sounds timbre in different ways. The first argument is always the effect-name. The arguments that follow depend on the selected effect. fx() can be used as an alias to reduce some typing. For ease of use some arguments can be skipped to access the most used arguments. How this works is explained per effect if applicable.",source:"@site/docs/reference/effects.md",sourceDirName:"reference",slug:"/reference/effects",permalink:"/mercury-docs/docs/reference/effects",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Instrument Functions",permalink:"/mercury-docs/docs/reference/instruments"},next:{title:"List Functions",permalink:"/mercury-docs/docs/reference/list-functions"}},o={},a=[{value:"Static vs. Dynamic FX-Chains",id:"static-vs-dynamic-fx-chains",level:2},{value:"Static FX-Chain",id:"static-fx-chain",level:2},{value:"chorus",id:"chorus",level:2},{value:"comb",id:"comb",level:2},{value:"degrade",id:"degrade",level:2},{value:"delay",id:"delay",level:2},{value:"distort",id:"distort",level:2},{value:"double",id:"double",level:2},{value:"filter",id:"filter",level:2},{value:"filter modulation",id:"filter-modulation",level:3},{value:"freeze",id:"freeze",level:2},{value:"kink",id:"kink",level:2},{value:"lfo",id:"lfo",level:2},{value:"reverb",id:"reverb",level:2},{value:"shift",id:"shift",level:2},{value:"squash",id:"squash",level:2},{value:"triggerFilter",id:"triggerfilter",level:2},{value:"vibrato",id:"vibrato",level:2},{value:"vocoder",id:"vocoder",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"instrument-effects",children:"Instrument Effects"}),"\n",(0,s.jsxs)(n.p,{children:["You can add one ore multiple effects to the sound of the instrument to manipulate the sounds timbre in different ways. The first argument is always the ",(0,s.jsx)(n.code,{children:"effect-name"}),". The arguments that follow depend on the selected effect. ",(0,s.jsx)(n.code,{children:"fx()"})," can be used as an alias to reduce some typing. For ease of use some arguments can be skipped to access the most used arguments. How this works is explained per effect if applicable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw fx(<effect-name> <value1> <value2> ... <value-n>)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"static-vs-dynamic-fx-chains",children:"Static vs. Dynamic FX-Chains"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"Mercury4Max"})," version has a static effects-chain. This means the order in the effects under the hood is fixed. The order is documented under ",(0,s.jsx)(n.a,{href:"#static-fx-chain",children:"Static FX Chain"}),". Because of this there is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No option to change the order of effects with the code"}),"\n",(0,s.jsx)(n.li,{children:"No option to use effects multiple times in one instrument"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="static fx-chain"',children:"new synth saw fx(reverb) fx(filter low 2000) fx(distort) fx(filter low 300)\n// filter and distortion are fixed before reverb in the chain, the order of \n// the code doesn't matter. There is only one filter in the chain, the first \n// filter is therefore overwritten by the other\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"MercuryPlayground"})," version has a dynamic effects-chain. This means the order in the effects is determined by how you type the code. Because of this there is:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Decide the order of effects by the order of the code you type"}),"\n",(0,s.jsx)(n.li,{children:"Use effects multiple times on one instrument"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="dynamic fx-chain"',children:"new synth saw fx(reverb) fx(filter low 2000) fx(distort) fx(filter low 300)\n// the reverb will be filtered, then distorted and then filtered again\n// the resulting sound is filtered twice\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["There are differences in sound between the ",(0,s.jsx)(n.em,{children:"Mercury4Max"})," and ",(0,s.jsx)(n.em,{children:"MercuryPlayground"})," versions. Parameters may need some tweaking when you port from one environment to the other."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Not all effects from ",(0,s.jsx)(n.em,{children:"Mercury4Max"})," are available in the ",(0,s.jsx)(n.em,{children:"MercuryPlayground"})," because some are in the process of being ported, and some are sadly not as easy to implement with Web Audio."]})}),"\n",(0,s.jsx)(n.h2,{id:"static-fx-chain",children:"Static FX-Chain"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"instrument (eg. sample, synth, input)\n|\nfreeze (spectral freezer)\n|\nshift (pitchshifter)\n|\nvibrato (pitch modulation)\n|\ntriggerFilter (envelope modulated filter)\n|\nkink (distortion)\n|\ndistort (distortion)\n|\nfilter (low/hi/band filter with optional LFO modulation)\n|\ncomb (combfiltering)\n|\ndegrade (downsampling)\n|\nsquash (basic compression/distortion)\n|\ngain (the volume of the sound) -> sender\n|\npanning (mono to stereo)\n||\ndouble / chorus\n||\n|| >> vv\n||    +\n||    reverb (stereo)\n++ << <<\n||\nlfo (low frequency oscillator)\n||\ndelay (stereo pingpong delay)\n||\noutput\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="Channels"',children:"|  mono\n-  mono\n|| stereo\n=  stereo\n++ sum\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chorus",children:"chorus"}),"\n",(0,s.jsxs)(n.p,{children:["Add a Chorus effect to the sound. The original sound is played in the center and two delayed version are played left and right, of which the delaytimes are slightly modulated. Arguments are the modulation speed in fraction, the modulation depth in milliseconds, the modulation wave ",(0,s.jsx)(n.code,{children:"sine"})," or ",(0,s.jsx)(n.code,{children:"random"}),", the dry-wet ratio between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"})," and a detune factor between left and right modulation wave in floating."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction(List)"})," -> modulation rate (default=4/1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> modulation depth in ms (default=8 for double, default=45 for chorus)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name(List)"})," -> modulation wave, sine or random (default=random)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet (default=1 for double, default=0.5 for chorus)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> modulation rate detune (default=0.94562)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(chorus)\nfx(chorus <rate>)\nfx(chorus <rate> <depth> <wave> <dry-wet> <detune>)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw fx(chorus 5/1 30) shape(1 1/4) time(1/2) note(0 1)\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"MercuryPlayground",type:"warning",children:[(0,s.jsx)(n.p,{children:"There are some small differences for this effect in the browser version:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction"})," -> modulation rate (default=8/1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+"})," -> modulation depth in ms (default=8 for double, default=45 for chorus)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+"})," -> dry-wet (default=1 for double, default=0.5 for chorus)"]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(chorus)\nfx(chorus <rate>)\nfx(chorus <rate> <depth> <dry-wet>)\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"comb",children:"comb"}),"\n",(0,s.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,s.jsx)(n.p,{children:"A combfilter effect. This combines a small delayed version of the sound with the original sound resulting in a combfilter, giving a metallic quality to the sound. The first argument is the semitone the filter is tuned at (synced to the scale and allowing for detuning with floating points), the second optional argument is a feedback amount."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> filter frequency as note semiton (default=0)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> filter feedback between 0 and 0.99 (default=0.8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=0.5)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw fx(comb 7 0.4)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"degrade",children:"degrade"}),"\n",(0,s.jsxs)(n.p,{children:["A downsampling/8bit/chiptune effect. The signal is downsampled by a factor, where ",(0,s.jsx)(n.code,{children:"0"})," means no downsampling (original samplerate) and ",(0,s.jsx)(n.code,{children:"0.5"})," is half the samplerate etc (e.g. 44100 * 0.5 = 22050)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> downsampling amount between 0-1 (default = 0.5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw fx(degrade 0.75)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"chip"})]}),"\n",(0,s.jsx)(n.h2,{id:"delay",children:"delay"}),"\n",(0,s.jsxs)(n.p,{children:["Add a pingpong delay effect to the sound. The effect has 4 arguments, the left delaytime, the right delaytime, the feedback and the damping. The delaytime is specified in bar time fractions, where ",(0,s.jsx)(n.code,{children:"0.25"})," (or ",(0,s.jsx)(n.code,{children:"1/4"}),") is a quarter note. The feedback is specified as a value between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"}),". Positive feedback is allowed and internally compressed/distorted, but watch out for your ears just in case. The damping is a onepole lowpass filter for which the cutoff is specified between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"})," where 0 means full damping, and 1 means none (filter open)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction(List)"})," -> delaytime for left (optional, default=3/16)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction(List)"})," -> delaytime for right (optional, default=2/8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> feedback 0-1 (optional, default=0.8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> damping 0-1 (optional, default=0.5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> drywet 0-1 (optional, 1=100% wet, default=0.5)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(delay) (defaults)\nfx(delay <timeLR>)\nfx(delay <timeLR> <fb>)\nfx(delay <timeL> <timeR> <fb>)\nfx(delay <timeL> <timeR> <fb> <damp>)\nfx(delay <timeL> <timeR> <fb> <damp> <drywet>)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample hat_909 time(1/2) fx(delay 3/16 7/16 0.5 0.7)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"echo"})]}),"\n",(0,s.jsx)(n.h2,{id:"distort",children:"distort"}),"\n",(0,s.jsxs)(n.p,{children:["A distortion/overdrive/soft-clipping effect. Uses the ",(0,s.jsx)(n.code,{children:"tanh(x * g)"})," algorithm and a ",(0,s.jsx)(n.code,{children:"1.0/sqrt(g)"})," for gain compensation."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> distortion amount, greater then 0 (optional, default=2)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample kick_909 fx(drive 15 0.4)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"drive"})]}),"\n",(0,s.jsx)(n.h2,{id:"double",children:"double"}),"\n",(0,s.jsxs)(n.p,{children:["Add an Automated-Double-Tracking (ADT) effect to the sound. It will sound like two versions of the sound are created, one left and one right. This effect is the ",(0,s.jsx)(n.code,{children:"chorus"})," effect but with ",(0,s.jsx)(n.code,{children:"wet = 1"}),". See ",(0,s.jsx)(n.a,{href:"#chorus",children:(0,s.jsx)(n.code,{children:"chorus"})})," for more info about all the parameters."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample clap_808 fx(double) time(1/4)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"filter",children:"filter"}),"\n",(0,s.jsxs)(n.p,{children:["Add a filter to the sound. This can be a static filter or a modulated filter depending on the amount of arguments you provide. The filter-type can be a ",(0,s.jsx)(n.code,{children:"low"}),", ",(0,s.jsx)(n.code,{children:"high"})," or ",(0,s.jsx)(n.code,{children:"band"}),"-pass filter. The second argument is the cutoff frequency in Hz and the third argument is the resonance between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"}),". Passing a single argument only sets the cutoff, passing two arguments sets the cutoff and resonances. The filter then defaults to ",(0,s.jsx)(n.code,{children:"lowpass"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," -> filter type, low, high, band (default=low)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> cutoff frequency in Hz (default=1200)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> resonance between 0-1 (default=0.45)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(filter)\nfx(filter <cutoff>)\nfx(filter <cutoff> <resonance>)\nfx(filter <type> <cutoff> <resonance>)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw note(0 1) shape(-1) fx(filter low 800 0.6)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"filter-modulation",children:"filter modulation"}),"\n",(0,s.jsxs)(n.p,{children:["You can provide extra arguments to have the filter modulate between a low and high cutoff-frequency. In this case the arguments are as follows (in order): The filter-type ",(0,s.jsx)(n.code,{children:"low / high / band"}),". The modulation speed in float/fraction where ",(0,s.jsx)(n.code,{children:"0.25"})," or ",(0,s.jsx)(n.code,{children:"1/4"})," = a quarter note. The upper cutoff in Hz, the lower cutoff in Hz the resonance between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"0.99"}),". The modulation shape tilt between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"1"}),", where 0 is ramp-down, 1 is ramp-up and 0.5 is triangle form (although the ramp-up and down can change if you swap the upper and lower cutoff values). The exponential curve for the filter as floating point ",(0,s.jsx)(n.code,{children:"0"})," - ",(0,s.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," -> filter type, low, high, band (default=low)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction(List)"})," -> modulation ratio (default=1/1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> low modulation frequency in Hz (default=200)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> high modulation frequency in Hz (default=3000)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> resonance between 0-1 (default=0.45)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> modulation slope 0-1 (up, triangle, down) (default=0.5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> exponential scaling (default=2)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw note(0 0) fx(filter low 1/4 100 3500 0.55 0 4)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"freeze",children:"freeze"}),"\n",(0,s.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,s.jsxs)(n.p,{children:['Create an FFT-freeze effect on the sound. This will result in a "frozen-in-time"-like sound, where the timbre is still clearly audible. The freezer is triggered at the time interval of the ',(0,s.jsx)(n.code,{children:"time()"})," function. The trigger can be set with a float to give it a probability of triggering, or a list can be provided to let the freezing occor in a rhythmic pattern. The second optional argument determines the sliding time between 2 freeze frames (in n-frames), and the third optional argument sets the amount of frames to store (one frame is 1024 samples)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number(List)"})," -> freeze rhythm or probability (default=1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Int(List)"})," -> interpolation between frames (default=0)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Int(List)"})," -> number of frames stored in freezer (default=8)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"list playHarp [1 0 0 0 0 0 0 0]\nlist trigger [1 0 0 0 0]\n\nnew sample harp_up time(1/4) beat(playHarp) name(harp)\n    set harp fx(freeze trigger)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"kink",children:"kink"}),"\n",(0,s.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,s.jsx)(n.p,{children:'A kink distortion algorithm. Creates a bend or "kink" in the audio signal.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> distortion amount, greater then 0 (optional, default=5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample violin_c time(1) fx(kink 15)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lfo",children:"lfo"}),"\n",(0,s.jsxs)(n.p,{children:['Add a Low Frequency Oscillator effect to the sound. This results in a rapidly fading in/out sounding effect (a tremolo, or sometimes called "helicopter" sound). Various arguments allow to shape the speed and type of wave for modulation. The first argument is the rate as ',(0,s.jsx)(n.code,{children:"fraction"}),". The second argument is the shape type ",(0,s.jsx)(n.code,{children:"square"}),", ",(0,s.jsx)(n.code,{children:"up"}),", ",(0,s.jsx)(n.code,{children:"down"})," or  ",(0,s.jsx)(n.code,{children:"sine"}),". With the third argument you can change the lowest amplitude of the modulation and with the optional fourth argument you can change the width (only works with the square)"]}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"tremolo"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Fraction(List)"})," -> speed of the LFO (default=1/16)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name(List)"})," -> type of the wave, square, up, down or sine (default=square)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> width of the square wave between 0-1 (optional, default=0.5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> offset of the waveform 0-1 (optional, default=0) ",(0,s.jsx)(n.em,{children:"Mercury4Max only"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(lfo)\nfx(lfo <time-fraction>)\nfx(lfo <time> <type>)\nfx(lfo <time> <type> <dry-wet> <width> <offset>)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new loop amen fx(lfo 1/16)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reverb",children:"reverb"}),"\n",(0,s.jsxs)(n.p,{children:["Add a reverberation effect to the sound, making it sound like it's in a room or big hall. The effect has 2 arguments, the amplitude of the reverb and the reverb-size. The amplitude is specified as floating-point amplitude and the length is a value between ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"18"})," (choosing between 19 presets). The default is ",(0,s.jsx)(n.code,{children:"0.5"})," amplitude and ",(0,s.jsx)(n.code,{children:"10"})," length."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> amplitude of reverb (default=0.5)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> size of reverb 0-18 in seconds (default=10)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> slide time in milliseconds when size is changed (default=10) ",(0,s.jsx)(n.em,{children:"Mercury4Max only"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> drywet 0-1 (optional, 1=100% wet, default=0.5) ",(0,s.jsx)(n.em,{children:"Mercury4Max only"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fx(reverb)\nfx(reverb <size>)\nfx(reverb <amount> <size>)\nfx(reverb <amount> <size> <slide> <dry-wet>)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample snare_909 time(1) fx(reverb 0.93 15)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alias: ",(0,s.jsx)(n.code,{children:"hall"})]}),"\n",(0,s.jsx)(n.h2,{id:"shift",children:"shift"}),"\n",(0,s.jsx)(n.p,{children:"Make a time-domain pitchshifting effect to change the pitch of the sound. The first argument sets the shift in semitones (this can also be a floating-point value to create microtonal shifts). The second value sets the dry-wet ratio (default = 1) to combine the original with the shifted sound. You can change the shifting quality (higher quality sounds better but uses more cpu)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number(List)"})," -> shifting factor (positive/negative) in semitones (optional, default=-12)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet mix between 0-1 (optional, default=1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," -> shifting settings ",(0,s.jsx)(n.code,{children:"basic"}),", ",(0,s.jsx)(n.code,{children:"good"}),", ",(0,s.jsx)(n.code,{children:"better"}),", ",(0,s.jsx)(n.code,{children:"best"})," (optional, default=basic)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample violin_c time(1/4) fx(shift 7 0.5)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"squash",children:"squash"}),"\n",(0,s.jsx)(n.p,{children:"A simple compression/distortion algorithm based on a design by Peter McCulloch. Raise the amount to squash the incoming signal, first creating some kind of compression, but quickly introduces nice distortion harmonics."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> input gain amount, greater than 1 (optional, default=4)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> dry-wet factor 0-1 (optional, default=1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample piano_e time(1) fx(squash 2.3)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"triggerfilter",children:"triggerFilter"}),"\n",(0,s.jsx)(n.p,{children:"A filter with an envelope that is controlled by the trigger of the instrument. Whenever the sequencer triggers an event that causes the instrument to sound this will also be the event that triggers the start of this filter. The filter has various types, a low and high frequency value for the envelope to move between, an attack and release time in ms or fraction value and an optional exponent for the slope of the filter."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," -> filter type, ",(0,s.jsx)(n.code,{children:"low"}),", ",(0,s.jsx)(n.code,{children:"high"}),", ",(0,s.jsx)(n.code,{children:"band"})," (default=low)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+/Fraction(List)"})," -> attack time in ms or fraction (default=1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+/Fraction(List)"})," -> release time in ms or fraction (default=1/16)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> upper frequency point in the envelope (default=4000)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> lower frequency point in the envelope (default=100)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+(List)"})," -> exponent for the envelope curve (default=1)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"list beat euclid(8 3)\nnew synth saw note(0 1) time(1/8) play(beat) fx(triggerFilter low 10 1/4 1000 150 0.5)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vibrato",children:"vibrato"}),"\n",(0,s.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,s.jsx)(n.p,{children:"Add a vibrato effect to the incoming signal by modulating a short delayline with a sinewave. The depth sets the delayline length in ms, the rate sets the frequency of the sinewave in Hz."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> vibrato rate in Hz (optional, default=2)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+(List)"})," -> vibrato depth in ms (optional, default=5)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new sample violin_c time(1/4) fx(vibrato 4 5)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"vocoder",children:"vocoder"}),"\n",(0,s.jsx)(n.admonition,{title:"Mercury4Max only",type:"warning"}),"\n",(0,s.jsxs)(n.p,{children:["A classic vocoder effect consisting of 16 resonant bandpass filters spread logarithmically between a low and high frequency range with a specified resonance Q factor. The input sound will be analyzed through the bands with an amplitude follower (with variable release time) and the carrier sound will be used to output the synthesized result. The carrier is noise by default, but can be set to receive from an other named synth or sample. For this use the ",(0,s.jsx)(n.code,{children:"name()"})," method. Optionally a threshold can adjust which bands are passed through, only if their amplitude is loud enough."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"arguments"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Name"})," -> carrier source name of other instrument (default=noise)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+"})," -> bandpass filter resonance 0-100 (default=15)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+"})," -> amplitude following release time in ms (default=50)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+"})," -> wet dry ratio 0-1 (default=1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+"})," -> lowest frequency of the filterbank (default=50)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Number+"})," -> highest frequency of the filterbank (default=10000)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Float+"})," -> band threshold 0-1 (default=0)"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new synth saw name(bass) note(0 0) shape(-1) gain(1 0 1)\n\nnew loop amen fx(vocoder bass 20 100 1 50 5000)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>d});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);