radio.onReceivedNumber(function (receivedNumber) {
    Facit = receivedNumber
})
function showQuestion () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showString(Question)
    basic.pause(500)
    basic.showString("?")
}
input.onButtonPressed(Button.A, function () {
    testAnswer(0)
})
function testAnswer (Answer: number) {
    radio.sendValue("Answer", Answer)
    if (Facit == Answer) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.showString("Riktig")
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.showString("Feil")
    }
    basic.pause(2000)
    DisplayDayNumber(Today + 0)
}
radio.onReceivedString(function (receivedString) {
    Question = receivedString
})
input.onButtonPressed(Button.B, function () {
    testAnswer(1)
})
input.onGesture(Gesture.Shake, function () {
    showQuestion()
})
radio.onReceivedValue(function (name, value) {
    if (name == "Today") {
        if (Today != value) {
            Today = value
            DisplayDayNumber(Today)
        }
    }
})
function DisplayDayNumber (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (num == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (num == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (num == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
    if (num == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (num == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (num == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 16) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (num == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (num == 20) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (num == 21) {
        basic.showLeds(`
            # # . . #
            . # . # #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    }
    if (num == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    }
    if (num == 24) {
        basic.showLeds(`
            # # . # .
            . # . # .
            # # . # #
            # . . . #
            # # . . #
            `)
    }
    if (num == 25) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #
            `)
    }
    if (num == 26) {
        basic.showLeds(`
            # # . # .
            . # . # .
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (num == 27) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 28) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . . #
            # . . # #
            # # . # #
            `)
    }
    if (num == 29) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 30) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            . # . # #
            # # . # #
            `)
    }
    if (num == 31) {
        basic.showLeds(`
            # # . . #
            . # . # #
            # # . . #
            . # . . #
            # # . . #
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    showQuestion()
})
let Today = 0
let Question = ""
let Facit = 0
radio.setGroup(24)
led.setBrightness(50)
