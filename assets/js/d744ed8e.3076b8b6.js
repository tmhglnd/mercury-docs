"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[522],{2176:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),i=n(8453);const o={sidebar_position:5,id:"troubleshooting"},t="\ud83d\udea7 Troubleshooting",c={id:"usage/troubleshooting",title:"\ud83d\udea7 Troubleshooting",description:"If you are having issues please follow the steps below:",source:"@site/docs/usage/troubleshooting.md",sourceDirName:"usage",slug:"/usage/troubleshooting",permalink:"/mercury-docs/docs/usage/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"\u2328\ufe0f External Editors",permalink:"/mercury-docs/docs/usage/editors"},next:{title:"\ud83d\udce6 Add Mercury in your Site",permalink:"/mercury-docs/docs/usage/embedding"}},l={},d=[{value:"My sounds are not playing",id:"my-sounds-are-not-playing",level:2},{value:"I hear an Alert sound when I execute the code on Mac",id:"i-hear-an-alert-sound-when-i-execute-the-code-on-mac",level:2},{value:"My CPU usage is very high",id:"my-cpu-usage-is-very-high",level:2},{value:"My editor in Mercury4Max is very laggy (low FPS)",id:"my-editor-in-mercury4max-is-very-laggy-low-fps",level:2},{value:"Mercury4Max keeps crashing when I execute code",id:"mercury4max-keeps-crashing-when-i-execute-code",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"-troubleshooting",children:"\ud83d\udea7 Troubleshooting"}),"\n",(0,r.jsx)(s.p,{children:"If you are having issues please follow the steps below:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Check if your issue is part of this troubleshooting page"}),"\n",(0,r.jsxs)(s.li,{children:["Check if your problem was already reported in the ",(0,r.jsx)(s.a,{href:"https://github.com/tmhglnd/mercury/issues",children:"issues"})]}),"\n",(0,r.jsxs)(s.li,{children:["Ask help from the community on the ",(0,r.jsx)(s.a,{href:"https://discord.gg/vt59NYU",children:"Mercury Discord"})]}),"\n",(0,r.jsxs)(s.li,{children:["In case you don't find an answer, please file a ",(0,r.jsx)(s.a,{href:"https://github.com/tmhglnd/mercury/issues/new",children:"new issue"})]}),"\n",(0,r.jsx)(s.li,{children:"Or fix the bug yourself and send me a pull request \ud83d\ude4f (much appreciated!)"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"my-sounds-are-not-playing",children:"My sounds are not playing"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"in Mercury4Max"})}),"\n",(0,r.jsxs)(s.p,{children:["First make sure you have selected the correct output for your sound in the Audio Settings. Then make sure you have clicked Audio to ",(0,r.jsx)(s.code,{children:"on"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["When the soundfiles don't load correctly the first time you start Mercury you will not hear any sounds playing (for both the ",(0,r.jsx)(s.code,{children:"sample"})," and ",(0,r.jsx)(s.code,{children:"synth"}),")."]}),"\n",(0,r.jsxs)(s.p,{children:["You can add the soundfiles manually by going to ",(0,r.jsx)(s.code,{children:"Sounds > Replace Sounds"}),", then select the folder ",(0,r.jsx)(s.code,{children:"/mercury_v.0.13.0-alpha/mercury_ide/media/samples"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Do the same for the waveforms: ",(0,r.jsx)(s.code,{children:"Sounds > Replace Waveforms"}),", then select the folder ",(0,r.jsx)(s.code,{children:"/mercury_v.0.13.0-alpha/mercury_ide/media/waveforms"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"in MercuryPlayground"})}),"\n",(0,r.jsx)(s.p,{children:"First make sure you have selected the correct output for your browser to send the sound to. Usually this is the same as your system output."}),"\n",(0,r.jsxs)(s.p,{children:["When the ",(0,r.jsx)(s.code,{children:"loading sounds..."})," message doesn't seem to stop you can try refreshing the page, sometimes it can get stuck."]}),"\n",(0,r.jsx)(s.p,{children:"Check your internet connection speed, loading the sounds can take a bit of time."}),"\n",(0,r.jsxs)(s.p,{children:["If the website doesn't seem to work for you you can try installing it locally. For that see the ",(0,r.jsx)(s.a,{href:"./../getting-started",children:"Getting Started Guide"})]}),"\n",(0,r.jsx)(s.h2,{id:"i-hear-an-alert-sound-when-i-execute-the-code-on-mac",children:"I hear an Alert sound when I execute the code on Mac"}),"\n",(0,r.jsxs)(s.p,{children:['Most Mac users will hear an Alert sound when they hit keycommands that the operating system does not recognize. You can disable the "Alert Volume" in ',(0,r.jsx)(s.code,{children:"System Preferences > Sounds > Sound Effects"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"my-cpu-usage-is-very-high",children:"My CPU usage is very high"}),"\n",(0,r.jsx)(s.p,{children:"In case you are experiencing a very high cpu usage (resulting in clicks, pops, glitches, crackling, stutter or anything that doesn't sound like it is supposed to) please try:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"in Mercury4Max"})}),"\n",(0,r.jsxs)(s.p,{children:["Go to the settings in ",(0,r.jsx)(s.code,{children:"Settings > Audio"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Total instruments: ",(0,r.jsx)(s.code,{children:"4"})]}),"\n",(0,r.jsxs)(s.li,{children:["Driver: ",(0,r.jsx)(s.code,{children:"Core Audio"})," or ",(0,r.jsx)(s.code,{children:"Asio4All"})]}),"\n",(0,r.jsxs)(s.li,{children:["Samplerate: ",(0,r.jsx)(s.code,{children:"44100"})]}),"\n",(0,r.jsxs)(s.li,{children:["I/O Buffersize: ",(0,r.jsx)(s.code,{children:"1024"})]}),"\n",(0,r.jsxs)(s.li,{children:["Signal Buffersize: ",(0,r.jsx)(s.code,{children:"512"})]}),"\n",(0,r.jsxs)(s.li,{children:["Overdrive: ",(0,r.jsx)(s.code,{children:"on"})]}),"\n",(0,r.jsxs)(s.li,{children:["Audio Interrupt: ",(0,r.jsx)(s.code,{children:"on"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For a detailed explanation of all the Audio Settings please go ",(0,r.jsx)(s.a,{href:"/mercury-docs/docs/usage/mercury4max-overview#audio-setup",children:"here"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"in MercuryPlayground"})}),"\n",(0,r.jsx)(s.p,{children:"The browser version sadly doesn't have much settings that can be adjusted. The best to do is try using less resources in the code."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"reverb"})," is an effect that requires quite some processing. Applying reverbs to all instruments can increase the processing and memory usage. Try removing all reverbs to see if that makes a difference. Using less instruments is another good place to start."]}),"\n",(0,r.jsx)(s.h2,{id:"my-editor-in-mercury4max-is-very-laggy-low-fps",children:"My editor in Mercury4Max is very laggy (low FPS)"}),"\n",(0,r.jsx)(s.p,{children:"In case you are experiencing a very laggy editor, slow cursor, low FPS and slow response you can try the following settings:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Aspect Ratio: ",(0,r.jsx)(s.code,{children:"16:10"})]}),"\n",(0,r.jsxs)(s.li,{children:["Resolution: ",(0,r.jsx)(s.code,{children:"540"})]}),"\n",(0,r.jsxs)(s.li,{children:["Visual Resolution: ",(0,r.jsx)(s.code,{children:"270"})]}),"\n",(0,r.jsxs)(s.li,{children:["Window Size: ",(0,r.jsx)(s.code,{children:"540"})]}),"\n",(0,r.jsxs)(s.li,{children:["Sync to Refreshrate: ",(0,r.jsx)(s.code,{children:"off"})]}),"\n",(0,r.jsxs)(s.li,{children:["FPS: ",(0,r.jsx)(s.code,{children:"30"})]}),"\n",(0,r.jsxs)(s.li,{children:["Auto Hide Cursor: ",(0,r.jsx)(s.code,{children:"off"})]}),"\n",(0,r.jsxs)(s.li,{children:["Syphon Output: ",(0,r.jsx)(s.code,{children:"off"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"For Mac users with Retina display and Max version 8.1.0 or higher and MacOS 10.13 or older."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Go to ",(0,r.jsx)(s.code,{children:"Applications"})," in the Finder"]}),"\n",(0,r.jsxs)(s.li,{children:["Right click ",(0,r.jsx)(s.code,{children:"Max.app"})," (",(0,r.jsx)(s.code,{children:"CMD + Click"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.code,{children:"Get Info"})]}),"\n",(0,r.jsxs)(s.li,{children:["Select ",(0,r.jsx)(s.code,{children:"Open in Low Resolution"})]}),"\n",(0,r.jsx)(s.li,{children:"Restart Max and the Mercury project"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["For a detailed explanation of all the Visual Settings please go ",(0,r.jsx)(s.a,{href:"/mercury-docs/docs/usage/mercury4max-overview#visual-setup",children:"here"})]}),"\n",(0,r.jsxs)(s.p,{children:["You can also consider using an ",(0,r.jsx)(s.a,{href:"./../usage/editors",children:"External Editor"})," instead."]}),"\n",(0,r.jsx)(s.h2,{id:"mercury4max-keeps-crashing-when-i-execute-code",children:"Mercury4Max keeps crashing when I execute code"}),"\n",(0,r.jsx)(s.p,{children:"This can indicate that the computer is not able to display the editor or visual extensions correctly. If you are using Mercury just for the sound/sequencing, please try:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Install an ",(0,r.jsx)(s.a,{href:"./../usage/editors",children:"External Editor"})," to work with Mercury4Max"]}),"\n",(0,r.jsxs)(s.li,{children:["Use the ",(0,r.jsx)(s.a,{href:"/mercury-docs/docs/getting-started#-mercuryplayground",children:"MercuryPlayground"})," instead of Max8"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(6540);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);