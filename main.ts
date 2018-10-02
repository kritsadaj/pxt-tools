//% weight=0 color=#ff0000 icon="\uf2a2" block="Encoder"
namespace Encoder {
    /**
    * คำนวณพื้นที่สี่เหลี่ยม，มีการคืนค่า
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * คำนวณพื้นที่สี่เหลี่ยม，ไม่คืนค่า，แสดงผลที่ LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
    /**
    * 
    */
    //% blockId="encoderStart" block="Encoder %Value"
    //% blockGap=2 weight=1
    export function encoderStart(Value: number): void {
        let Cnt = 0
        pins.setEvents(DigitalPin.P8, PinEventType.Edge)
        control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_FALL, () => {
        Cnt += 1
    })   
        control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_RISE, () => {
        Cnt += 1
    })  
    }
}
