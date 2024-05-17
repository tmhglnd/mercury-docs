---
sidebar_position: 5
---

# 🛠 Extending Mercury

In this page you can find help on how to create your own synths for Mercury4Max or the MercuryPlayground in the engine. For this you will work with Max8 or with JavaScript. It is currently not possible to code new synths with the Mercury language itself.

:::warning EXPERIMENTAL
**These features are still experimental and in the future things might change!**
:::

## Create a synth for Mercury4Max

You can extend Mercury4Max with custom synths and other sound designing patches programmed in Max8. This requires knowledge/experience with the MaxMSP programming paradigm. It also requires you to have a Max8 license so you can edit and save the patches. Follow the steps below to setup your own patch. You can also copy-paste the compressed code on the bottom of the page.

### Create the patch

Create a new patch for your custom sound design. Save the patch in `~/Documents/Mercury/Library/Sound`, if you do not have this folder you should create it. Give the patch an appropriate name, this will also be the name used in the live coding environment. For example: if you name the patch `myCustomSynth.maxpat`, then in Mercury you will type `new synth myCustomSynth`.

:::warning
Don't give your synth a filename with spaces! Instead I recommend using programming conventions such as `camelCase`, `PascalCase` or `snake_case`.
:::

### I/O 

The patch will be loaded inside a `poly~` object. Therefore it is required to use an `[in 1]` object to receive incoming messages and an `[out~ 1]` object to send a signal out.

### Muting

Make sure you include a `[thispoly~]` and send it a `[loadmess mute 1]` to make sure the patcher is muted on initialization of Mercury. This prevents high cpu load and unwanted sound when not using the synth.

### Functions

Use the `[route]` object to route arguments from functions to parts of the patcher that you want to be able to control with the code. For example typing `new synth myCustomSynth freq(100)` will allow you to use `[route freq]` and retrieve the value `100`.

### Trigger

Use the `[route bang]` object to send a trigger to for example a `[line~]` or `[adsr~]` object in parts of the patcher that need to start the sound. The bang is send based on the combined results of the `time()`, `play()`, `warp()` and `ratchet()` methods.

### noteCount

Send a bang to `[pv noteCount]` to retrieve the current count the instrument is at. This count increments based on the rhythm of the combined results of the `time()`, `play()` and `warp()`.

### argListLookup

Use the `[argListLookup]` abstraction to allow Mercury to lookup values from a `list` created in the code. `[argListLookup]` expects the `value` or `name` on the left inlet, and the `[pv noteCount]` on the right inlet to index the correct value from the `list`.

:::tip
While coding in Max it could be that you can't create the `[argListLookup]` object because it is not recognized. To fix this you can add the Mercury folder to the searchpath, or you can save the patcher first and open it when Mercury is open. Another "hack" is to create a `[join 2]` object, make all the connections, than replace the text for `argListLookup`. The connections will stay even tho the object turns orange.
:::

### Example Patcher

Below is copy-compressed code of an example patcher that generates a short sinewave beep with different envelope release times.

