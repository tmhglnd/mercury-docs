"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[716],{659:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(4848),r=s(8453);const t={sidebar_position:1},l="Actions",o={id:"reference/actions",title:"Actions",description:"The action keywords are used to start a line of Mercury code with. Only lines starting with these keywords are valid. The keywords are: new, list, set, print and silence.",source:"@site/docs/reference/actions.md",sourceDirName:"reference",slug:"/reference/actions",permalink:"/mercury-docs/docs/reference/actions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Syntax Overview",permalink:"/mercury-docs/docs/reference/syntax"},next:{title:"Global Settings",permalink:"/mercury-docs/docs/reference/global"}},c={},d=[{value:"new",id:"new",level:2},{value:"list",id:"list",level:2},{value:"set",id:"set",level:2},{value:"print",id:"print",level:2},{value:"silence",id:"silence",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"actions",children:"Actions"}),"\n",(0,i.jsxs)(n.p,{children:["The action keywords are used to start a line of Mercury code with. Only lines starting with these keywords are valid. The keywords are: ",(0,i.jsx)(n.code,{children:"new"}),", ",(0,i.jsx)(n.code,{children:"list"}),", ",(0,i.jsx)(n.code,{children:"set"}),", ",(0,i.jsx)(n.code,{children:"print"})," and ",(0,i.jsx)(n.code,{children:"silence"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,i.jsxs)(n.p,{children:["Create a new instance of an instrument object. For example this can be a ",(0,i.jsx)(n.code,{children:"sample"}),", ",(0,i.jsx)(n.code,{children:"synth"}),", ",(0,i.jsx)(n.code,{children:"loop"}),", ",(0,i.jsx)(n.code,{children:"polySynth"})," or ",(0,i.jsx)(n.code,{children:"midi"})," object, followed by the name of the sample, the name of the waveshape to use for the synth, the or the midi device name (See ",(0,i.jsx)(n.a,{href:"instruments",children:"Instrument Functions"})," for more details). Use instrument methods to set parameters for that object on the same line."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"arguments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Instrument"})," -> the instrument type (eg. sample, synth, loop, polySynth, midi, modulator)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Source"})," -> selected sample or synth source (based on loaded files)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Functions+"})," -> instrument functions seperated by spaces (optional)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'new synth saw shape(20 500)\n\nnew sample kick_909 time(1/8)\n\nnew midi "AU DLS Synth 1" note(3 1)\n'})}),"\n",(0,i.jsx)(n.p,{children:"By default Mercury has a small library of samples included in the environment. It is possible to include your own sounds as well:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/mercury-docs/docs/usage/mercury4max-overview#sounds",children:"Load sounds in Mercury4Max"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/mercury-docs/docs/usage/playground-overview#add-sounds",children:"Load sounds in MercuryPlayground"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/mercury-docs/docs/usage/sounds",children:"Full list of all the included sounds"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"list",children:"list"}),"\n",(0,i.jsxs)(n.p,{children:["Create a list, which is sometimes called a ",(0,i.jsx)(n.code,{children:"circular array"})," or ",(0,i.jsx)(n.code,{children:"ring"}),". This list can contain many types of items such as whole numbers (integers), decimal numbers (floats), names, strings, fractions and other rings (2-dimensional). Use these to change parameters over time for instruments. The ",(0,i.jsx)(n.code,{children:"list"})," must be declared with a ",(0,i.jsx)(n.code,{children:"name"})," before it can be used as a variable in an instrument function. Read more about all the algorithmic functions available for generating and transforming lists under ",(0,i.jsx)(n.a,{href:"list-functions",children:"List Functions"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"arguments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"})," -> list ",(0,i.jsx)(n.code,{children:"name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Values"})," -> one or more values between brackets ",(0,i.jsx)(n.code,{children:"[ ]"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Function"})," -> a ",(0,i.jsx)(n.code,{children:"list-function"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"list someValues [ 0 1.618 21 3.14 ]\n\nlist someSounds [ kick_909 hat_909 snare_909 hat_909 ]\n\nlist fromFunction random(20 0 100)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use clear descriptive variable names for lists to keep your code readable for yourself and for anyone you share it with. For example a list with a rhythm for a hihat can be called ",(0,i.jsx)(n.code,{children:"hatBeat"}),", and a list with a melodic phrase for a verse could be named ",(0,i.jsx)(n.code,{children:"verseNotes"}),". Using names that are also functions is not advised (eg. ",(0,i.jsx)(n.code,{children:"gain"}),", ",(0,i.jsx)(n.code,{children:"shape"}),", ",(0,i.jsx)(n.code,{children:"random"})," etc.)"]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Some variable names are not allowed because they are part of the reserved names for datastructures. These are: ",(0,i.jsx)(n.code,{children:"bang, int, float, mode, zlclear, zlmaxsize, new, list, set, print"}),"."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Deprecated: ",(0,i.jsx)(n.code,{children:"ring"})]}),(0,i.jsxs)(n.p,{children:["In earlier versions this was called a ",(0,i.jsx)(n.code,{children:"ring"})," because it refers to a ",(0,i.jsx)(n.em,{children:"circular array"}),", however ",(0,i.jsx)(n.code,{children:"list"})," is more accessible when learning programming."]})]}),"\n",(0,i.jsx)(n.h2,{id:"set",children:"set"}),"\n",(0,i.jsxs)(n.p,{children:["Use the set action to change global settings in the environment or append instrument-functions for an instance of an instrument via ",(0,i.jsx)(n.code,{children:"name"}),", ",(0,i.jsx)(n.code,{children:"group-name"})," or ",(0,i.jsx)(n.code,{children:"all"}),". The instrument must be declared with a ",(0,i.jsx)(n.code,{children:"name()"})," or ",(0,i.jsx)(n.code,{children:"group()"})," before ",(0,i.jsx)(n.code,{children:"set"})," is called."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"arguments"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"})," -> parameter or instrument name to set with value or function","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Value"})," -> value to apply to the setting"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Function"})," -> instrument-function to apply"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"set tempo 125\n\nnew synth saw name(bass)\n    set bass time(1/16)\n\nnew sample kick_909 group(drums)\nnew sample snare_909 group(drums)\n    set drums fx(drive)\n\n    set all fx(reverb)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The 4-spaces indent with ",(0,i.jsx)(n.code,{children:"tab"})," in the example above is not mandatory but can help to keep your code readable"]})}),"\n",(0,i.jsx)(n.h2,{id:"print",children:"print"}),"\n",(0,i.jsxs)(n.p,{children:["Use the print action to view the content of a ",(0,i.jsx)(n.code,{children:"list"})," or the result of a ",(0,i.jsx)(n.code,{children:"list-function"}),". The result is printed in the console window."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"list rnd random(12)\nlist sin spread(10 0 100)\n\nprint rnd\nprint sin\n"})}),"\n",(0,i.jsx)(n.h2,{id:"silence",children:"silence"}),"\n",(0,i.jsxs)(n.p,{children:["Use silence to disable all sounds. Alternatively you can hit the ",(0,i.jsx)(n.code,{children:"Alt/Ctrl + ."})," shortkey to disable everything."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"silence\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In a performance situation this code is usually not desirable to use. Instead use ",(0,i.jsx)(n.code,{children:"gain(0)"})," to (temporarily) pause instruments or use ",(0,i.jsx)(n.code,{children:"//"})," to comment instruments and disable them."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Deprecated:"})," ",(0,i.jsx)(n.code,{children:"killAll"})]}),(0,i.jsxs)(n.p,{children:["In earlier versions this was named ",(0,i.jsx)(n.code,{children:"killAll"}),", but: ",(0,i.jsx)(n.strong,{children:"make love, not war \u270c\ufe0f\u262e\ufe0f\u270c\ufe0f"})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);