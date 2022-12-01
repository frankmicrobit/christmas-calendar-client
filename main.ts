function showQuestion () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString(Question)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("?")
}
input.onButtonPressed(Button.A, function () {
    testAnswer(0)
})
function testAnswer (Answer: number) {
    radio.sendValue("Answer", Answer)
    if (Fasit == Answer) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.pause(2000)
    DisplayDayNumber(Today + 0)
}
radio.onReceivedString(function (receivedString) {
    if (IsNewDay) {
        QuestionPart = receivedString
        Question = "" + Question + receivedString
        if (Question.length == QuestionLength) {
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            DisplayDayNumber(Today)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    testAnswer(1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Today") {
        if (Today != value) {
            Today = value
            DisplayDayNumber(Today)
            IsNewDay = true
        }
    }
    if (name == "Length") {
        if (IsNewDay) {
            QuestionLength = value
            Question = ""
        }
    }
    if (name == "Fasit") {
        if (IsNewDay) {
            IsNewDay = false
            Fasit = value
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
let QuestionLength = 0
let QuestionPart = ""
let Fasit = 0
let Question = ""
let IsNewDay = false
let Today = 0
radio.setGroup(24)
led.setBrightness(50)
Today = 0
IsNewDay = false