```
<pre><code>
----------begin_max5_patcher----------
1219.3oc0Y80aihCD+4jOEygtSpcUtJr4Ogtud5d79DTspxAbRYWhMmwzlrq
19Y+FaCsoWI.MkTo8EPdxX+ieyLdlwN+X9LuUxc7JO3yvMvrY+X9rYVQFAyZ
FOyaKaWZAqxplWpb6VtP6sv8aZ9NsUtrVWVqg7JfAU4aDrhG+sVkJY5z6xEa
tUwS0NvHAQW4u.hH9lWDRh4EEG.eoYRh5s3ZVv0Vb8ajtVJzqYobiLRir7L2
Wvpu9mj.ummdtnc1DireNet4wh2IQ02gbrjorbUvS4UUL0dPKAEOqNkCok0.
SCUZTm5x14Wji5JqE1EI73FFZPnwTDRLOShMOiG1rbfIf5OYl.A+AbEekEnP
xx1hzF1Vq4.oOuLw5kCsOI9VeMkdT1z5Pchz6K4tkwy6oIb.Qu9bySimtTVr
+wgY3RWzb7.DL3XDL2Dn8hWcwX5jw3RlfWzGsPeUzBHvs6LfXFjPGLLbkTkw
UoxBoxsN14+7CxAqfSWiZzN1Gurap1HbqLieHtLwlBq.5RCNM.r4EeHzEu3w
yeHkJYoToykB6RdUzDlrnthCZU9lMbErVI2BYRA2jqnUHCP3M4P.1ZsYbQAv
TapMqVEX1owy5LERPOoPhb62RbuVtztGb4aJIRz4dy0ZLaueOQfKSLwbMTwU
r3TxbrFMgcuYhz8tI5D68uo7dPH07+x339BvPGs.xEY7clvfBo7a0kv8rhZd
kKBA+YlRw1ehd8Vmebza2qSN6d8+.B5KqSbfkBt.W501HfSvoer7mjjIykeD
988hqZboXFTSDND0aTdCiCbUQHzgJfPOZExEGoJII9by4CCvGgy0EelLs8BP
9.Z6ii6O4+qqC200hTSECPeG1pWJtmcEGdPkq0bArVp.i54hJsxlIGJx+F+y
14eAFPbYm6soCmQOxY0BsuBBdSYzC9PLQqvRwFSTEWj4xmYjpy2xu3RXKWem
LCt.WfUHyyfGx02AkEr8Wb4B3AlpDUhgSTYLAbMN5jMUjCyF9FMUzyto5u2w
1VVvsgJnLzXgr.9Gr2oZ7rDVyBCRqqznArZu.sgU4eG6V5MVSHX4g8eGbJkD
BO2kDP7er2CQ35Dn4jhgzAxazAGB6sWxJ187raQ8P.ukowFyVgGqopgHMLAa
wD+kaacmlU1y9CVavDYIxE8ZGBOvWRSlzzmA+hXgTRyINs4Xr4hMcSOnEqsO
X5PkbB6s35h9Jx18YQCmNl+oGGtzZXCCO49lb2aS2LjLYsQXt5.1F9qnHAnf
O76jQztjywFQm1dH7O2cJYRaOB+XSVa2EAcJMC13GwnUyVkNI6YuS3dCXcoz
CiiNawqKO27KceZA+wQcH1lv033SMbsGdFMHOsyxF58+tmW62qQ9KIekrVk1
hby8rAO+Imwqz4BV60kbyS2LkQmNMuiEmjQfiIMzAJ8zUHQ9XPl7Zj8eWHub
DHGNA11nQfyxI.mfwXIudB.xtHjgPhNUHMHmlBfFUXX7TfT7XPxeJPhNBjhl
BfHiLBm7dAxeD.kLELZL9nWCjKcOqr7dtppQaKFXUsu5tM7jE1g4B2P64G8T
76ya021XgGSgkyzXsrZk86xaWr6jT1qeWIpyax7hrCgzVwTvvt6Ja9+4rEVm
+y4+Gd.sopC
-----------end_max5_patcher-----------
</code></pre>
```

## Create a Synth for MercuryPlayground

The Mercury Playground uses the [**ToneJS**](https://tonejs.github.io/) framework for creating the Transport, Sequencer, Synths, Sampler and almost everything WebAudio related. It also uses [**WebMidiJS**](https://webmidijs.org/) for the MIDI related instruments and [**SocketIO**](https://socket.io/) for the OSC related functionalities. Extending the engine with your own synths requires knowledge/experience with JavaScript programming.

### Setup

First clone the project from `https://github.com/tmhglnd/mercury-playground` so you can run it locally. Follow the steps in the [Getting Started](./../getting-started.md#🌑-without-internet)

### Create an Instrument Class

You can create a new `Class` for your instrument. Depending on what you want the instrument to do (Sound, MIDI, Sample, OSC, Polyphonic) you can `extend` your class from the `Sequencer`, the `Instrument` or the `PolyInstrument`.

```js
class MyCustomInstrument extends Sequencer {
	...
}
```

```js
class MyCustomSynth extends Instrument {
	...
}
```

```js
class MyCustomPoly extends PolyInstrument {
	...
}
```

:::tip
You can use the other instrument class files (such as MonoSynth.js) as an example or starting point for making your own
:::

### Add to the language

In the `worker.js` file you can add your instrument to the language so the parser knows what `Class` to use when you type:

```js
new mySynth <name> function()
```

Add the instrument to the `objectMap` like so:

```js
const objectMap = {
	...,
	'mySynth' : (obj) => {
		let type = obj.type;
		let args = obj.functions;			
		let inst = new MyCustomSynth(engine, type, canvas);

		objectMap.applyFunctions(args, inst, type);
		return inst;
	},
	...
}
```