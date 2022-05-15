input.onButtonPressed(Button.A, function () {
    _ += -1
})
input.onButtonPressed(Button.B, function () {
    _2 += 1
})
let _ = 2
let _2 = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(_, 2)
    basic.clearScreen()
    led.plot(_2, 2)
})
basic.forever(function () {
    if (_ == 4) {
        basic.showArrow(ArrowNames.West)
    }
    if (_2 == 0) {
        basic.showArrow(ArrowNames.East)
    }
})
