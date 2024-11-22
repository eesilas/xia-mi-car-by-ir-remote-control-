xiamiBoard.IR_callbackUser(function (irvar) {
    if (irvar == 1) {
        led.toggle(2, 0)
    } else if (irvar == 6) {
        led.toggle(4, 2)
    } else if (irvar == 9) {
        led.toggle(2, 4)
    } else if (irvar == 4) {
        led.toggle(0, 2)
    } else {
        led.toggle(2, 2)
    }
})
let irvar = 0
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    irvar = xiamiBoard.IR_read()
})
