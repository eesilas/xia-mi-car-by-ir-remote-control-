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
basic.forever(function () {
    irvar = xiamiBoard.IR_read()
    if (irmode == 1) {
    	
    } else if (irmode == 2) {
    	
    } else if (irmode == 3) {
    	
    } else if (irmode == 4) {
    	
    } else {
    	
    }
})
