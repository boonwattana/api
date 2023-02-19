export function getDepressionLabel(v3: any) {
    if(v3 == null ){
        return 'ไม่มี'
    }else{
        if(v3 <7){
            return 'ไม่มี'
        }
        if(v3 >=7 && v3<=12){
            return 'ระดับน้อย'
        }
        if(v3 >=13 && v3<=18){
            return 'ระดับปานกลาง'
        }
        if(v3 >=19){
            return 'ระดับรุนแรง'
        }
    }

}
export function getSucuidLabel(v3: any) {
    if(v3 == null ){
        return 'ไม่มี'
    }else{
        if(v3 ==0){
            return 'ไม่มี'
        }
        if(v3 >=1 && v3<=8){
            return 'ระดับน้อย'
        }
        if(v3 >=9 && v3<=16){
            return 'ระดับปานกลาง'
        }
        if(v3 >=17){
            return 'ระดับรุนแรง'
        }
    }
}