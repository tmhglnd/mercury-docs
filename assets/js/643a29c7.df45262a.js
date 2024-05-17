"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[452],{8586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var r=t(4848),o=t(8453);const s={sidebar_position:6},i="\ud83d\udee0 Extending Mercury",a={id:"usage/extending",title:"\ud83d\udee0 Extending Mercury",description:"In this page you can find help on how to create your own synths for Mercury4Max or the MercuryPlayground in the engine. For this you will work with Max8 or with JavaScript. It is currently not possible to code new synths with the Mercury language itself.",source:"@site/docs/usage/extending.md",sourceDirName:"usage",slug:"/usage/extending",permalink:"/mercury-docs/docs/usage/extending",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udea7 Troubleshooting",permalink:"/mercury-docs/docs/usage/troubleshooting"},next:{title:"\ud83d\udcd6 Reference",permalink:"/mercury-docs/docs/category/-reference"}},c={},h=[{value:"Create a synth for Mercury4Max",id:"create-a-synth-for-mercury4max",level:2},{value:"Create the patch",id:"create-the-patch",level:3},{value:"I/O",id:"io",level:3},{value:"Muting",id:"muting",level:3},{value:"Functions",id:"functions",level:3},{value:"Trigger",id:"trigger",level:3},{value:"noteCount",id:"notecount",level:3},{value:"argListLookup",id:"arglistlookup",level:3},{value:"Example Patcher",id:"example-patcher",level:3},{value:"Create a Synth for MercuryPlayground",id:"create-a-synth-for-mercuryplayground",level:2},{value:"Setup",id:"setup",level:3},{value:"Create an Instrument Class",id:"create-an-instrument-class",level:3},{value:"Add to the language",id:"add-to-the-language",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-extending-mercury",children:"\ud83d\udee0 Extending Mercury"}),"\n",(0,r.jsx)(n.p,{children:"In this page you can find help on how to create your own synths for Mercury4Max or the MercuryPlayground in the engine. For this you will work with Max8 or with JavaScript. It is currently not possible to code new synths with the Mercury language itself."}),"\n",(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"warning",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"These features are still experimental and in the future things might change!"})})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-synth-for-mercury4max",children:"Create a synth for Mercury4Max"}),"\n",(0,r.jsx)(n.p,{children:"You can extend Mercury4Max with custom synths and other sound designing patches programmed in Max8. This requires knowledge/experience with the MaxMSP programming paradigm. It also requires you to have a Max8 license so you can edit and save the patches. Follow the steps below to setup your own patch. You can also copy-paste the compressed code on the bottom of the page."}),"\n",(0,r.jsx)(n.h3,{id:"create-the-patch",children:"Create the patch"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new patch for your custom sound design. Save the patch in ",(0,r.jsx)(n.code,{children:"~/Documents/Mercury/Library/Sound"}),", if you do not have this folder you should create it. Give the patch an appropriate name, this will also be the name used in the live coding environment. For example: if you name the patch ",(0,r.jsx)(n.code,{children:"myCustomSynth.maxpat"}),", then in Mercury you will type ",(0,r.jsx)(n.code,{children:"new synth myCustomSynth"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Don't give your synth a filename with spaces! Instead I recommend using programming conventions such as ",(0,r.jsx)(n.code,{children:"camelCase"}),", ",(0,r.jsx)(n.code,{children:"PascalCase"})," or ",(0,r.jsx)(n.code,{children:"snake_case"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"io",children:"I/O"}),"\n",(0,r.jsxs)(n.p,{children:["The patch will be loaded inside a ",(0,r.jsx)(n.code,{children:"poly~"})," object. Therefore it is required to use an ",(0,r.jsx)(n.code,{children:"[in 1]"})," object to receive incoming messages and an ",(0,r.jsx)(n.code,{children:"[out~ 1]"})," object to send a signal out."]}),"\n",(0,r.jsx)(n.h3,{id:"muting",children:"Muting"}),"\n",(0,r.jsxs)(n.p,{children:["Make sure you include a ",(0,r.jsx)(n.code,{children:"[thispoly~]"})," and send it a ",(0,r.jsx)(n.code,{children:"[loadmess mute 1]"})," to make sure the patcher is muted on initialization of Mercury. This prevents high cpu load and unwanted sound when not using the synth."]}),"\n",(0,r.jsx)(n.h3,{id:"functions",children:"Functions"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"[route]"})," object to route arguments from functions to parts of the patcher that you want to be able to control with the code. For example typing ",(0,r.jsx)(n.code,{children:"new synth myCustomSynth freq(100)"})," will allow you to use ",(0,r.jsx)(n.code,{children:"[route freq]"})," and retrieve the value ",(0,r.jsx)(n.code,{children:"100"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"trigger",children:"Trigger"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"[route bang]"})," object to send a trigger to for example a ",(0,r.jsx)(n.code,{children:"[line~]"})," or ",(0,r.jsx)(n.code,{children:"[adsr~]"})," object in parts of the patcher that need to start the sound. The bang is send based on the combined results of the ",(0,r.jsx)(n.code,{children:"time()"}),", ",(0,r.jsx)(n.code,{children:"play()"}),", ",(0,r.jsx)(n.code,{children:"warp()"})," and ",(0,r.jsx)(n.code,{children:"ratchet()"})," methods."]}),"\n",(0,r.jsx)(n.h3,{id:"notecount",children:"noteCount"}),"\n",(0,r.jsxs)(n.p,{children:["Send a bang to ",(0,r.jsx)(n.code,{children:"[pv noteCount]"})," to retrieve the current count the instrument is at. This count increments based on the rhythm of the combined results of the ",(0,r.jsx)(n.code,{children:"time()"}),", ",(0,r.jsx)(n.code,{children:"play()"})," and ",(0,r.jsx)(n.code,{children:"warp()"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"arglistlookup",children:"argListLookup"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.code,{children:"[argListLookup]"})," abstraction to allow Mercury to lookup values from a ",(0,r.jsx)(n.code,{children:"list"})," created in the code. ",(0,r.jsx)(n.code,{children:"[argListLookup]"})," expects the ",(0,r.jsx)(n.code,{children:"value"})," or ",(0,r.jsx)(n.code,{children:"name"})," on the left inlet, and the ",(0,r.jsx)(n.code,{children:"[pv noteCount]"})," on the right inlet to index the correct value from the ",(0,r.jsx)(n.code,{children:"list"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["While coding in Max it could be that you can't create the ",(0,r.jsx)(n.code,{children:"[argListLookup]"}),' object because it is not recognized. To fix this you can add the Mercury folder to the searchpath, or you can save the patcher first and open it when Mercury is open. Another "hack" is to create a ',(0,r.jsx)(n.code,{children:"[join 2]"})," object, make all the connections, than replace the text for ",(0,r.jsx)(n.code,{children:"argListLookup"}),". The connections will stay even tho the object turns orange."]})}),"\n",(0,r.jsx)(n.h3,{id:"example-patcher",children:"Example Patcher"}),"\n",(0,r.jsx)(n.p,{children:"Below is copy-compressed code of an example patcher that generates a short sinewave beep with different envelope release times."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"<pre><code>\n----------begin_max5_patcher----------\n1219.3oc0Y80aihCD+4jOEygtSpcUtJr4Ogtud5d79DTspxAbRYWhMmwzlrq\n19Y+FaCsoWI.MkTo8EPdxX+ieyLdlwN+X9LuUxc7JO3yvMvrY+X9rYVQFAyZ\nFOyaKaWZAqxplWpb6VtP6sv8aZ9NsUtrVWVqg7JfAU4aDrhG+sVkJY5z6xEa\ntUwS0NvHAQW4u.hH9lWDRh4EEG.eoYRh5s3ZVv0Vb8ajtVJzqYobiLRir7L2\nWvpu9mj.ummdtnc1DireNet4wh2IQ02gbrjorbUvS4UUL0dPKAEOqNkCok0.\nSCUZTm5x14Wji5JqE1EI73FFZPnwTDRLOShMOiG1rbfIf5OYl.A+AbEekEnP\nxx1hzF1Vq4.oOuLw5kCsOI9VeMkdT1z5Pchz6K4tkwy6oIb.Qu9bySimtTVr\n+wgY3RWzb7.DL3XDL2Dn8hWcwX5jw3RlfWzGsPeUzBHvs6LfXFjPGLLbkTkw\nUoxBoxsN14+7CxAqfSWiZzN1Gurap1HbqLieHtLwlBq.5RCNM.r4EeHzEu3w\nyeHkJYoToykB6RdUzDlrnthCZU9lMbErVI2BYRA2jqnUHCP3M4P.1ZsYbQAv\nTapMqVEX1owy5LERPOoPhb62RbuVtztGb4aJIRz4dy0ZLaueOQfKSLwbMTwU\nr3TxbrFMgcuYhz8tI5D68uo7dPH07+x339BvPGs.xEY7clvfBo7a0kv8rhZd\nkKBA+YlRw1ehd8Vmebza2qSN6d8+.B5KqSbfkBt.W501HfSvoer7mjjIykeD\n988hqZboXFTSDND0aTdCiCbUQHzgJfPOZExEGoJII9by4CCvGgy0EelLs8BP\n9.Z6ii6O4+qqC200hTSECPeG1pWJtmcEGdPkq0bArVp.i54hJsxlIGJx+F+y\n14eAFPbYm6soCmQOxY0BsuBBdSYzC9PLQqvRwFSTEWj4xmYjpy2xu3RXKWem\nLCt.WfUHyyfGx02AkEr8Wb4B3AlpDUhgSTYLAbMN5jMUjCyF9FMUzyto5u2w\n1VVvsgJnLzXgr.9Gr2oZ7rDVyBCRqqznArZu.sgU4eG6V5MVSHX4g8eGbJkD\nBO2kDP7er2CQ35Dn4jhgzAxazAGB6sWxJ187raQ8P.ukowFyVgGqopgHMLAa\nwD+kaacmlU1y9CVavDYIxE8ZGBOvWRSlzzmA+hXgTRyINs4Xr4hMcSOnEqsO\nX5PkbB6s35h9Jx18YQCmNl+oGGtzZXCCO49lb2aS2LjLYsQXt5.1F9qnHAnf\nO76jQztjywFQm1dH7O2cJYRaOB+XSVa2EAcJMC13GwnUyVkNI6YuS3dCXcoz\nCiiNawqKO27KceZA+wQcH1lv033SMbsGdFMHOsyxF58+tmW62qQ9KIekrVk1\nhby8rAO+Imwqz4BV60kbyS2LkQmNMuiEmjQfiIMzAJ8zUHQ9XPl7Zj8eWHub\nDHGNA11nQfyxI.mfwXIudB.xtHjgPhNUHMHmlBfFUXX7TfT7XPxeJPhNBjhl\nBfHiLBm7dAxeD.kLELZL9nWCjKcOqr7dtppQaKFXUsu5tM7jE1g4B2P64G8T\n76ya021XgGSgkyzXsrZk86xaWr6jT1qeWIpyax7hrCgzVwTvvt6Ja9+4rEVm\n+y4+Gd.sopC\n-----------end_max5_patcher-----------\n</code></pre>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-synth-for-mercuryplayground",children:"Create a Synth for MercuryPlayground"}),"\n",(0,r.jsxs)(n.p,{children:["The Mercury Playground uses the ",(0,r.jsx)(n.a,{href:"https://tonejs.github.io/",children:(0,r.jsx)(n.strong,{children:"ToneJS"})})," framework for creating the Transport, Sequencer, Synths, Sampler and almost everything WebAudio related. It also uses ",(0,r.jsx)(n.a,{href:"https://webmidijs.org/",children:(0,r.jsx)(n.strong,{children:"WebMidiJS"})})," for the MIDI related instruments and ",(0,r.jsx)(n.a,{href:"https://socket.io/",children:(0,r.jsx)(n.strong,{children:"SocketIO"})})," for the OSC related functionalities. Extending the engine with your own synths requires knowledge/experience with JavaScript programming."]}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["First clone the project from ",(0,r.jsx)(n.code,{children:"https://github.com/tmhglnd/mercury-playground"})," so you can run it locally. Follow the steps in the ",(0,r.jsx)(n.a,{href:"/mercury-docs/docs/getting-started#%F0%9F%8C%91-without-internet",children:"Getting Started"})]}),"\n",(0,r.jsx)(n.h3,{id:"create-an-instrument-class",children:"Create an Instrument Class"}),"\n",(0,r.jsxs)(n.p,{children:["You can create a new ",(0,r.jsx)(n.code,{children:"Class"})," for your instrument. Depending on what you want the instrument to do (Sound, MIDI, Sample, OSC, Polyphonic) you can ",(0,r.jsx)(n.code,{children:"extend"})," your class from the ",(0,r.jsx)(n.code,{children:"Sequencer"}),", the ",(0,r.jsx)(n.code,{children:"Instrument"})," or the ",(0,r.jsx)(n.code,{children:"PolyInstrument"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class MyCustomInstrument extends Sequencer {\n\t...\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class MyCustomSynth extends Instrument {\n\t...\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"class MyCustomPoly extends PolyInstrument {\n\t...\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You can use the other instrument class files (such as MonoSynth.js) as an example or starting point for making your own"})}),"\n",(0,r.jsx)(n.h3,{id:"add-to-the-language",children:"Add to the language"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"worker.js"})," file you can add your instrument to the language so the parser knows what ",(0,r.jsx)(n.code,{children:"Class"})," to use when you type:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"new mySynth <name> function()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add the instrument to the ",(0,r.jsx)(n.code,{children:"objectMap"})," like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const objectMap = {\n\t...,\n\t'mySynth' : (obj) => {\n\t\tlet type = obj.type;\n\t\tlet args = obj.functions;\t\t\t\n\t\tlet inst = new MyCustomSynth(engine, type, canvas);\n\n\t\tobjectMap.applyFunctions(args, inst, type);\n\t\treturn inst;\n\t},\n\t...\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);