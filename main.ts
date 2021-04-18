let distance = 0
DFRobotMaqueenPluss.I2CInit()
DFRobotMaqueenPluss.PID(PID.OFF)
basic.forever(function () {
    distance = DFRobotMaqueenPluss.ultraSonic(PIN.P1, PIN.P2)
    if (distance == 0) {
        distance = 1000
    } else if (distance < 20) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (distance < 100) {
        basic.pause(distance * 8)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
})
basic.forever(function () {
    if (distance < 20) {
        DFRobotMaqueenPluss.mototStop(Motors.ALL)
        basic.pause(250)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L3) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CCW, 40)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 40)
        basic.pause(100)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R3) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CCW, 40)
        basic.pause(100)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L2) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CCW, 70)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 100)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R2) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 100)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CCW, 70)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 120)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 70)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 100)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 100)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 70)
    } else {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CCW, 60)
    }
})
