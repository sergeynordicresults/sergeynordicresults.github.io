# Interesting things I have found

## God doesn't exist with probability 99%



From "God as illusion" by Richard Dawkins:

"The atheist is the one that gives 99% probability that god doesn't exist". I am an atheist by this definition.

We cannot prove that god doesn't exist, BUT

1. We can prove that souls don't exist (about this - below 👇¹).
2. We know HOW life was "created"
3. We don't know why our universe was created, maybe it was created by God, but there is an "Anthropic principle"/"observation selection effect" - "We see that our universe have 'these properties', because only in a universe with 'these properties' could an observer, a human being, appear."

SUMMARY: god is an "extra variable" to a "function" that works fine without this "extra variable". (about this - below 👇²)

## We know HOW life was "created"

Life appeared like this:
1. in the "infinite" (?) universe appeared "infinite" (?) number of atoms
2. atoms started to connect together into molecules with random properties
3. some molecules DID have the "self-replication" property (they made copies of themselves), these are our ancestor-molecules <sup>(the natural "paperclip turning robot"? then why we dont see them around us?)</sup>
4. our ancestor "self-replicating molecule-robot" was sufficiently stable to not die, and sufficiently malleable to mutate and evolution into you and me <sup>(eg, this is only my thought, radiation particles fly with big speed, break some molecules, these molecules die, but not so much break other molecules, and these molecules change itself and have new properties. Then some molecules became stronger, but not malleable and stopped to evolve, and others are stronger, but still malleable, because with a death switch inside to continue evolution. soon we will remove this switch)</sup>

THIS IS NOT similar to "from nothing a plane was created", because:
1. we need (for example) just 1000 atoms to arrange properly to create a "self-replicating molecule-robot"
2. So, it was only a matter of time that this will happen in "infinite" universe.

SUMMARY:
1. We are descendants of "Self-replicating molecules-robots" that "have been created & created now & will be created until the end of universe" RANDOMLY BUT INEVITABLY
2. Just like in a "Game of life" automata: you generate random field, give rules, and self-replicating structures appear
3. (From book "Selfish Gene" by Richard Dawkins) The "death" property is required for "self-replicating molecule-robots" BECAUSE it allows evolution ==> So, basically, humans became so smart, that are now able to (temporally) escape the death/"natural way of things"


