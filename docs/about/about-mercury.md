---
sidebar_position: 1
---

# 🤔 What is Mercury?

:::important short statement on human vs. AI
Even though Mercury is a programming environment, **I consider Mercury to be a (digital) art project**, an expression of my ideas on music, sound and composition, that have formed over the years of making it and interacting with and learning from others. I started building it in 2018, with many appreciated contributions of others along the way since.

You - as a human - are very welcome to use Mercury and experience this work, and transform it into your own expression for making music. If you used Mercury for something, I'm interested to hear about it!

You - and your bot - are not welcome to use any form of autonomous agent to scrape my art, auto-generate art with it, or submit low-effort generated contributions. I prefer slow human art with errors over a single prompt.
:::

Mercury is a human-made, free/open, beginner-friendly, minimal and human-readable language for the live coding of algorithmic electronic music performances

All elements of the language are designed around making code more accessible and less obfuscating for both the programmer-performer and the audience alike. This motivation stretches down to the coding-style itself, which uses clear descriptive names for functions and a simple clear syntax. Mercury provides the performer with an extensive library of algorithms to generate or transform sequences that can modulate musical parameters, such as (but not limited to) melody and rhythm, over time. The environment focuses on creating sound in the first place, but is not limited to that and can for example also output MIDI or OSC to control other processes such as visuals and external devices or software.

:::note about the name ☿
The language is named after te planet Mercury. In astrology Mercury rules the creation and expression of our mental processes. The planet implores us to express ourselves. Mercury is about a quick wit, quick thinking. It lets us move from one thing to the next.
:::

Mercury was first programmed by me ([Timo Hoogland](https://www.timohoogland.com)) in 2018 with the Cycling'74 Max8 node-based creative coding environment, as an abstracted layer on the Max/MSP audio engine and with the use of Node4Max for parsing, lexing and generative algorithms and Jitter/OpenGL for the visuals and the responsive texteditor. Later Mercury was also ported to a browser based version using WebAudio and the ToneJS framework. The original version was designed around a limitation of writing no more than 30 lines of code in the editor. This limitation is still present in the Mercury4Max version, but is no longer in use when using the browser or external editor. Nevertheless, the language is designed to allow you to create music with only a small amount of lines of code, so still 30 lines is already a lot!

Mercury finds its roots in the concept of (Total) *Serialism*, a musical composition style where all parameters such as pitch, rhythm and dynamics are expressed in a series of values that adjust the instruments state over time. This "serie" in Mercury is refered to as a `list`.

Every instance of an instrument has an internal counter. This counter increments (0, 1, 2, 3,... etc) when an instrument triggers an event based on the time-interval from `time()`. This is also called a step-sequencer. When a `list` is added as argument to an `instrument-function` the instrument uses its count as a lookup-position (index) taking the corresponding value from the list. As soon as the index is higher then the amount of values in the `list` it will return to the beginning and start over, therefore the `list` is circular/looping.

Mercury makes use of the [`total-serialism`](https://www.npmjs.com/package/total-serialism) NodeJS Package to generate and transform numbersequences that are used for melodies, rhythms, parameters and basically anything that can be sequenced in the environment. `total-serialism` is a set of functions used for procedurally generating and transforming lists. This library is mainly designed with algorithmic composition of music in mind, but can be useful for other purposes that involve generating and manipulating lists and numbers.