//% weight=1 color=#ff0000 icon="\uf5d1" block="Encoder"
namespace encoder {
    /**
    *  ทดสอบ Encoder
    */
    //% blockId="encoders" block="Encoder %Cnt"
    //% blockGap=2 weight=1
    export function encoders(Cnt: number): void {
        let x=0
        while(x<Cnt){
            while(pins.digitalReadPin(DigitalPin.P8)==0){}
            x=x+1
            while(pins.digitalReadPin(DigitalPin.P8)==1){}
            x=x+1
        }
    }
}
