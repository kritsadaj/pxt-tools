//% weight=0 color=#00ff00 icon="\uf2a2" block="Encoder"
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
    *  ทดสอบ Encoder
    */
    //% blockId="encoder" block="Encoder %Cnt"
    //% blockGap=2 weight=1
    export function Encoder2(Cnt: number): void {
        let x=0
        while(x<Cnt){
            while(pins.digitalReadPin(DigitalPin.P8==0){}
            x +=1
            while(pins.digitalReadPin(DigitalPin.P8==1){}
            x +=1
        }
    }
}
