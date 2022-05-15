led.plot(2, 2)
let _ = 0
let _2 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        _ += 1
    }
    if (input.buttonIsPressed(Button.B)) {
        _2 += 1
    }
})
