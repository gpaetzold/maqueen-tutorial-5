let u = 0
let s = false
basic.forever(function () {
    u = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (u < 30 && u != 0) {
        s = Math.randomBoolean()
        if (s == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 127)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 127)
            basic.pause(500)
        }
        if (s == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 127)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 127)
            basic.pause(500)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
