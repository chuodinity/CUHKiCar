function TurnLeft () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 60)
}
function FaceFollowingMode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        xcenter = huskylens.readeBox(1, Content1.xCenter)
        if (xcenter < 80) {
            TurnLeft()
        }
        if (xcenter >= 80 && xcenter <= 240) {
            MoveForward()
        }
        if (xcenter > 240) {
            TurnRight()
        }
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
}
function TurnRight () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
}
function MoveForward () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 60)
}
let xcenter = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    FaceFollowingMode()
})
