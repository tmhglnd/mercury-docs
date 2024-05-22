"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[543],{4249:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(4848),a=s(8453);const t={sidebar_position:3},i="\ud83c\udfae Quick Features Overview",o={id:"about/features",title:"\ud83c\udfae Quick Features Overview",description:"Below is a brief overview of several things you can do with Mercury. But this is of course just scratching the surface!",source:"@site/docs/about/features.md",sourceDirName:"about",slug:"/about/features",permalink:"/mercury/docs/about/features",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd2d What can you do with Mercury?",permalink:"/mercury/docs/about/vision"},next:{title:"\ud83d\udc7e Made with Mercury",permalink:"/mercury/docs/about/inspiration"}},c={},l=[];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",hr:"hr",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-quick-features-overview",children:"\ud83c\udfae Quick Features Overview"}),"\n",(0,r.jsx)(n.p,{children:"Below is a brief overview of several things you can do with Mercury. But this is of course just scratching the surface!"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Quick access to playback of samples and change timing and tempo of samples or synthesizers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"set tempo 89\n\nnew sample kick_909 time(1/4)\nnew sample hat_909 time(3/16)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Make rhythmic patterns with sequences of numbers and probabilities"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"list loBeat [1 0 0 1 0.5]\nlist hiBeat [0 1 0.2 0]\n\nnew sample tabla_lo time(1/8) play(loBeat)\nnew sample tabla_hi time(1/8) play(hiBeat)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate psuedorandom melodic content for a synthesizer in a range and set a scale"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"set scale minor d\nset randomSeed 31415\n\nlist melody random(16 0 24)\n\nnew synth saw note(melody) time(1/16) shape(4 100)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Design sounds with various effects"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new sample chimes time(2) speed(0.25) fx(reverb 0.3 15) fx(drive 10) fx(lfo 1/8 sine)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Easily give multiple instruments the same effects"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new sample chimes time(2)\nnew sample harp_down time(3)\nnew sample gong_lo time(5)\n\nset all fx(lfo 1/16) fx(delay) fx(reverb 0.5 11)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Sync audio loops to the tempo of your music"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"set tempo 97\n\nnew loop amen time(1)\nnew sample kick_house time(1/4)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Generate sequences algorithmically by combining list-functions to compose complex structures and choose from an extensive library of algorithms to work with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"set scale minor a \n\nlist rhythm euclidean(32 13)\n\nlist melody spread(5 0 24)\nlist melody palinedrome(melody)\nlist melody clone(melody 0 5 7 3)\nlist melody lace(melody melody)\n\nnew synth triangle note(melody 1) shape(1 80) play(rhythm)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Control external midi devices or applications by sending midi and cc "}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'new midi "Your Awesome Midi Device" time(1/16) note(7 1) name(mDev)\n    set mDev length(1/16) gain(0.8) chord(off)\n    set mDev control(10 [20 50 100])\n'})}),"\n",(0,r.jsx)(n.p,{children:"Control other environments via OSC-messages"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"list params [0.25 0.5 0.75]\n\nnew emitter osc address(yourDevice) theParam(params) time(1/4)\n\n// emits => /yourDevice/theParam 0.25\n//          /yourDevice/theParam 0.5\n//          /yourDevice/theParam 0.75\n//          /yourDevice/theParam 0.25\n//          etc...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Easily control parameters in Mercury via external OSC-messages (",(0,r.jsxs)(n.em,{children:["only when running MercuryPlayground ",(0,r.jsx)(n.a,{href:"#-install",children:"localhost"})," or Mercury4Max"]}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new synth triangle fx(reverb '/synth/verb') fx(filter low '/synth/cutoff' 0.4) time(1) shape(1 'synth/length')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Sequence Hyrda visuals with instruments (",(0,r.jsx)(n.em,{children:"experimental and MercuryPlayground only"}),")"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"list hydras ['osc(10,0.1,2).out()' 'osc(20,-0.5,5).out()' 'osc(5,1,12).out()']\n\nnew sample kick_min time(1/16) play([1 0 0 1 0]) visual(hydras)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(6540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);