/**
 * Control micro Joystick
 */
//% color="#808080" weight=23 icon="\uf0b2" blockGap=8
//% blockId="Joystick" block="摇杆模块"
namespace Joystick {

    export enum enRocker {
        //% blockId="Nostate" block="无"
        Nostate = 0,
        //% blockId="Up" block="上"
        Up,
        //% blockId="Down" block="下"
        Down,
        //% blockId="Left" block="左"
        Left,
        //% blockId="Right" block="右"
        Right,
        //% blockId="Press" block="按下"
        Press
    }

    //% blockId=cbit_Rocker block="遥杆|引脚 VRX %pin1|引脚 VRY %pin2|引脚 SW %pin3|返回 %value"
    //% weight=100
    //% blockGap=10
    //% color="#808080"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value: enRocker): boolean {

        //pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.analogReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x <= 20) // 上
        {

            now_state = enRocker.Up;

        }
        if (x >= 1000) //
        {

            now_state = enRocker.Down;
        }
        if (y <= 50) //右
        {
            now_state = enRocker.Right;
        }
        if (y >= 1000) //左
        {
            now_state = enRocker.Left;
        }
        if (z <= 20)
            now_state = enRocker.Press;

        if (now_state == value)
            return true;
        else
            return false;

    }
}