![unnamed](https://user-images.githubusercontent.com/7573215/234642011-df810bb9-224d-4dde-a8a9-79cb1b859476.gif)

<img src="https://user-images.githubusercontent.com/7573215/234642024-21383504-f47e-44c1-b8b8-5d8c9ed15684.jpg" width="200" alt="rules"/>

Eliezer Yudkowsky "Growth stories": The "game of life" universe is Turing complete. It means self conscious beings can appear there too. Do you think the prayings of these 2D humans work? Do you think there is a god that will kill the bad 2D Chinghiz Khan that tortures 2D people and still has lot of money? Do You think they have an afterlife after death?



-------------


<sub>I don't believe in power of prayers OR that it's possible to "charge water by positive thoughts" OR taro cards OR horoscopes OR other magic. (read "God as illusion" by Richard Dawkins, they were tested and they don't work)</sub>

<sub>All religions were created by humans, and contain not only immutable truth, but also stupid thoughts inspired by old times</sub>

<sub>So, yes, i behave as if living beings, me too, are machines. But it doesn't make me want to kill people. Even putin and ted bundy. There exist harder, but more optimal solutions:</sub>

<sub>    1. neurofeedback</sub>

<sub>    2. fix their stupidity by teaching them what will (probably) happen with our universe (below. because from cosmological perspective lot of our problems dont make sense, e.g. borders, racism) and giving them to read ["Harry Potter and methods of rationality" by Eliezer Yudkowsky](https://hpmor.com/), this book has lot of love to humanity</sub>

<sub>    3. Tell them that zero-sum games are not the only possible games to play (e.g. the game of "climing on hierarchy ladder" is bad zero-sum game, "sport with only one winner" is good zero-sum game, "wealth/lets create new devises/lets fix death" is a good non-zero-sum game because [money and wealth are infinite, by helping you I help us all](https://youtu.be/1-TZqOsVCNM)
</sub>


## 👉¹ Why souls don't exist:

#### `1.` I have seen code of "deep learning" and "human-like" neural networks, THUS I think there is no "magic soup" in the brain.

<!--
<details><pre translate=yes>
    !!!!NOT FINISHED, DONT READ!!!!!

    Networks types:
    1. "deep learning" - e.g. input is a pixel image is matrix AND memory is matrix too => input and memory are compared by dot-operator (gives another matrix) => then output matrix is coverted into percent value between 0% and 100%
    2. "human-like"  [https://youtu.be/qv6UVOQ0F44?t=216](https://youtu.be/qv6UVOQ0F44?t=216)

    "Human-like" neural network works like this:

    a. each "axon" is an UPDATEABLE chunk of memory that contains a number from 0.0 to 1.0
    b. IF the state of "axon" is more or equal to 0.5 THEN signal goes through axon ELSE doesnt
    c. "axon" have 1 input and 1 output
    d. "neuron" is just a connection, only in code, it collects input from axons, finds average input (sum of inputs divided by length of an input array) and outputs input to other axons

    Process

    You input an image data, like `[0.0, 1.0, 0.5]` (where 0 is white, 1 is black, 0.5 is gray).

    It goes through axons and neurons, and can output for example:
      an array `[0.0, 0.5]` which is the location of eyes for example
      OR just a one number DO_I_SEE_A_DOG (probability from 0.0 to 1.0)

    1. FOR EXAMPLE your neural network outputted DO_I_SEE_A_DOG probability 0.0 on an image with a dog. You know the probability should be 1.0. HOW TO UPDATE WEIGHTS so that is outputs 1.0 number?
    2. You make a copy of your neural network, You update RANDOMLY the weights, +0.1 to one weight, -0.1 to other weight of axon
    3. IF new neural network weights a better THEN replace old "brain" with new "brain" ELSE discard "new" brain, try again to create a "new" brain.

    ```javascript
    # image = load_image()
    image = [
      0.0, # white
      1.0, # black
      0.5, # grey
    ]

    const numberOfInputs = 3 # image.length - 1
    const numberOfNeuronsInHiddenLayer = 4 # there is only one hidden layer, but could be many
    const numberOfOutputs = 1 # because the doISeeDogProbability is only one number from 0.0 (zero percent probability) to 1.0 (100 percent probability)

    const makeAnArrayOfZerosWithLenght = (lengthOfArray) = Array.from({length: lengthOfArray}, () => 0.0)

    assert(makeAnArrayOfZerosWithLenght(3), [0.0, 0.0, 0.0])

    const axonsFromInputToLayer1 = [
      makeAnArrayOfZerosWithLenght(numberOfNeuronsInHiddenLayer), # 1st input to hidden layer
      makeAnArrayOfZerosWithLenght(numberOfNeuronsInHiddenLayer), # 2d input to hidden layer
      makeAnArrayOfZerosWithLenght(numberOfNeuronsInHiddenLayer), # 3d input to hidden layer
      makeAnArrayOfZerosWithLenght(numberOfNeuronsInHiddenLayer), # 4th input to hidden layer
    ]

    const axonsFromLayer1ToOutput = makeAnArrayOfZerosWithLenght(numberOfNeuronsInHiddenLayer)

    TODO: finish
    ```
   </pre>

   <img src="https://user-images.githubusercontent.com/7573215/162324220-cdc1699b-7090-4d9e-be93-2d72ef67adb4.png" alt="Banner" width="100%">
</details>
-->

#### `2.` (mine) souls don't exist because the "atom-per-atom cloning" is possible

By this I mean that there is NOTHING in laws of physics that disallows us to:

<pre translate=yes>
  a. (in place A) scan a body of a human for "position" and "type" of each atom
  b. transfer this information to place B
  c. make a copy of human body from atoms from the air
  d. destroy original body (optional)
</pre>

Let's call `a,b,c` - the "atom-per-atom cloning", and `a,b,c,d` - the "atom-per-atom teleportation"

<details><pre translate=yes>
I believe, the thought process of a new human will start from where the old body stopped thinking, because:

1. memory is just a ratio of Calcium to Potassium (for example, don't remember) in each neuron
2. a neuron is just memory device that holds a number from 0.0 to 1.0

IF "average signal value to the neuron" is more than "neuron state value" THEN signal is passed to other axons ELSE not passed

NOTE that teleportation is not like a quantum teleportation of electrons
</pre></details>

THUS (!!!!): IF you do "atom-per-atom cloning" (i.e. one does NOT destroy "original body" - step `d`) THEN

<pre translate=yes>
  a. Did the original soul divide onto two souls?
  b. or Now the "original soul" operates two bodies from a heaven ?? O_O
</pre>

NO, souls don't exist (!!!)

"Occam's razor" principle - from two explanations of same incident one should prefer the explanation that have less "moving parts"/variables.

👉² Soul is an additional variable `c` to a function `f(a, b, c) { ...body of function, the code, but you dont know what it is... }` that works fine without additional variable `c` (with `a` and `b` variables only) - it means the variable `c` is not used in a body of a function!

<details>

<code>f</code> is name of function, <code>a</code> and <code>b</code> and <code>c</code> are "function arguments"/"function variables".

By "works fine" I mean IT SEEMS LIKE function <code>f</code> doesn't use the variable <code>c</code>.

<pre translate=yes>
IF I change `a` argument         THEN `returned_value` will be changed
IF I change `b` argument         THEN `returned_value` will be changed
IF I change `c` argument         THEN `returned_value` will NOT be changed, the `c` makes no effect on `returned_value`

IF I change `a` and `b` argument THEN `returned_value` will be changed
IF I change `a` and `c` argument THEN `returned_value` is same as if I changed only `a`
IF I change `b` and `c` argument THEN `returned_value` is same as if I changed only `b`

IF I change `a` and `b` and `c` argument THEN `returned_value` is same as if I changed only `a` and `b`

RESULT OF TEST: (IT SEEMS LIKE) function `f` doesn't use the variable `c`
</pre>

example function with such property in javascript:

<pre>
function f(a, b, c) {
    return a + b
}
</pre>
</details>

#### `3.` (Sam Harris proof) https://en.wikipedia.org/wiki/Alien_hand_syndrome

Souls don't exist because one can divide the connection between two hemispheres (a little, just like this is done to treat epilepsy), and now human body will act as if there are TWO humans live in ONE body (e.g. one hand is putting closes on, while the other puts them off)

#### `4.` (from "Harry Potter and methods of rationality" by Eliezer Yudkowsky) souls don't exist because brain injuries DO EXIST

A guy was a good man, then his head was injured and he became evil. SOUL?

## What will happen after death?

https://www.ted.com/talks/stephen_cave_the_4_stories_we_tell_ourselves_about_death

Seems like:
1. The same that was before you were born
2. Same that happens when you are out of consciousness

## Who we are in this universe

From:
1. ["Cosmology and the arrow of time: Sean Carroll at TEDxCaltech"](https://www.youtube.com/watch?v=WMaTyg8wR4Y)
2. and most importantly ["Sean Carroll - The Passage of Time & the Meaning of Life"](https://www.youtube.com/watch?v=7BH6XCRZad8)

<pre translate=yes>
Imagine a cup, in a cup there is:
1. (at the bottom) a coffee
2. (at the middle) some thing that separates coffee and milk, e.g. from plastic
3. (at the top) a milk

then imagine a separation `2.` magically disappeared. What will happen next is that coffee and milk will start to slowly mix together AND create tornados (i.e. `tornados of milk in the coffee` OR `tornados of coffee in the milk`)

WE ARE these little tornados in a cup (on a border of coffee and milk, when they are mixed together)

1. (LOW ENTROPY) coffee and milk are fully separated - beginning of universe
2. (HIGH ENTROPY) coffee and milk starts to mix - human civilization, then black holes are everywhere, but black holes evaporate
3. (LOW ENTROPY again) coffee and milk are fully mixed - all black holes have evaporated, only the plain energy, all energy combinations will be tried

Then, in one place, there will be a combination that is the same (or almost the same) as the "begging of universe" combination.

This is the New universe, like a bubble amongst other bubbles (other expanding universes in multiverse), that have appeared in a space of "plane energy".
</pre>

![autodraw 8_10_2022](https://user-images.githubusercontent.com/7573215/183978832-9bbf6d1b-8202-4e07-a302-4ddf565dd70e.png)

![x](https://user-images.githubusercontent.com/7573215/183980214-4de65deb-07ba-4793-9770-caf8fc22be44.png)


---------

<pre translate=yes>
We are like hexagons that appear on a mercury when it is heated

1. (LOW ENTROPY) Low temperature - no cells
2. (HIGH ENTROPY) Mercury is heated - hexagonal cells appear (this allows heat/entropy to pass through to the outer world easier?)
3. (LOW ENTROPY again) Heated more - no cells

https://bartoszmilewski.com/2018/03/28/life-and-thermal-death-in-the-universe/
</pre>


![x](https://instructional-resources.physics.uiowa.edu/sites/instructional-resources.physics.uiowa.edu/files/field/demos/8b10.40a_0.jpg)

---------

<pre translate=yes>
Q: What IS an entropy?
A: entropy is number that shows HOW MANY "different arrangements of atoms" would give the "picture, that an OBSERVER (human) is seeing"

High entropy = lot of "disk space" is needed to store the information about the "picture, that OBSERVER is seeing"

By this I mean: the definition of entropy is tied to a fact, that the only way for us (humans / observers / instruments that can detect and react on changes) to find the "location" and "speed" of an object (e.g. atom) is by using a light, but light is a wave

https://www.youtube.com/watch?v=MBnnXbOM5S4

Having radar (devise that can emanate pulses to the world and detect pulses from the world) THAT makes pulses and then detects responses (the pulses reflected from the flying plane)
- To know a position of a plane - radar should emanate "low frequency waves/single pulses"
- To know a speed of a plane - radar should emanate "high-frequency waves/many pulses", higher frequency = higher speed precision

THUS
1. there is a limit to how much "pixels" we can get when we study a bunch of atoms in a box
2. atoms are hot (move fast) - more "exact positions" of atoms could give "a picture we see"
3. atoms are cold (e.g. 0 kelvin, no movement) - only one position of atoms could give such picture

</pre>

<pre translate=yes>
https://youtube.com/watch?v=_eC14GonZnU

Stephen Wolfram: have found some basic principles that are even more basic than principles of our universe itself. These principles allow to generate many universes. One of such universes is very similar to ours.

> The quantum theory follows very beautifully from this: the recipient state cannot be updated before originator of a signal is updated

-------

So, based on Stephen Wolfram "New science": in the plainness of energies new universes arise all the time, some of them are not stable but others are, in one of such universes we live, and there is no way to escape the death of our universe?
</pre>


## P.S.

> "Harry Potter and methods of rationality": imagine you were born in on a planet with a tradition to beat people with a stick to a head every day at 12pm. Soon people would tell that it's actually good to be beaten, e.g. your scull becomes stronger (it's called "to change perception of problem to reduce the cognitive dissonance"). The same is with our attitude to a death: somehow we think that being dead is better than alive.

> "Harry Potter and methods of rationality": imagine you came to work and see that a guy beats a printer. The first thing you will think is that a guy have problems with a head or a bad character, but the guy will think that he is a good person that just had a bad day

> "Harry Potter and methods of rationality": IF humans would really believe in a "life after death" THEN they would commit suicide

> "The God delusion" by Richard Dawkins: There was the "Great prayer experiment" to find "does praying helps patients to recover?". 

<pre translate=yes>
Patients were divided to 3 groups: 
- group 1 - "didnt receive prayers and didnt know about it" (control group)
- group 2 - "received prayers and didnt know about it" 
- group 3 - "received prayers and knew about it". 
Outcome:
- group 1 - no statistical difference, as expected 
- group 2 - no statistical difference, prayers dont help, 
- group 3 - post-operation state is even worse than for other groups, because patients had stress because of thinking "wow, they even have to pray for me, probably my state is very-very bad"
</pre>


> Jordan Peterson: The "great flood story" is about that you should prepare, because flood is coming. The "Cain and Avel story" - is that it's only a statement of a fact that people can envy your success and maybe even kill you

> Jordan Peterson: We sell today for tomorrow. We do hard work now, to live better later

> Jordan Peterson: You live so good, not because You have created all cities and technologies You use every day, but because it's grandfathers and grandmothers "made the right sacrifices to the God/universe"

> Jordan Peterson: Too much order - tyranny, too little - chaos.

> Jordan Peterson: It's actually harder to write a poem without "rules/order" or "starting point".

> Jordan Peterson: "Do to others what You would like other people do to You" also means "make pain to others, if You would like that someone else would do that pain to you, if You was that someone else"

> Elon Musk: the more we know, the better questions we can ask

> Naval: starting from 18 years old, I was writing a diary every year, at the end of the year, about "what I wish I would do this year better". Later I would notice one and only one pattern: I wish I would be less angry and emotional in hard situations.

> Michio Kaku: in 2060 we will have a device, that can make food from atoms in the air.

> "The Nexus Trilogy" by Ramez Naam: In future we will connect all our brains to one mega-brain using Neurolink technology.

> "Art of learning": if music doesn't allow you to learn, don't close a window, try to use it

> "Artificial Intelligence: A Modern Approach" book: we want to create AI. how smart, in principle, can it be? can we create it, so it is able to predict everything that is happening in universe? even such small probability events like "a safety-deposit box being accidentally thrown down on AI agent from a plane" to prevent his death? no, we cannot "create it, so it is able to predict everything that is happening in universe". And humans are limited like this AI too. (rational, but not omnipotent?)

> Eliezer Yudkowsky: There exists an upper threshold on how smart a being can be. The brain cannot be infinitely dense and big, because after some threshold it will convert itself to a black hole.

--------

I am a citizen of a universe, not a country. 

