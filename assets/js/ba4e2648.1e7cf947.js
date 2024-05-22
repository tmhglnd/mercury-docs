"use strict";(self.webpackChunkmercury_docs=self.webpackChunkmercury_docs||[]).push([[613],{3985:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var i=s(4848),r=s(8453);const l={sidebar_position:0},c="Syntax Overview",t={id:"reference/syntax",title:"Syntax Overview",description:"Mercury is a minimal and human-readable language for the live coding of algorithmic electronic music. All elements of the language are designed around making code more accessible and less obfuscating for both the programmer-performer and the audience alike. This motivation stretches down to the coding-style itself which uses clear descriptive names for functions and a simple clear syntax. Mercury provides the performer with an extensive library of algorithms to generate or transform sequences that can modulate musical parameters, such as (but not limited to) melody and rhythm, over time. The environment focuses on creating sound in the first place, but is not limited to that and can for example also output MIDI, OSC to control other processes such as visuals.",source:"@site/docs/reference/syntax.md",sourceDirName:"reference",slug:"/reference/syntax",permalink:"/mercury-docs/docs/reference/syntax",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6 Reference",permalink:"/mercury-docs/docs/category/-reference"},next:{title:"Actions",permalink:"/mercury-docs/docs/reference/actions"}},o={},d=[{value:"Evaluation",id:"evaluation",level:2},{value:"Syntax Structure",id:"syntax-structure",level:2},{value:"Syntax Vocabulary",id:"syntax-vocabulary",level:2},{value:"Param Glossary",id:"param-glossary",level:2},{value:"Value Types",id:"value-types",level:3},{value:"List Types",id:"list-types",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"syntax-overview",children:"Syntax Overview"}),"\n",(0,i.jsx)(n.p,{children:"Mercury is a minimal and human-readable language for the live coding of algorithmic electronic music. All elements of the language are designed around making code more accessible and less obfuscating for both the programmer-performer and the audience alike. This motivation stretches down to the coding-style itself which uses clear descriptive names for functions and a simple clear syntax. Mercury provides the performer with an extensive library of algorithms to generate or transform sequences that can modulate musical parameters, such as (but not limited to) melody and rhythm, over time. The environment focuses on creating sound in the first place, but is not limited to that and can for example also output MIDI, OSC to control other processes such as visuals."}),"\n",(0,i.jsx)(n.h2,{id:"evaluation",children:"Evaluation"}),"\n",(0,i.jsxs)(n.p,{children:["Mercury code is evaluated as an ",(0,i.jsx)(n.code,{children:"entire page"}),", ",(0,i.jsx)(n.code,{children:"per line"})," and from ",(0,i.jsx)(n.code,{children:"top to bottom"}),". One of the main reasons the entire code page is evaluated is that this allows the code to always be a direct reflection of the state of the system and therefore what you hear. This helps to keep an overview what is going on in the system. The downside is that it is more difficult to prepare snippets of code in the same file without evaluating them. Code that you don't want to hear can therefore be ",(0,i.jsx)(n.code,{children:"commented"}),", or you can store it in a separate file."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax-structure",children:"Syntax Structure"}),"\n",(0,i.jsx)(n.p,{children:"The following chart gives an overview of how the syntax is structured when you type code in Mercury. There are of course many combinations of instruments, lists, methods and functions possible. Please refer to the specific functions in the reference and the tutorials for more concrete examples."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"new   <instrument-type>   <name>  function(value1 value2 ... value-n)\n                                  function1() function2() ... function-n()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"list  <list-name>         [ value1 value2 ... value-n ]\n                          [ list1 list2 ... list-n ]\n                          function(value1 value2 ... value-n)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"set   <global-name>       value\n      <instrument-name>   function(...)\n                          function1() function2() ... function-n()\n      all                 function(...)\n                          function1() function2() ... function-n()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"print <list-name>\n      function(...)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"syntax-vocabulary",children:"Syntax Vocabulary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"linebreak"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Linebreaks ",(0,i.jsx)(n.code,{children:"enters"})," are used to separate lines of code"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"space"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Spaces ",(0,i.jsx)(n.code,{children:" "})," are used to separate keywords, functions, arguments, list-items and more"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"parenthesis"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parenthesis ",(0,i.jsx)(n.code,{children:"( )"})," are used to denote the opening and closing of a ",(0,i.jsx)(n.code,{children:"function"})," call"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"brackets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Brackets ",(0,i.jsx)(n.code,{children:"[ ]"})," are used to denote the opening and closing of a ",(0,i.jsx)(n.code,{children:"list"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"comment"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A comment ",(0,i.jsx)(n.code,{children:"//"})," is created by starting with 2 forward slashes"]}),"\n",(0,i.jsx)(n.li,{children:"Comments can be started at a later point in a line"}),"\n",(0,i.jsx)(n.li,{children:"Multiple lines have to be commented separately"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A word used as an action to start a line of code with"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"new"}),", ",(0,i.jsx)(n.code,{children:"set"}),", ",(0,i.jsx)(n.code,{children:"list"}),", ",(0,i.jsx)(n.code,{children:"print"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A name is a group of 3 or more characters (",(0,i.jsx)(n.code,{children:"A-Z a-z - _ 0-9"}),"), but may not start with any number"]}),"\n",(0,i.jsx)(n.li,{children:"Names can be used for for example instrument instances, lists and sample-files"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"kick_909"}),", ",(0,i.jsx)(n.code,{children:"polySynth"}),", ",(0,i.jsx)(n.code,{children:"melody"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A string is a collection of any character including spaces between ",(0,i.jsx)(n.code,{children:'" "'})," or ",(0,i.jsx)(n.code,{children:"' '"})]}),"\n",(0,i.jsxs)(n.li,{children:["Strings are also used for OSC messages in the form of ",(0,i.jsx)(n.code,{children:"/address/tag"})]}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:'"hello, world!"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"number"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A number is any whole number or decimal number, 64-bit, positive or negative."}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"0"}),", ",(0,i.jsx)(n.code,{children:"21"}),", ",(0,i.jsx)(n.code,{children:"-144"}),", ",(0,i.jsx)(n.code,{children:"3.1415"}),", ",(0,i.jsx)(n.code,{children:"-6.18"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fraction"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A fraction is a combination of a whole number, a forward slash, and a whole number ",(0,i.jsx)(n.code,{children:"0-9/0-9"})]}),"\n",(0,i.jsx)(n.li,{children:"Fractions are used to denote time intervals in a more precise manner"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"1/4"}),", ",(0,i.jsx)(n.code,{children:"3/16"}),", ",(0,i.jsx)(n.code,{children:"3/1"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"notename"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A notename is a combination of a letter ",(0,i.jsx)(n.code,{children:"a-g"})," followed by an octave number ",(0,i.jsx)(n.code,{children:"0-7"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The notename can have a modifier for flat (",(0,i.jsx)(n.code,{children:"b"}),") or sharp (",(0,i.jsx)(n.code,{children:"#"}),") notes between the letter and octave"]}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"g4"}),", ",(0,i.jsx)(n.code,{children:"eb3"}),", ",(0,i.jsx)(n.code,{children:"f#2"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"function"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A function is a ",(0,i.jsx)(n.code,{children:"name"})," followed by an opening parenthesis ",(0,i.jsx)(n.code,{children:"("}),", zero, one or more arguments and a closing parenthesis ",(0,i.jsx)(n.code,{children:")"})]}),"\n",(0,i.jsx)(n.li,{children:"A function executes some process to generate an output or control a behaviour based on arguments"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"random(4)"}),", ",(0,i.jsx)(n.code,{children:"spread(10 300 1000)"}),", ",(0,i.jsx)(n.code,{children:"time(1/4)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list-function"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A list-function returns a list that can be stored in a named ",(0,i.jsx)(n.code,{children:"list"})]}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"new list coin(8)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"instrument-function"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["An instrument-function is like a ",(0,i.jsx)(n.code,{children:"function"})," but is part of an instance created with ",(0,i.jsx)(n.code,{children:"new"})," (in most cases an instrument)"]}),"\n",(0,i.jsx)(n.li,{children:"Instrument-functions are specific to that instance only and can not be used outside that scope"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"new sample kick_min speed(0.8) gain(1.1) fx(reverb)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A list is a collection of values (eg. ",(0,i.jsx)(n.code,{children:"number"}),"'s, ",(0,i.jsx)(n.code,{children:"name"}),"'s, ",(0,i.jsx)(n.code,{children:"string"}),"'s or ",(0,i.jsx)(n.code,{children:"list"}),"'s) seperated by spaces ",(0,i.jsx)(n.code,{children:" "})]}),"\n",(0,i.jsxs)(n.li,{children:["A list always has a ",(0,i.jsx)(n.code,{children:"name"})]}),"\n",(0,i.jsxs)(n.li,{children:["A list is created with an opening bracket ",(0,i.jsx)(n.code,{children:"["}),", followed by some values, and closed with a closing bracket ",(0,i.jsx)(n.code,{children:"]"})]}),"\n",(0,i.jsxs)(n.li,{children:["A list can also be created with a list-",(0,i.jsx)(n.code,{children:"function"})," instead of using brackets"]}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"list notes [0 3 12 5]"}),", ",(0,i.jsx)(n.code,{children:"list rhythm euclid(8 5)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"new"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Creates a ",(0,i.jsx)(n.code,{children:"new"})," instance of for example an instrument such as ",(0,i.jsx)(n.code,{children:"sample"})," or ",(0,i.jsx)(n.code,{children:"synth"})]}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"new sample harp_down"}),", ",(0,i.jsx)(n.code,{children:"new synth saw"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"set"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Set the value for a global setting or append instrument-functions to a named instrument"}),"\n",(0,i.jsxs)(n.li,{children:["Example: ",(0,i.jsx)(n.code,{children:"set tempo 100"}),", ",(0,i.jsx)(n.code,{children:"set mySynth gain(0.4)"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"print"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Print allows you to show the content of a ",(0,i.jsx)(n.code,{children:"list"})," or result of a ",(0,i.jsx)(n.code,{children:"list-function"})," in the console window"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"param-glossary",children:"Param Glossary"}),"\n",(0,i.jsx)(n.p,{children:"When describing input arguments for functions it is useful to know if the values can be a number (positive and/or negative), a decimal number (float), a name or string or a boolean value (0/1). Below is an overview what words are used for these various scenarios."}),"\n",(0,i.jsx)(n.h3,{id:"value-types",children:"Value Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"})," -> Any Number or Name","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"number"})," -> Int+, Int or Float","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bool"})," -> 0 or 1 (sometimes ",(0,i.jsx)(n.code,{children:"on"})," or ",(0,i.jsx)(n.code,{children:"off"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int+"})," -> a positive whole number (integer), bigger than 0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int"})," -> a whole number, negative or positive, including 0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float+"})," -> a positive decimal number (floating-point), bigger than 0"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float"})," -> a decimal number, positive or negative, including 0"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," -> A combination of letter-characters, may include capital letter, underscores and digits"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"string"})," -> A combination of letters between ",(0,i.jsx)(n.code,{children:'" "'})," or ",(0,i.jsx)(n.code,{children:"' '"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"list-types",children:"List Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"})," -> A list with ",(0,i.jsx)(n.code,{children:"value"}),"'s","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"number-list"})," -> A list with ",(0,i.jsx)(n.code,{children:"number"}),"'s","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int-list+"})," -> A list with ",(0,i.jsx)(n.code,{children:"int+"}),"'s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int-list"})," -> A list with ",(0,i.jsx)(n.code,{children:"int"}),"'s"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"floatList"})," -> A list with ",(0,i.jsx)(n.code,{children:"float"}),"'s"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name-list"})," -> A list with ",(0,i.jsx)(n.code,{children:"name"}),"'s"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);