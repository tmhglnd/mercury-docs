---
sidebar_position: -1
---

# 🤓 Coding in Mercury

Now that you got everything setup and are ready to start coding you're probably wondering: "How does this actually work?"

This short introduction will help you to get started with coding your first sounds and music. The guide will explain the Mercury *syntax*, some basics in (western) *music theory*, the concept of *serialism* in music and *algorithmic composition*.

First we will look briefly at what *Live Coding* is and how this works in Mercury. Then we will make a sampler to play a basic sound, changing the timing, changing the tempo, play more samples together and make a rhythm. We'll look at how we can create these rhythms with functions too to make the compisition *algorithmic*. After that we will focus on creating a synthesizer that allows us to play melodies. We'll see how we can make a melody with a list of numbers and apply a scale. We can also play chords and adjust the sound to our liking by changing the waveform,  changing the length of the sound and applying different effects such as a filter, a echo and a reverb. If you run into an issue please see the [**Troubleshooting**](troubleshooting) page.

<!-- We will also look into shaping the sound to our liking by changing the playback speed or the position where we start playing. -->

## 👩🏽‍💻👨🏻‍💻👨🏾‍💻👩🏼‍💻 Live Coding

Live coding is about making software live, sometimes called *on-the-fly* or *just-in-time* programming. It is a form of peformance art where the artist is typing code on stage, this code is interpreted by the computer in real time and translated to sound or visuals (or sometimes even something else completely, like controlling robots). Live coding is not a specific genre, but can be applied across many art disciplines. There are dance events where live coding is used to create electronic music, these are usually called Algorave's. Live coding is also about openness, inclusion and accessibility, showing your code to the audience via a projection and thinking and improvising with it publically. Creating a welcoming environment where people can try and fail collectively. Sharing your code and knowledge and learning from others. And after all this live coding is still much more. You can read all about it in the book: ["Live Coding, A user's manual"](https://livecodingbook.toplap.org/), openly available as pdf and epub.

There are more people involved in live coding around the world! You can find them here: 

- TOPLAP Home: https://blog.toplap.org/
- Algorave Site: https://algorave.com/
- Eulerroom Youtube Livestreams: https://www.youtube.com/eulerroom
- Mercury Discord Server: https://discord.gg/vt59NYU

Live coding is not necessarily easy, but just like with playing an instrument such as guitar or drums, you can learn it by trying and practicing often. By following tutorials, visiting events, watching videos, listening music, you name it, you can find inspiration and ideas to make your own code and sounds.

Mercury was made with the idea to abstract away some more difficult parts of coding electronic music, and provide you (the artist/performer) with functions that get you to make music quickly.

## 💾 Playing a sample

A big part of electronic music (but for sure also in many other music genres) is the use of samples. The word sample can have different meanings accross various musical contexts. A sample can be a recording of a note of an instrument, or a small portion of a larger recording, or a snippet of an original song. 

### One `sample`

