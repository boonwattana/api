export function getLabelEnum(enumOption:any[], title: any): any {
    return enumOption.find(fn=>fn.value == title)?.label
  }
 export function onlyUnique(value:any, index:any, self:any) {
    return self.indexOf(value) === index;
  }
  export function getStatusLabel(sumValue: number): any {
    if(sumValue>0){
     return 'เสร็จสิ้น'
    }
    return 'ไม่เสร็จสิ้น'
 }
 export function  getStatusLabelDepress(sumValue: number): any {
  if(sumValue>=0){
   return 'เสร็จสิ้น'
  }
  return 'ไม่เสร็จสิ้น'
}
 export function getDateLabel(date:Date){
    if(date){
      return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()+543}`
    }
    return ''
 }