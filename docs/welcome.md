---
title: 👋 Welcome
sidebar_position: 0
---

# 🌕 Mercury Live Coding Environment 

**A minimal and human-readable language for the live coding of algorithmic electronic audiovisual performances.**

Mercury currently has 2 versions:

* Original version running in Max8 (Windows/Mac only) (you're in the right place)
* Web version running in the browser (Windows/Mac/Linux) [go to this repo](https://github.com/tmhglnd/mercury-playground)

**🚀 Start coding with the latest full version:** 

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/tmhglnd/mercury)](https://github.com/tmhglnd/mercury/releases)

[**👾 Or sketch in the browser playground!** (recommended for beginners)](https://mercury.timohoogland.com/)

[**🙏 Support Mercury by becoming a Patron**](https://www.patreon.com/bePatron?u=9649817) 

[**💬 Join the Discord Community!**](https://discord.gg/vt59NYU)

<!-- ![Livecoding Performance with Mercury (photo: Zuzanna Zgierska)](media/mercury-live.png) -->

## 📋 Table of Contents

<!-- - [Newest Features](#-newest-features) -->
- 📟 [Mercury?](#-about)
- 🎮 [What can I do with Mercury?](#-features-overview)
- 🔭 [Who is it for?](#-vision--goals)
<!-- - 👩‍💻 [Code together with others!](#-collaborative-coding) -->
- 🚀 [Let's get started!](#-install)
	<!-- - [Quick Start](/docs/quick-start.md) -->
	<!-- - [Tutorial](/docs/tutorial.md) -->
	<!-- - [External Editor](#%EF%B8%8F-external-editor) -->
	<!-- - [Documentation](/docs/table-of-content.md) -->
	<!-- - [Troubleshooting](/docs/08-troubleshooting.md) -->
	<!-- - [System Requirements](#-system-requirements) -->
	<!-- - [Sounds in Mercury](https://github.com/tmhglnd/mercury/blob/master/mercury_ide/media/README.md) -->
	<!-- - [Build Application](#-build-application) -->
- 🔎 [Read more](#-further-reading-and-listening)
- 👾 [Hear what others made](#-made-with-mercury)
- 🤓 [I like to help](#-contribute)
- 🔋 [Powered By](#-powered-by)
- 🙏 [Thanks](#-thanks)
- ✨ [Inspiration](#-inspiration)
- 📄 [Licenses](#-licenses)

<!-- ##  Newest Features

**Control external midi devices or send midi to other Applications with the new `midi` instrument**

```java
set midi getPorts
//=> prints the available devices to the console

new midi "Your Awesome Midi Device" time(1/4) note(7 1) length(100) gain(0.8)
```

**Input OSC addresses as arguments or output osc-messages in a similar way as using instruments**

```java
set osc default

new synth sine name(sn)
    set sn note(/sine/pitch 0) shape(5 /sine/release)
    set sn fx(reverb 1 /sine/verb)

new emitter osc name(myOSC) someParam(3.14)
    // result => /myOsc/someParam 3.14
``` -->

<!-- ![Screenshot of the Mercury environment](media/mercury-screenshot2.png) -->

**AND MANY MORE (TO COME...)**

⭐️ *watch and star this repo to keep up-to-date with the latest changes whenever they're made*

## 👩‍💻👨‍💻 Collaborative Coding

You can code together in Mercury using the amazing [**Flok**](https://flok.cc/) live coding environment in the browser. The easiest way to get started is by combining **Flok** with the **Mercury Playground**, but you can also combine Flok with the Mercury Max8 version.

<!-- - [Start coding together here](./docs/collaborate.md) -->

<!-- 
There are 3 options for how you can use Flok with Mercury:
1. Use Flok to combine Mercury with Hydra visuals (or other languages like Tidal, Foxdot and SuperCollider) on a localhost
2. Collaborate together in the same room (only requires 1 computer to run Mercury)
3. Collaborate remotely over a network (all computers need to run Mercury)

Install NodeJS v.12 [for Mac](https://nodejs.org/dist/latest-v12.x/node-v12.20.0.pkg) or [for Windows](https://nodejs.org/dist/latest-v12.x/node-v12.20.0-x64.msi).

Install the latest version of Mercury via the [quick start quide](https://github.com/tmhglnd/mercury/blob/master/docs/quick-start.md).

Install Flok via the Terminal with `npm install -g flok-web flok-repl`

**Localhost**

1. Run `flok-web` in the terminal
2. Open Google Chrome and go to `localhost:3000`
3. Setup Flok with target `mercury` (and optionally other targets like `hydra`) and click **Create session**.
4. Copy the `flok-repl -H xxx -s xxx -t mercury` command and run in the terminal.
5. **Join** the Flok with your nickname.

**Collaborate**

Now follow these steps for a succesful setup.
1. Open Google Chrome and go to [https://flok.clic.cf/](https://flok.clic.cf/)
1. Setup Flok with target `mercury` and click **Create session**.
2. Copy the `flok-repl -H xxx -s xxx -t mercury` command and run in the terminal.
4. **Join** the Flok with your nickname.

Now start typing some code! 🎵

- `Ctrl/Alt + Return` to evaluate
- `Ctrl/Alt + .` to silence

Flok will send the entire code via OSC messaging to port 4880. Mercury should be listening to this port automatically. Bug reports are very much welcome in the issues! -->

## 💻 Install

<!-- - 📖 [I need some help installing](./docs/tutorial.md) -->
<!-- - 🚀 [I'm an experienced computer user](./docs/quick-start.md) -->
<!-- - 💻 [Is my computer powerful enough?](#-system-requirements) -->

OR

- 🤓 I'll just [download](https://github.com/tmhglnd/mercury/releases) and figure it out myself

```
$ cd ~/Documents/Max\ 8/Projects
$ git clone http://github.com/tmhglnd/mercury
$ cd mercury
$ open mercury_ide/mercury_ide.maxproj
```

<!-- ### 🚀 Quick Start -->

<!-- [Open the Quick Start Guide](./docs/quick-start.md) -->

<!-- ### 📖 Tutorial -->

<!-- 🚧 (work in progress) 🚧 -->

<!-- If this is your first time with either the usage of creative coding software (like Max8), music theory, electronic music making and programming in general I highly recommend following the tutorial. -->

<!-- [Open the Tutorial](./docs/tutorial.md) -->

### ⚠ Troubleshooting

It could be that you are having issues with Mercury. Please follow the steps below:

<!-- - [Open the Troubleshooting](./docs/08-troubleshooting.md) -->

<!-- ### 📖 Documentation

Full explanation of all the possibilities in Mercury: -->

<!-- - [Open the documentation](./docs/table-of-content.md) -->

<!-- ### 🛠 Build Application

`Optional`

**Why?** - Building the Application is recommended when using Mercury with other MaxMSP projects. This will allow Mercury to have a seperate thread from the other Max processes, giving it enough RAM and CPU space. Also the application will probably run more stable because the project can not be editted anymore. This, of course, also dependents on your system specifications.

**How?** - The Cycling'74 Max8 coding environment is needed to build the application from the `mercury_ide_x.x.x.maxproj` file. Open the `.maxproj` file and select `Build Collective/Application` from the `Settings` menu on the bottom of the project window. *Building the Application is not necessary in order to run the environment!* -->

### 🎵 Sounds

Most sounds in Mercury are downloaded from [freesound.org](http://www.freesound.org) and are licensed with Creative Commons Attribution or Creative Commons 0 licenses. If not downloaded from freesound it is made sure that the license allows to redistribute the sounds via the Mercury environment and that you can use them in your projects. A list of all the available sounds and the original sample can be found here:

<!-- - [List of sounds and credits](././mercury_ide/media/README.md) -->

## 🔍 Further reading

- [Mercury homepage](http://www.timohoogland.com/mercury-livecoding)
- [Paper in ICLC 2019](http://iclc.livecodenetwork.org/2019/papers/paper67.pdf)
- [Total Serialism Library](https://github.com/tmhglnd/total-serialism#total-serialism)

## 🔋 Powered By

- Mercury has been granted funding from [**Creative Industries Fund NL**](https://stimuleringsfonds.nl/en/)
- Mercury has been granted in-kind funding from [**Creative Coding Utrecht**](https://creativecodingutrecht.nl/)

## 🙏 Thanks

- Roald van Dillewijn for working together on osc and midi functionalities combined with his [Digilog modified guitar-pedals](https://roaldvandillewijn.nl/projects/digilog)
- Guillem Gongora Moral for using Mercury as a composition tool and sharing valuable feedback in the process
- Anne Veinberg for working with Mercury and a Mercury extensions for the [CodeKlavier](https://codeklavier.space/) project
- Rafaele Maria Andrade for collaboration on [networked performance](https://www.youtube.com/watch?v=7UWywv_DPHI&t=4s) between Mercury and Knurl
- Repo banner image by Annebel Bunt
- Live performance image by Zuzanna Zgierska

## ✨ Inspiration

During the development of Mercury (both the playground and the full version) I've found inspiration in many other live coding environments, practices and other platforms. Some of these are:

- [Hydra](https://hydra.ojack.xyz/) - Live coding visual synthesizer by Olivia Jack
- [Sema](https://sema.codes/about) - Live coding language design platform combined with Machine Learning
- [MIMIC Project](https://mimicproject.com/about) - a web platform for the artistic exploration of musical machine learning and machine listening.
- [Tidal](https://tidalcycles.org/index.php/Welcome) - Live coding of patterns
- [Sonic Pi](https://sonic-pi.net/) - The live coding synth for everyone
- [Tone.js](https://tonejs.github.io/) - Webaudio framework for programming synths and sequencers
- [Nearley](https://nearley.js.org/) - Parsing toolkit

## 📄 Licenses

- Main Source - [The GNU GPL v.3 License](https://choosealicense.com/licenses/gpl-3.0/) (c) Timo Hoogland 2019-2023
<!-- - Sound Files - Individually licensed, listed under [media/README.md](/mercury_ide_0.9.9/media/README.md) -->
- Documentation - [The CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/) (c) Timo Hoogland 2019-2023
- Examples - [The CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/) (c) Timo Hoogland 2019-2023
- Max8 - Proprietary Software, Max (c) 1990-2019 Cycling'74 / IRCAM All rights reserved

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
