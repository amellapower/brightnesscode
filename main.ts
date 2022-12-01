let range: neopixel.Strip = null
let strip: neopixel.Strip = null
let number = 0
basic.clearScreen()
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 1) {
        number = 1
    } else if (pins.digitalReadPin(DigitalPin.P9) == 1) {
        number = 2
    } else if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        number = 3
    }
    basic.clearScreen()
    if (number == 1) {
        strip = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
        range = strip.range(0, 4)
        strip.showColor(neopixel.hsl(255, 255, 100))
    } else if (number == 2) {
        strip = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
        range = strip.range(5, 8)
        strip.showColor(neopixel.hsl(255, 255, 50))
    } else if (number == 3) {
        strip = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
        range = strip.range(9, 10)
        strip.showColor(neopixel.hsl(255, 255, 30))
    }
})
