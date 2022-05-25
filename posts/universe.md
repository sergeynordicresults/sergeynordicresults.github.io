## My view on this universe

#### (Why I act as if) God doesn't exist (I mean I don't belive in religion and prayers)

(from "God as illusion" by Charles Dockins)

The atheist is the one that gives 99% probability that god doesnt exist. I am an atheist by this definition.

We cannot prove that god doesnt exist, BUT

1. we can prove that souls don't exist (later).
2. We know how life was created

We are descendants of "Self-replicating molecules-robots" that "have been created & created now & will be created till the end of universe" RANDOMLY.

Just like in a "Game of life" automata: you generate random field, give rules, and self-replicating structures appear

So, life appeared like this: this universe appeared with lots of atoms, atoms started to connect into molecules, and it was only a matter of time that atoms connect together into self-replicating molecule-robot (some molecules were unstable and died), some such molecule later evolved into us.

3. We don't know why universe was created, but there is an Anthropic principle (we are here because we are here, lol, kind of)

Thus, god is an extra variable to a function that works fine without extra variable. (about this later)

###### Why souls don't exist:

1. I have seen code of "deep learning" and "human-like" neural networks, THUS I think there is no magic soup in the brain.

<details><pre>
    "Human-like" neural network works like this:

    a. each "axon" is just a number from 0.0 to 1.0 (represented as a data, a number, it really exists, not virtual, not only in code, and can be updated, this is a memory)
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


2. (mine) souls don't exist because the teleportation is possible

By this I mean that there is NOTHING in physics that disallows us to:

```
  a. (in place A) scan a body of a human for "position" and "type" of each atom
  b. transfer this information to place B
  c. make a copy of human body from atoms from the air
  d. destroy original body (optional)
```

Let's call `a,b,c` - the "atom-per-atom cloning", and `a,b,c,d` - the "atom-per-atom teleportation"

<details><pre>
I believe, the thought process of a new human will start from where the old body stopped thinking, because the memory is just a ratio of Calcium to Potassium (for example, don't remember), (neuron is just a number from 0.0 to 1.0, yes, unlike the previous example it stores state just like axon too, if average signal value is more than neuron state THEN signal is passed to other axons for example)

NOTE that teleporation is not like a quantum teleporation of electrons
</pre></details>

thus IF you do "atom-per-atom cloning" (NOT destroy original body, step `d`) THEN

```
  a. did the original soul devide to two souls?
  b. or now the original soul operates two bodies from a heaven????
```

NO, souls don't exist! Use Occam's razor!

Soul is an additional variable `c` to a function `f(a, b, c)` that works fine without additional variable `c` (with `a` and `b` variables only) - it means the variable `c` is not used in a body of a function!


4. (Sam Harris proof) souls don't exist because you can divide the connection between two hemispheres (a little, like this is done to treat epilepsy), and now human body will act as if there TWO humans live in ONE body (e.g. one hand is putting closes on, while the other puts them off)

5. (from "Harry Potter and methods of rationality" by Eliezer Yudkowsky) souls don't exist because brain injuries DOES EXIST (A guy was a good man, then his head was injured and he because evil. SOUL?)

#### What will happen after death?

what was before your life - nothing

#### Who we are in this universe

From:
1. ["Cosmology and the arrow of time: Sean Carroll at TEDxCaltech"](https://www.youtube.com/watch?v=WMaTyg8wR4Y)
2. and most importantly ["Sean Carroll - The Passage of Time & the Meaning of Life"](https://www.youtube.com/watch?v=7BH6XCRZad8)

```
We are a little tornados in a cup on a border of coffee and milk when they are mixed together

1. coffee and milk are fully separated - low entropy, beginning of universe
2. coffee and milk starts to mix - human civilization then black holes are everywhere, but black holes evaporate, hight entropy
3. coffee and milk are fully mixed - all black holes have evaporated, only the plain energy, low entropy again

Soon the process will repeat, all energy combinations will be tried.

Then, in one place, there will be a combination that is same (or almost the same) as the "begging of universe" combination.

New universe, like a bubble amongst other bubbles (other expanding universes in multiverse), have appeared in a glue of "plane energy".

P.S.
We are like hexagons that appear on a mercury when it is heated

Low temperature - no cells
Heated - cells
Heated more - no cells again

https://bartoszmilewski.com/2018/03/28/life-and-thermal-death-in-the-universe/

P.S.

Q: What IS an entropy?
A: entropy is HOW MUCH different arrangement of atoms would give the SAME picture that an OBSERVER (human) is seeing now (kind of)

By this I mean: the definition of entropy is tied to a fact, that the only way for us humans to find the "location" and "speed" of an object (e.g. atom) is by using a light, but light is a wave

https://www.youtube.com/watch?v=MBnnXbOM5S4

To know a position of a plane - radar should emanate pulses of signals (1 pulse - wait response, wait till it reflects from the flying plane and returns - REPEAT)
To know a speed of a plane - radar should emanate very high-frequency waves, higher frequency = higher speed precicion

THUS
1. there is a limit to how much "pixels" we can get when we study a bunch of atoms in a box
2. atoms a hot - more "exact positions" of atoms could give such picture
3. atoms a still (e.g. 0 kelvin) - only one position of atoms could give such picture
```

#### P.S.

> "If God from Bible is laws of universe, then hell and heaven is a memory of people." (mine)

> The great flood story is about that you should prepare, because flood is coming. The Cain and Avel - is that its only a statement of a fact that people will envy your success and maybe kill you (Jordan Peterson)

> We sell today for tomorrow. (Jordan Peterson)

> Too much order - tyranny, too little - chaos. (Jordan Peterson)

> It's harder to write a poem without "rules/order" or "starting point".

> Elon Musk: "the more you know, the better questions you can ask"
