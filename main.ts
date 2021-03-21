DFRobotMaqueenPluss.I2CInit()
DFRobotMaqueenPluss.PID(PID.OFF)
basic.forever(function () {
    if (DFRobotMaqueenPluss.readPatrol(Patrol.L3) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CCW, 40)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 80)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R3) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 80)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CCW, 40)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L2) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 0)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 80)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R2) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 80)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 0)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CW, 100)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.L1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 80)
    } else if (DFRobotMaqueenPluss.readPatrol(Patrol.R1) == 1) {
        DFRobotMaqueenPluss.mototRun(Motors.M1, Dir.CW, 80)
        DFRobotMaqueenPluss.mototRun(Motors.M2, Dir.CW, 40)
    } else {
        DFRobotMaqueenPluss.mototRun(Motors.ALL, Dir.CCW, 50)
    }
})
