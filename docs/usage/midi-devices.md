---
sidebar_position: 10
---

# 🎛 Using MIDI Devices

You can extend your projects in Mercury with external MIDI devices. These devices can be for example controllers or keyboards, so you can use knobs or sliders to set values in the instruments you coded. The keyboard allows you to send a note value and control for example a synthesizer in Mercury. The MIDI devices can also be external synthesizers. In that case you can create a specific MIDI instrument in Mercury and send MIDI messages, like notes or control-change, to that device and control it. Lastly it is also possible to send and receive MIDI with Mercury from other applications within your computer, for this you would need a virtual MIDI port. 

**In summary you can:**

1. Send MIDI from Mercury with the `midi` instrument
2. Receive MIDI in Mercury as arguments in instrument functions
3. Connect to physical or virtual MIDI devices

## Sending MIDI from Mercury

The `midi` instrument allows you to send MIDI messages (notes, pitchbend, controlchange and programchange) to other external devices or virtual devices in your computer. The `<midi-device-name>` is the literal name as a `string` of the device as it shows up when connected to the computer. For example this can be something like `"My MIDI Device"`. You can also choose `default` to set the instrument to the first midi device in the list. The name is written as a `string` between `" "` and is sensitive to upper and lower cases. If you want to check what MIDI devices are connected, run `set midiLog on`, this will print the device information to the console. Make sure you **allow** MIDI connections in the browser when using the Playground.

To setup a basic midi instrument use:

```js
new midi <midi-device-name>
```

### Sending notes

The `midi` instrument works similarly as the `sample` and `synth`. For instance you can specify the `time()` interval at which the notes are triggered, and you can specify a rhythm through the `play()` function. Then, when you want to send a note, you can use the `note()` or `midinote()` function.

When using `note`, the notes are specified as relative semitones, like in the synth, and they are mapped to any specified scale as well.

```js
set scale major D

list notes [0 7 5 3]

new midi default note(notes 2)
// plays the midi notes 62 69 67 64
```

When using `midinote`, the notes are specified as regular MIDI pitch values and are **not** mapped to any specified scale

```js
list midinotes [60 63 67 48 72]

new midi default midinote(midinotes)
```

For more info on all the different functions in the `midi` instrument for sending notes, such as `duration`, `chord`, `channel` and `programchange`, please see the reference under [**midi instrument**](./../reference/instruments.md#midi)

### Sending controlchange

You might run into the situation where you only want to send controlchange messages (`change()`) and not let the instrument send any midi note message. For this you can set the `note()` function to `off`.

```js
list ccValues [10 20 30 40 50]

new midi default time(1/8) note(off) change(21 ccValues)
```

## Receiving MIDI in Mercury

Using MIDI messages in Mercury is done through so called OSC-messages (Open Sound Control) by specifying the string that belongs to the knob of the controller.

If you connect a MIDI device before you start Mercury it should be recognized automatically. Make sure you **allow** MIDI connections in the browser when using the Playground. You can enable the MIDI logging to check if the knob changes are coming in. Do this by evaluating:

```js
set midiLog on
```

When twisting knobs or sliding faders on your controller you should see something printed like:

```
midi in: controlchange 7 56
midi in: controlchange 7 55
midi in: controlchange 7 54
```

Or when playing notes on a keyboard:

```
midi in: noteon 52 88
midi in: noteon 48 82
midi in: noteon 50 82
```

### MIDI as OSC Message

As mentioned above, the incoming MIDI messages are translated into OSC (Open Sound Control) messages, so they become easy to use within the Mercury language. This translation is done under the hood. An OSC message in Mercury can be accessed by typing a string `'/address/subaddress'` with the OSC address as an argument in the instrument `function()`. For example:

```js
new synth saw gain('/myGain') fx(filter low '/myFilter/cutoff')
```

Any controlchange message starts with `/cc/` followed by the controller number, for example `/cc/7`. To receive the pitch from a keyboard you can use `/pitch`, and the velocity with `/velocity`. In general midi messages are in a range of `0` to `127`. It is important to note that in the case of `cc` and `velocity` this value is normalized to a range from `0` to `1`. This means that by default the value is already useful in functions that use a normalized range, like for example `gain()`. 

### Using controlchange

If you want to use a controlchange as argument in an instrument, you can add the OSC-address string on the place of the argument in the function. For instance, to use controller number `1` for the gain of an instrument, you can type `/cc/1` as the argument:

```js
new sample hat_808 time(1/16) gain('/cc/1')
```

Since the output of the controller is a normalized value between `0` and `1` it may not always be the correct range for the parameter you want to adjust. For example if you want to adjust the cutoff frequency of the `filter` you might want some values between `100` and `3000` Hz. For this we can use the "scaling" argument added to the OSC-address by typing `{lowOutput:highOutput}`.

```js
new synth saw fx(filter low `/cc/2{100:3000}`)
```

### Using pitch and velocity

You can receive the pitch of played MIDI-note through the OSC-address `/pitch`. This number is the actual MIDI value between `0-127`. You can also receive the pitch of the note scaled to the relative semitone that Mercury's `note()` function works with. Access this through `/note`. In that case the note C3 (36) will return `0`. This will work well with the `note()` function if you want.

```js
new synth square note('/note')
```

The velocity of the note is, similarly to the controlchange values, a normalized number between `0` and `1`, instead of the regular 0-127 range. This means the velocity can also be easily used for the `gain()` of an instrument.

```js
new synth triangle note('/note') gain('/velocity')
```

### Triggering instruments from MIDI

In the examples above all the instruments are still triggered by the internal transport of mercury, following the `time()` and `play()` functions that you provide (or using the default values). It is also possible to trigger the instrument externally, completely free from the global transport. This can be done by setting the first argument of time to `free`. Then as a second argument you can provide an OSC-address, and if the instrument receives a value that is greater than 0 it will be triggered.

```js
new synth sine note('/note') time('free' '/velocity')
```

### Combining multiple devices & complex routing

Currently it is not possible to make more complicated setups, for example distinguishing between different MIDI devices. Also more complicated mappings between just linear scaling are not possible within the code. If you want any of these more advanced setups I recommend the following:

- Run Mercury locally ([follow these steps](./../getting-started.md#-without-internet))
- Install a multimedia programming environment like PureData, PlugData, MaxMSP, SuperCollider
- Receiving the MIDI from your devices in any of those applications
- Program your customized mappings in the application and send them as unique OSC-messages to port `4880`
- Disable the midi receiving in Mercury with `set midiEnable off` if you are not using any of the default midi features
