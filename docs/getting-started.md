---
sidebar_position: 1
---

# 🚀 Getting Started

`Hello, World!` Welcome to the Getting Started guide for Mercury. This page will get you up and running in no time! But, before we get started it is good to know that Mercury has 2 versions:

- **MercuryPlayground**, running in the [browser](https://mercury-playground.cc/) (Windows/Mac/Linux)
- **Mercury4Max**, running in [Cycling'74's Max9](https://cycling74.com/downloads) (Windows/Mac/Experimental Linux via Wine)

:::info for everyone
I recommend to use the MercuryPlayground (in the browser) first. Please read further in chapter [MercuryPlayground](#-mercuryplayground).
:::

If you have experience with MaxMSP you can also use Mercury4Max. Please read the chapter [Mercury4Max](#-mercury4max) for further instructions.

<!-- If you are curious what the pros and cons are between these two versions please read [Browser or Max?](browser-max). -->

## 🌎 MercuryPlayground

The MercuryPlayground runs directly in the browser using WebAudio and WebMIDI technologies based on the JavaScript WebAudioAPI and the ToneJS framework. This makes it very accessible for everyone, no matter if you're a beginner or an expert.

1. Install a Chromium based browser on your computer (for example Chrome, Brave, Arc, Opera)

2. You can start coding immediately: [https://mercury-playground.cc/](https://mercury-playground.cc/)

3. Wait till the sounds are loaded (depending on your internet speed this could take some time)

4. You are now ready to start coding your first sounds or follow the tutorials! 🎶💻🎶

<!-- If you experience any issues with installing or running the code, please have a look in the Tutorial or Troubleshooting sections. This Quick Start guide is meant for people who are confident in working with the computer and have some experience with (creative) coding, music technology and music making. -->

### 🌑 Without internet

If you want to run the MercuryPlayground locally (for using without internet, or using the OSC-messages functionality, or when developing extra features) you can use the steps below. This requires some Terminal (Mac/Linux) or Command Prompt (Win) knowledge. If you've never used the Terminal or Command Prompt before I recommend you search for some basic tutorial on Google/Youtube first.

1. Make sure you have [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en) installed for your Operating System.

2. In the Terminal (Mac/Linux) or Command Prompt (Win) navigate to the folder where you want to install Mercury (do this with `cd`).

	- Then run: `git clone http://github.com/tmhglnd/mercury-playground`

3. Navigate to the cloned folder with: `cd mercury-playground`

4. Install all the dependencies: `npm install`

5. Build your local version: `npm run build` (or `npm run watch` while developing)

	- You can add your own samples to `/public/assets/samples`

	- When you added samples make sure you `npm run build` again

6. Now start the local server: `npm start`, open a browser and go to [`http://localhost:8080`](http://localhost:8080). 

	Once connected the Terminal will print something like:

	```
	Connected yH0SGEdRHbZD1IACAAAB
	Receive messages from Mercury on port 2440
	Send messages to Mercury on port 4880
	```

	Mercury can now receive OSC-messages on port `4880` *(the portnumber is chosen to not interfere with many other default portnumbers. The number is the diameter in kilometers of the planet Mercury)*

7. You are now ready to start coding your first sounds or follow the tutorials! 🎶💻🎶

## 💻 Mercury4Max

Mercury also runs in Max8/9 (a.k.a. MaxMSP), a node-based creative coding environment from Cycling'74 for MacOS or Windows. Linux users can try the [Experimental Linux Guide](./usage/mercury4max-linux.md), but I recommend using the Mercury Playground first.

:::warning You do not need to buy a license in order to use Mercury in Max
:::

### 🛠 System Requirements

Check the [system requirements](https://cycling74.com/downloads) on the download page from Cycling'74. The requirements are recommended for running Max and Mercury on your computer properly. A dedicated Graphics Card (GPU) is also recommended, for running visuals of Mercury and the text-editor smoothly. If you don't have a good GPU you can also use the external text-editor package for Pulsar. Instructions for using that are in [External Editors](./usage/editors.md).

### ⚙️ Install Mercury

1. Download and install Max for your Operating System at https://cycling74.com/downloads

2. Launch Max. It will create a `Max 9` folder in your `~/Documents`. Create an empty folder named `Projects` inside `~/Documents/Max 9/`. The full path should look like this: `<User>/Documents/Max 9/Projects` (on Mac).

3. Download the [latest version of Mercury here](https://github.com/tmhglnd/mercury/archive/refs/heads/master.zip). Unzip the entire folder in `~/Documents/Max 9/Projects`.

	- **Or** Git-users can clone Mercury with `git clone http://github.com/tmhglnd/mercury`.

4. Your filepath should look something like: `<User>/Documents/Max 9/Projects/mercury-v.x.x.x`

5. **Optional**: install the [Pulsar editor and the mercury-pulsar](./usage/editors.md#️-pulsar) package.

### 🚀 Launch Mercury4Max

Launch Mercury by double clicking `mercury_ide.maxproj` located in the folder `mercury-v.x.x.x/mercury-ide`.

<!-- You can create a shortcut or alias on your desktop or Applications folder for easy access. -->

- ⏳ Give it some time to load.
	- **Mac Users**: You may need to give some permissions under Security & Privacy Preferences. Please be on the lookout for any messages popping up.

Once it's ready you will see two windows:

- The `_mercury_main` window 
- The  `mercury` window (still black). 

The *main window* is used to quickly access the most important settings in Mercury, such as audio on/off. The *mercury window* is used to display the text-editor.

- 🔈 Turn the **Audio on**
- 📺 Turn the **Rendering on** (or use an [external editor like Pulsar](./usage/editors.md))

:::warning If your computer can't handle the rendering of the editor, please use Pulsar with the Mercury-pulsar package instead.

You are now ready to start coding your first sounds! 🎶💻🎶

## 🎹 Play a first sound!

After going to the website or following any of the installation steps you are now ready to make the first sound! In the code editor you can type the following code (if there is already some code there you can `backspace` it or click `empty`):

```js
set tempo 110

new sample kick_house time(1/4)
new sample hat_808 time(1/8)
```

Now click `play` (browser), `Menubar > File > Execute Code` (Max8) or hit `ctrl/alt + enter` to evaluate the code. If all goes well you should hear the sound of a kick go 4 times, while the hihat sound goes 8 times (2x as fast).

:::info help
If you experience any issues, please see the <!-- [Troubleshooting](troubleshooting) -->
:::

### What's next?

You are now ready to play all you want! For example you can listen some random examples or follow the tutorials. You can read the Usage chapter for more info on how to navigate the environment and you can read the Reference for explanation of all the functions. For Max users I also recommended following the interactive tutorials in the [MercuryPlayground](https://mercury-playground.cc/) before continuing in Max.

- [Usage](./usage/)
- [Reference](./reference/)
<!-- - [Examples](category/-examples) -->
<!-- - [Tutorials](category/-tutorials) -->
