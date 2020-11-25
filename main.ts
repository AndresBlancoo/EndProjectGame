input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    player_number = randint(1, 5)
    basic.showString("You are player:")
    basic.showNumber(player_number)
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(200)
            led.plot(x, y)
            basic.pause(200)
        }
    }
    basic.showString("Q1: \"I'll be back\"")
    basic.showString("A: Terminator B: Harry Potter")
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q2: \"Say Hello to my Little Friend\"")
    basic.showString("A: Katniss B: Scarface")
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(523, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q3: \"I'm gonna make him an offer he can't refuse\"")
    basic.showString("A: Forrest Gump B: Corleone")
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q4: \"Do or do not. There is no try\"")
    basic.showString("A: Dumbledore B: Harry Potter")
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(523, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q5: \"First rule of fight club is...\"")
    basic.showString("A: Tyler Durden B:Obi wan ")
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q6: \"I am groot\"")
    basic.showString("A:Thor B:Groot")
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(523, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q7: \"My precious\"")
    basic.showString("A: Gandalf B:Gollum")
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
        zeropoints += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    basic.showString("Q8: \"I am your father\"")
    basic.showString("A: Darth Vader B:Yoda")
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("- - E F G - - - ", 120)
        totalpointscounter += 100
        images.createImage(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `).showImage(0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(523, music.beat(BeatFraction.Whole))
        totalpointscounter += 0
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    while (true) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Forever)
        basic.showString("Player number:")
        basic.showNumber(player_number)
        basic.showString("Total Points:")
        for (let index = 0; index < 4; index++) {
            basic.showNumber(totalpointscounter + zeropoints)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    }
})
let zeropoints = 0
let totalpointscounter = 0
let player_number = 0
let progress = input.lightLevel()
basic.showString("Guess the Quote Click AB To Start")
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.showNumber(totalpointscounter)
    }
})
