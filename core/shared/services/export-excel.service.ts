import { BadRequestException } from '@nestjs/common';
import { Workbook } from 'exceljs';

export async function exportExcel(data :any[],key?:string[]) {
  if(data.length ==0){
    throw new BadRequestException('Data not found')
  }
  const book = new Workbook(); // creating workbook
  const sheet = book.addWorksheet('sheet1');
  const keyList =key?key: Object.keys(data[0])
  sheet.addRow([...keyList]);
  data.forEach((el) => {
    const keys = Object.keys(el)
    const values:any[] = []
    keys.forEach(en=>{
      values.push(el[en])
    })
    sheet.addRow([...values]);
  });
  const fileBuffer = await book.xlsx.writeBuffer();

  const base64 = Buffer.from(fileBuffer).toString('base64');
  return { data: base64 };
}
