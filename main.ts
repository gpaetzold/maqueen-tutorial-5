let s = false
let u = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    u = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (u < 20 && u != 0) {
        s = Math.randomBoolean()
        if (s == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 63)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 63)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(500)
        }
        if (s == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 63)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 63)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 127)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
})
