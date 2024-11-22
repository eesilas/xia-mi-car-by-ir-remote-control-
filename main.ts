xiamiBoard.IR_callbackUser(function (irvar) {
    if (irvar == 1) {
        irmode = 1
        led.toggle(2, 0)
    } else if (irvar == 6) {
        irmode = 2
        led.toggle(4, 2)
    } else if (irvar == 9) {
        irmode = 3
        led.toggle(2, 4)
    } else if (irvar == 4) {
        irmode = 4
        led.toggle(0, 2)
    } else {
        led.toggle(2, 2)
    }
})
let irvar = 0
let irmode = 0
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
let speedv = 120
basic.forever(function () {
    irvar = xiamiBoard.IR_read()
    if (irmode == 1) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, speedv)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, speedv)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, speedv)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, speedv)
    } else if (irmode == 2) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, speedv)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, speedv / 3)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, speedv / 3)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, speedv)
    } else if (irmode == 3) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, speedv)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, speedv)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CCW, speedv)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CW, speedv)
    } else if (irmode == 4) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, speedv / 3)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, speedv)
        xiamiBoard.motorRun(MOTOR.M3, DIRECTION.CW, speedv)
        xiamiBoard.motorRun(MOTOR.M4, DIRECTION.CCW, speedv / 3)
    } else {
        led.toggle(2, 2)
    }
})