Empty the editor and type the following code and press `play` or use the shortkey `Alt + Enter`. Mercury will evaluate your code and start making sound (if there aren't any errors).

```js
new sample kick_house
```

:::info
Be aware of the spaces "` `" in the code between words, these are important!
:::

Because Mercury is made for live coding you will hear this sample and it is already playing repeatedly by default for you! This repetition is also called a *loop*. A cool feature is that all the instruments are always immediately *looping* 🔁.

You don't have to stop the sound when you make adjustments to the code. You can keep typing and every time just hit *evaluate*. The old sound will be replaced by the new sound automatically 🎉. For example add some other sounds on the lines below, evaluate, and hear the sounds play together. Mercury evaluates code `line-per-line`, so you have to start a new line with a new "action".

```js
new sample kick_house
new sample hat_min
new sample snare_808
```

:::tip
You can comment `//` a line to "mute" the instrument. Comments are parts of text in the code that are not evaluated when you click play. This is useful during live performances if you want to stop a sound from playing without removing the code.

```js
new sample kick_house
// the hihat is removed from the code
// new sample hat_min 
new sample snare_808
```
:::

### What's the `time()`?

By default every instrument will play its sound once per measure. In most western pop music a measure has four counts (1, 2, 3, 4, 1, 2, 3, 4, 1, etc.). If we want to play this sample four times per measure we use an `instrument-function` named `time()`. The argument for the function will be the `fraction` we want to count, in this case `1/4` if we want four counts in 1 measure. We can apply this function for the different samples to create a beat. The most basic beat (or groove) has a kick 4 times per measure (called *four-on-the-floor*), a snare 2 times and a hihat 8 times.

```js
new sample kick_house time(1/4)
new sample hat_min time(1/8)
new sample snare_808 time(1/2)
```

Now you hear a basic drumbeat that you are likely familiar with. Try making it more interesting by changing any of the `time()` arguments to different `fraction`'s. 

```js
new sample kick_house time(1/4)
new sample hat_min time(3/16)
new sample snare_808 time(5/8)
```

:::tip
You can use a second argument in `time()` to apply an offset, a short delay of the sound.
```js
new sample kick_house time(1/4)
// the hihat's time is 1/4, the same the kick, but the offset is 1/8
// so you'll hear exactly between every kick sound
new sample hat_min time(1/4 1/8)
```
:::

### Other sounds

You can of course also try other samples that are included in Mercury! A full list of samples is available in [**Sounds in Mercury**](sounds). Try for example: `bamboo_g`, `shatter`, `tabla_mid`.

## Changing `tempo`

When you hear this beat it might sound great, but maybe you want it to play faster or slower all together. You can change the overall (*global*) tempo of the environment with a `set` action.

```js
set tempo 80

new sample kick_house time(1/4)
new sample hat_min time(3/16)
new sample snare_808 time(5/8)
```

Try a tempo of `110`, `140`, `180`, and even `300`! All the different tempos give the groove a different feeling as well and may change your perception on rhythm of all the instruments combined. This perception is called a *composite rhythm*.

The tempo is definited in BPM, or *Beats Per Minute* on a quarter note (`1/4`). This means that when the tempo is `100`, you can fit 100 quarter notes in one minute. The time between these notes will therefore be `60000 ms / 100 beats = 600 ms`. When the tempo goes higher (read faster) the time between notes will get shorter. Eg. the time-interval with a tempo of `140` is `60000 ms / 150 beats = 400 ms`

>The `set` command is a command that allows you to change parameters of global settings such as the tempo. Later on we'll see how to use it for instruments as well.

## `play()` and `list`

After a short while of playing the tempo and time you maybe think to yourself: *"Is it also possible to play this sample in the same tempo and timing, but maybe with a different rhythm?"*

This is where we will introduce `list`'s as arguments to functions and the `play()` function. But before we start making rhythms, let's first have a quick look at various forms of music notation systems.

<details>
<summary>A brief history on Musical Notation Systems</summary>
<div>
Maybe you are familiar with the modern western [music notation](https://en.wikipedia.org/wiki/Musical_notation). A notation system consisting of five horizontal lines stretching over the paper. At the beginning of the lines a so called clef is drawn, denoting the position of the note G or F depending on the type of clef. From that point onwards notes can be written down by using various symbols on the paper (usually oval shaped), where the vertical position of the symbol (on or between the lines) determines the pitch (how high or low is the note), the horizontal position together with the symbol itself determines the timing and length of the note (when is it played and for how long).

This western notation system is a form of musical representation originating from [Neume](https://en.wikipedia.org/wiki/Neume) in 800 CE. But other parts of the world like [India](https://www.google.com/search?q=india+traditional+musical+notation&tbm=isch&ved=2ahUKEwiA95P_ht7qAhX3wAIHHW8DBmsQ2-cCegQIABAA&oq=india+traditional+musical+notation&gs_lcp=CgNpbWcQA1DvA1jvA2DqBWgAcAB4AIABLogBLpIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=cbgWX8D6KveBi-gP74aY2AY&bih=821&biw=1440), [Russia](https://www.google.com/search?q=russian+musical+notation&tbm=isch&ved=2ahUKEwjxtMDoht7qAhUGG-wKHTtuDFoQ2-cCegQIABAA&oq=russian+musical+notation&gs_lcp=CgNpbWcQAzIECAAQGDoGCAAQBxAeOggIABAIEAcQHlD_Z1j1bGDVbmgAcAB4AIABQ4gB7AKSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=QrgWX_GLDIa2sAe73LHQBQ&bih=821&biw=1440) and [China](https://www.google.com/search?q=chinese+traditional+musical+notation&tbm=isch&ved=2ahUKEwiJ9u31ht7qAhXaOewKHbbZBCYQ2-cCegQIABAA&oq=chinese+traditional+musical+notation&gs_lcp=CgNpbWcQA1CqEFiTIWDfImgBcAB4AIABSIgBgQWSAQIxM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=XrgWX4nPDNrzsAe2s5OwAg&bih=821&biw=1440) developed there own notations over the centuries. In the 50's and later many composers have been experimenting with other forms of notation as well, named [graphic notation](https://en.wikipedia.org/wiki/Graphic_notation_(music)), to find new ways of capturing musical expression that does not work in the modern western notation. Have a look at some of these [graphical notations](https://www.google.com/search?q=graphical+music+notation&tbm=isch&ved=2ahUKEwiFwM6Oh97qAhUFt6QKHZ4uCloQ2-cCegQIABAA&oq=graphical+music+notation&gs_lcp=CgNpbWcQAzoCCAA6BggAEAUQHjoGCAAQCBAeOgQIABAYOgYIABAKEBg6CAgAEAgQBxAeUKEOWPAuYP8vaAFwAHgAgAE4iAHNA5IBAjEwmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=krgWX4WvB4XukgWe3ajQBQ&bih=821&biw=1440). They are already a piece of art even without the musical output.

Around 1920 a new form of composition technique, [*Serialism*](https://en.wikipedia.org/wiki/Serialism) was described by Josef Hauer and used avidly by composer Arnold Schoenberg. Serialism uses series (or sequences) of values to describe various musical parameters. A series could hold for example pitch information (such as note names c e g f), but could also have rhythmical information. In this way all components (pitch, length, dynamics, articulation and more) of a note can be captured in a series and used to compose with. More on this will be discussed in the section [Algorithmic Composition](#algorithmic-composition)
</div>
</details>

### The `list`

Mercury finds its roots in the concept of *Serialism*, a musical composition style where all parameters such as pitch, rhythm and dynamics are expressed in a series of values that adjust the instruments state over time. This series in Mercury is refered to as a `list`. Every instance of an instrument has an internal counter. This counter increments (0, 1, 2, 3,... etc) when an instrument triggers an event based on the time-interval from `time()`. This is also called a step-sequencer. When a `list` is added as argument to an `instrument-function` the instrument uses its count as a lookup-position (index) taking the corresponding value from the list. As soon as the index is higher then the amount of values in the `list` it will return to the beginning and start over, therefore the `list` is circular/looping.

```js
list <name> [ value0 value1 ... value-n ]
list <name> function()
```

The line starts with the code `list`, followed by the `name` of the list. The name can be any 3 or more characters you like. All values between the `[` and `]` (square brackets) are part of the list. Every value must be separated by a space "` `".

:::info 
Lists have to be created on a line **before** they are used, because the code is evaluated from top to bottom.
:::

### To `play(1)` or not to `play(0)`

In order to create a rhythm for an instrument we can make a list consisting of zeroes and ones. The `1` represents a `true`/`on` value, resulting in the triggering of the sound, the `0` a `false`/`off` value that will not play. Now lets put this into practice.

```js
set tempo 110

new sample hat_min time(1/16) play(1)
```

This sounds the same to what we heard before. This is because the `play()` function only has a single `1` as argument, which means all notes are played. This is the default and was already the case in the code above. But let's now create a list with `0`s and `1`s and apply the name of the list as argument in the function.

```js
set tempo 110

list hatBeat [1 0 0 1 0 1 1 0]

new sample hat_min time(1/16) play(hatBeat)
```

You can hear how the rhythm is applied to the sample. Every 16th note (`1/16`) the internal counter from that instrument looks up a value from the `list hatBeat`. When it is a `1` it is played, when it is a `0` it is not. Try some different rhythms of different lengths, for example: `[0 1 0 0 1]`, `[1 1 0 1 1 0 0]`, `[1 1 1 0]`.

<!-- >In Mercury most functions have synonyms, meaning that different words do the same thing. This originated from the fact that people come from different backgrounds and are used to using different words with the same meaning. For example `play()` can also be written as `beat()` and `rhythm()`. This may sound confusing, but eventually this might help you remember and recall functions easier via a word that fits your way of thinking. -->

:::tip kick with a chance of hat
The `1` or `0` in `play()` is actually not a binairy value but a percentage where 0=0% and 1=100%. You can add some chance to your instruments by choosing for example `0.5` (50%) or `0.9` (90%) of playing

```js
new sample kick_house time(1/4) play(0.9) // play 90% of the time
new sample hat_min time(1/16) play(0.5) // play 50% of the time
```
:::

## Combining rhythms

In order to make more complex rhythms we can take a step back to our pop beat from [more samples](#more-samples). Now instead of using different `time()` arguments to make a rhythm, we will use the power of `list`'s to look up a `1` or `0` to let it play the sound or not. First we make sure that all instruments play in the same time.

Make the following code:

```java
set tempo 95

new sample kick_house time(1/16) play(1)
new sample snare_fat time(1/16) play(1)
new sample hat_click time(1/16) play(1)
```

Execute this code and you will hear all samples play all 16th notes. Now we create different lists for the different instruments. Notice the lists don't have to be the same length. They will each *loop* individually. This allows you to quickly create quite complex rhythms that change over time with just a few lines of code!

Adjust and execute:
```java
set tempo 95

list kickBeat [1 0 0]
list snareBeat [0 0 0 0 1 0 0 0]
list hatBeat [1 1 0 1 1 0 1]

new sample kick_house time(1/16) play(kickBeat)
new sample snare_fat time(1/16) play(kickBeat)
new sample hat_click time(1/16) play(kickBeat)
```

## Linear beats

Instead of using multiple instruments to create our beat, we can also use one sampler and let it play different sounds. For this we need to declare a list with the names of the samples in the order we want to play them. The playing of samples without any overlap or playing at the same time is sometimes called a *linear beat*. For example we want to play kick, hat, snare, hat. 

Now our code will look like this:
```java
set tempo 110

list theSounds [kick_house hat_click snare_fat hat_click]

new sample theSounds time(1/8)
```

Now to make this a bit more interesting we can combine this technique with another list that holds some zeroes and ones to play a rhythm at a time of `1/16`.

For example like so:
```java
set tempo 110

list theSounds [kick_house hat_click snare_fat hat_click]
list rhythm [1 0 1 0 0 1 0 1]

new sample theSounds time(1/16) play(rhythm)
```

Give yourself some time to experiment with all the code so far to get yourself comfortable with the different functions and their arguments and making of lists. Try some different rhythms in various lengths, try some different samples in different orders as well. Have fun!

There is still so much to do with just the sampler, but for now we'll first introduce another instrument in Mercury: the Synthesizer.