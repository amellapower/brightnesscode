let number = 0
let strip = neopixel.create(DigitalPin.P13, 48, NeoPixelMode.RGB)
let range = strip.range(0, 48)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        number = 1
    } else if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        number = 2
    } else if (pins.digitalReadPin(DigitalPin.P10) == 1) {
        number = 3
    }
    if (number == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
        strip.setBrightness(255)
        strip.show()
    } else if (number == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.setBrightness(100)
        strip.show()
    } else if (number == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        strip.setBrightness(5)
        strip.show()
    }
})
