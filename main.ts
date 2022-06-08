let vitesse = randint(50, 100)
let tournante = randint(1, 4)
basic.showNumber(tournante)
basic.forever(function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
})
basic.forever(function () {
    while (Tinybit.Ultrasonic_Car() >= 20) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, vitesse)
    }
})
basic.forever(function () {
    if (Tinybit.Ultrasonic_Car() <= 20) {
        if (tournante == 1) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, vitesse)
        } else if (tournante == 2) {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, vitesse)
        } else if (tournante == 3) {
            music.playTone(262, music.beat(BeatFraction.Half))
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, vitesse)
        } else {
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
        }
    }
})
loops.everyInterval(5000, function () {
    tournante = randint(1, 4)
    basic.showNumber(tournante)
})
