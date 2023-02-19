import { CssTemplate, RemarkTemplate } from "./html-report-template"
import { logoImage } from "./libs/assert/image-data"

export interface HeaderDetailModel{
    referenceNumber:string
    date:string
    companyName:string
    address:string
    contractPersonName:string
    title:string
    telephone:string
    fax:string
    email:string
    category:string
    remark:string
    store:string
}
export interface TypeOfFeeTable{
    typeOfFee:string
    accountCode:string
    salesPlan:string
    period:string
    description:string
    amount:number
    totalBath:number
}
export interface SignModel{
    name:string
    position:string
    company:string
    date:string
}
export interface ScanoutModel{
    product:string
    store:string
    salesPlan:string
    mechanic:string
    quantity:number
    compensate:number
    commission:number
    pickpack:number
    amount:number
}
export class HtmlScanoutReportModel{
    private htmlPaper:string = ''
    constructor(){
        this.htmlPaper += this.openTagHtml()
        this.htmlPaper += this.addStyle()
        this.htmlPaper += this.openTagBody()


        this.htmlPaper += this.addRemarkPage()
        
        this.htmlPaper += this.closeTagBody()
        this.htmlPaper += this.closeTagHtml()
    }
    getHtmlPaper(){
      return this.htmlPaper
    }
 private addBodyPage(header: HeaderDetailModel,scanouts: ScanoutModel[],isOnline:boolean) {
    let  bodyPage = '    <div class="a4">'
    bodyPage += this.getHeader()
    bodyPage += this.getScanOutHeader(header)
    bodyPage += this.getScanOut(scanouts,isOnline)

    bodyPage += `    </div>`
    return bodyPage
  }
  private getScanOutHeader(header: HeaderDetailModel) {
    const scanOutHeader = `  <div class="reportDetail">
    <div class="detail">
      <p>Reference Number: </p>
      <p class="column2 column2-a">${header.referenceNumber}</p>
      <p class="column5">Date: </p>
      <p class="column6">${header.date}</p>
    </div>
  </div>`
  return scanOutHeader
  }
  private getScanOut(scanouts: ScanoutModel[],isOnline:boolean) {
    if(!scanouts){
      return ''
    }
    if(!isOnline){
      return this.getScanOutOffline(scanouts,isOnline)
    }
    let sumQuantity = 0
    let sumCompensate = 0
    let sumCommission = 0
    let sumPickpack = 0
    let sumAmount = 0
    let scanOutTable = `  <div class="tableList" >
    <p class="tableTitle-b">Scanout By Product</p>
    <div class="tableRow header-b">
      <div class="tableColumn center box-b1"><p>Product</p> </div>
      <div class="tableColumn center box-b2"><p>Store</p></div>
      <div class="tableColumn center box-b3"><p>Sales Plan</p></div>
      <div class="tableColumn center box-b4"><p>Quantity (Unit)</p></div>
      <div class="tableColumn center box-b5"><p>Compensate (Bath)</p></div>
      <div class="tableColumn center box-b6"><p>Commission (Bath)</p></div>
      <div class="tableColumn center box-b7"><p>Pickpack (Bath)</p></div>
      <div class="tableColumn center box-b8"><p>Amount (Bath)</p></div>
    </div>
    `
scanouts.forEach(el=>{
  const quantityTxt = this.getAmountFormat(el.quantity)
  const compensateTxt = this.getAmountFormat(el.compensate)
  const commissionTxt = this.getAmountFormat(el.commission)
  const pickpackTxt = this.getAmountFormat(el.pickpack)
  const amountTxt = this.getAmountFormat(el.amount)
  sumQuantity += el.quantity
  sumCompensate += el.compensate
  sumCommission += el.commission
  sumPickpack += el.pickpack
  sumAmount += el.amount
  scanOutTable+=`    <div class="tableRow tablBody">
  <div class="tableColumn left box-b1"><p>${el.product}</p> </div>
  <div class="tableColumn left box-b2"><p>${el.store}</p></div>
  <div class="tableColumn left box-b3"><p>${el.salesPlan}</p></div>
  <div class="tableColumn right box-b4"><p>${quantityTxt}</p></div>
  <div class="tableColumn right box-b5"><p>${compensateTxt}</p></div>
  <div class="tableColumn right box-b6"><p>${commissionTxt}</p></div>
  <div class="tableColumn right box-b7"><p>${pickpackTxt}</p></div>
  <div class="tableColumn right box-b8"><p>${amountTxt}</p></div>
</div>`
})
const sumQuantityTxt = this.getAmountFormat(sumQuantity)
const sumCompensateTxt = this.getAmountFormat(sumCompensate)
const sumCommissionTxt = this.getAmountFormat(sumCommission)
const sumPickpackTxt = this.getAmountFormat(sumPickpack)
const sumAmountTxt = this.getAmountFormat(sumAmount)
  scanOutTable += `    <div class="tableRow tableFooter">
  <div class="tableColumn right box-b1"><p></p> </div>
  <div class="tableColumn right box-b2"><p></p></div>
  <div class="tableColumn right box-b3"><p>Total</p></div>
  <div class="tableColumn right box-b4"><p>${sumQuantityTxt}</p></div>
  <div class="tableColumn right box-b5"><p>${sumCompensateTxt}</p></div>
  <div class="tableColumn right box-b6"><p>${sumCommissionTxt}</p></div>
  <div class="tableColumn right box-b7"><p>${sumPickpackTxt}</p></div>
  <div class="tableColumn right box-b8"><p>${sumAmountTxt}</p></div>
</div>
</div>`
return scanOutTable
  }
  getScanOutOffline(scanouts: ScanoutModel[], isOnline: boolean) {
    let sumQuantity = 0
    let sumCompensate = 0
    let sumAmount = 0
    let scanOutTable = `  <div class="tableList" >
    <p class="tableTitle-b">Scanout By Product</p>
    <div class="tableRow header-b">
      <div class="tableColumn center box-b1-o"><p>Product</p> </div>
      <div class="tableColumn center box-b2-o"><p>Sales Plan</p></div>
      <div class="tableColumn center box-b3-o"><p>Mechanic</p></div>
      <div class="tableColumn center box-b4-o"><p>Compensate (Bath)</p></div>
      <div class="tableColumn center box-b5-o"><p>Quantity (Bath)</p></div>
      <div class="tableColumn center box-b6-o"><p>Amount (Bath)</p></div>
    </div>
    `
scanouts.forEach(el=>{
  const quantityTxt = this.getAmountFormat(el.quantity)
  const compensateTxt = this.getAmountFormat(el.compensate)
  const amountTxt = this.getAmountFormat(el.amount)
  sumQuantity += el.quantity
  sumCompensate += el.compensate
  sumAmount += el.amount
  scanOutTable+=`    <div class="tableRow tablBody">
  <div class="tableColumn left box-b1-o"><p>${el.product}</p> </div>
  <div class="tableColumn left box-b2-o"><p>${el.salesPlan}</p></div>
  <div class="tableColumn left box-b3-o"><p>${el.mechanic}</p></div>
  <div class="tableColumn right box-b4-o"><p>${compensateTxt}</p></div>
  <div class="tableColumn right box-b5-o"><p>${quantityTxt}</p></div>
  <div class="tableColumn right box-b6-o"><p>${amountTxt}</p></div>
</div>`
})
const sumQuantityTxt = this.getAmountFormat(sumQuantity)

const sumAmountTxt = this.getAmountFormat(sumAmount)
  scanOutTable += `    <div class="tableRow tableFooter">
  <div class="tableColumn right box-b1-o"><p></p> </div>
  <div class="tableColumn right box-b2-o"><p></p></div>
  <div class="tableColumn right box-b3-o"><p></p></div>
  <div class="tableColumn right box-b4-o"><p>Total</p></div>
  <div class="tableColumn right box-b5-o"><p>${sumQuantityTxt}</p></div>
  <div class="tableColumn right box-b6-o"><p>${sumAmountTxt}</p></div>
</div>
</div>`
return scanOutTable
  }
  private getAmountFormat(quantity: number) {
    if(quantity>=0){
      const fixed = ((+quantity).toLocaleString("en",{useGrouping: true,minimumFractionDigits: 2}))
      console.log(fixed);
      return fixed
      
    }else{
      return '-'
    }
   
  }
   private addMemoPage(header: HeaderDetailModel, typeTable: TypeOfFeeTable[], signsModel: SignModel[],isOnline:boolean):string {
        let  memoPage = '    <div class="a4">'
        memoPage += this.getHeader()
        memoPage += this.getHeaderDetail(header,isOnline)
        memoPage += this.getFundingTypeTablePage2(typeTable,header.remark,0,10)
        // if(typeTable.length<13){
        //   memoPage += this.getFundingTypeTablePage2(typeTable,header.remark,12)
        //   memoPage += this.getFundingTypeTable(typeTable,header.remark)
        //   // memoPage += this.getFundingTypeTablePage1(typeTable,header.remark,12)
        // }else{
        //   memoPage += this.getFundingTypeTable(typeTable,header.remark)
        // }
        memoPage += this.getSign(signsModel)
        memoPage += `    </div>`
        if(typeTable.length>10){
          for(let i = 10;i<typeTable.length;i+=16){
            memoPage += '    <div class="a4">'
            memoPage += this.getHeader()
            memoPage += this.getScanOutHeader(header)
            memoPage += this.getFundingTypeTablePage2(typeTable,header.remark,i,(i+16))
            // memoPage += this.getSign(signsModel)
            memoPage += `    </div>`
          }

        }
        return memoPage
    }
    private  getSign(signsModel: SignModel[]) {
    switch (signsModel.length){
      case 2:
        return this.getApproveTwoStep(signsModel)
        case 3:
        return this.getApproveThreeStep(signsModel)
        case 4:
        return this.getApproveFourStep(signsModel)
        default:
          return ''
    }
      
    
  }
  private  getApproveTwoStep(signsModel: SignModel[]) {
    const approve = `  <div class="sigenature">
    <div class="sign" >
      <p class="signName">${signsModel[0]?.name}</p>
      <pre class="signNameDesc">(${signsModel[0]?.name})</pre>
      <p class="signNameDetail">${signsModel[0]?.position}</p>
      <p class="signNameDetail">${signsModel[0]?.company}</p>
      <p class="signNameDetail">${signsModel[0]?.date}</p>
    </div>
    <div class="sign" >
      <p class="signName">${signsModel[1]?.name}</p>
      <pre class="signNameDesc">(${signsModel[1]?.name})</pre>
      <p class="signNameDetail">${signsModel[1]?.position}</p>
      <p class="signNameDetail">${signsModel[1]?.company}</p>
      <p class="signNameDetail">${signsModel[1]?.date}</p>
    </div>
    <div class="sign" >
      <p class=" signName"></p>
      <pre class="signNameDesc">(                                                       )</pre>
      <p class="signNameDetail">Title __________________________</p>
      <p class="signNameDetail">Supplier</p>
      <p class="signNameDetail">Date ____________________</p>
    </div>
  </div>`
  return approve
  }
  private  getApproveThreeStep(signsModel: SignModel[]) {
    const approve = `<div class="sigenature">
    <div class="sign" >
      <p class="signName">${signsModel[0]?.name}</p>
      <pre class="signNameDesc">(${signsModel[0]?.name})</pre>
      <p class="signNameDetail">${signsModel[0]?.position}</p>
      <p class="signNameDetail">${signsModel[0]?.company}</p>
      <p class="signNameDetail">${signsModel[0]?.date}</p>
    </div>
    <div class="sign" >
      <p class="signName">${signsModel[1]?.name}</p>
      <pre class="signNameDesc">(${signsModel[1]?.name})</pre>
      <p class="signNameDetail">${signsModel[1]?.position}</p>
      <p class="signNameDetail">${signsModel[1]?.company}</p>
      <p class="signNameDetail">${signsModel[1]?.date}</p>
    </div>
    <div class="sign" >
      <p class=" signName"></p>
      <pre class="signNameDesc">(                                                       )</pre>
      <p class="signNameDetail">Title __________________________</p>
      <p class="signNameDetail">Supplier</p>
      <p class="signNameDetail">Date ____________________</p>
    </div>
  </div>
  <div class="sigenature2">
    <div class="sign" >
      <p class="signName">${signsModel[2]?.name}</p>
      <pre class="signNameDesc">(${signsModel[2]?.name})</pre>
      <p class="signNameDetail">${signsModel[2]?.position}</p>
      <p class="signNameDetail">${signsModel[2]?.company}</p>
      <p class="signNameDetail">${signsModel[2]?.date}</p>
    </div>
  </div>`
  return approve
  }
  private   getApproveFourStep(signsModel: SignModel[]) {
    const approve = `<div class="sigenature">
    <div class="sign" >
      <p class="signName">${signsModel[0]?.name}</p>
      <pre class="signNameDesc">(${signsModel[0]?.name})</pre>
      <p class="signNameDetail">${signsModel[0]?.position}</p>
      <p class="signNameDetail">${signsModel[0]?.company}</p>
      <p class="signNameDetail">${signsModel[0]?.date}</p>
    </div>
    <div class="sign" >
      <p class="signName">${signsModel[1]?.name}</p>
      <pre class="signNameDesc">(${signsModel[1]?.name})</pre>
      <p class="signNameDetail">${signsModel[1]?.position}</p>
      <p class="signNameDetail">${signsModel[1]?.company}</p>
      <p class="signNameDetail">${signsModel[1]?.date}</p>
    </div>
    <div class="sign" >
      <p class=" signName"></p>
      <pre class="signNameDesc">(                                                       )</pre>
      <p class="signNameDetail">Title __________________________</p>
      <p class="signNameDetail">Supplier</p>
      <p class="signNameDetail">Date ____________________</p>
    </div>
  </div>
  <div class="sigenature2">
    <div class="sign" >
      <p class="signName">${signsModel[2]?.name}</p>
      <pre class="signNameDesc">(${signsModel[2]?.name})</pre>
      <p class="signNameDetail">${signsModel[2]?.position}</p>
      <p class="signNameDetail">${signsModel[2]?.company}</p>
      <p class="signNameDetail">${signsModel[2]?.date}</p>
    </div>
    <div class="sign" >
      <p class="signName">${signsModel[3]?.name}</p>
      <pre class="signNameDesc">(${signsModel[3]?.name})</pre>
      <p class="signNameDetail">${signsModel[3]?.position}</p>
      <p class="signNameDetail">${signsModel[3]?.company}</p>
      <p class="signNameDetail">${signsModel[3]?.date}</p>
    </div>

  </div>`
  return approve
  }
  private  getFundingTypeTable(typeTable: TypeOfFeeTable[],remark:string):string {
        let sumIncrudeVat = 0
        let sumExcrudeVat = 0
        let sumVat = 0
        let tableFundingType: string = ''
        tableFundingType += `    <div class="tableList" >
        <p class="tableTitle">Type of fee supplier agree to pay:</p>`

        tableFundingType += `      <div class="tableRow header">
        <div class="tableColumn center box1"><p>Type Of Fee </p> </div>
        <div class="tableColumn center box2"><p>Account Code</p></div>
        <div class="tableColumn center box3"><p>Sales Plan</p></div>
        <div class="tableColumn center box4"><p>Period</p></div>
        <div class="tableColumn center box5"><p>Description</p></div>
        <div class="tableColumn center box6"><p>Amount</p></div>
      </div>`
        typeTable.forEach(el => {
          sumExcrudeVat += el.amount
          sumIncrudeVat += el.totalBath
          sumVat += (el.totalBath-el.amount)
            tableFundingType += `      <div class="tableRow tablBody">
            <div class="tableColumn box1 left"><p>${el.typeOfFee}</p> </div>
            <div class="tableColumn box2 left"><p>${el.accountCode}</p></div>
            <div class="tableColumn box3 left"><p>${el.salesPlan}</p></div>
            <div class="tableColumn box4 left"><p>${el.period}</p></div>
            <div class="tableColumn box5 left"><p>${el.description}</p></div>
            <div class="tableColumn box6 right"><p>${this.getAmountFormat(el.amount) }</p></div>
          </div>`
        });
        const sumExcrudeVatTxt = this.getAmountFormat(sumExcrudeVat)
        const sumVatTxt = this.getAmountFormat(sumVat)
        const sumIncrudeVatTxt = this.getAmountFormat(sumIncrudeVat)
        tableFundingType += `
      <div class="tableRow tableFooter">
        <div class="tableColumn box1 left empty"><p></p> </div>
        <div class="tableColumn box2 left empty"><p></p></div>
        <div class="tableColumn box3 left empty"><p></p></div>
        <div class="tableColumn box4 left empty"><p></p></div>
        <div class="tableColumn box5 right footer"><p>Total Excluded VAT: </p></div>
        <div class="tableColumn box6 right"><p>${sumExcrudeVatTxt}</p></div>
      </div>
      <div class="tableRow tableFooter">
        <div class="tableColumn box1 left empty"><p></p> </div>
        <div class="tableColumn box2 left  empty"><p></p></div>
        <div class="tableColumn box3 left  empty"><p></p></div>
        <div class="tableColumn box4 left empty"><p></p></div>
        <div class="tableColumn box5 right footer"><p>VAT: </p></div>
        <div class="tableColumn box6 right"><p>${sumVatTxt}</p></div>
      </div>
      <div class="tableRow tableFooter">
        <div class="tableColumn box1 left empty"><p></p> </div>
        <div class="tableColumn box2 left empty"><p></p></div>
        <div class="tableColumn box3 left  empty"><p></p></div>
        <div class="tableColumn box4 left empty"><p></p></div>
        <div class="tableColumn box5 right footer"><p>Total Included VAT:</p></div>
        <div class="tableColumn box6 right"><p>${sumIncrudeVatTxt}</p></div>
      </div>
      <div class="remark-top-table">
        <span >
        ${remark?remark:''}
        </span>
      </div>
      `

        tableFundingType += `    </div>`
        return tableFundingType
    }
    private  getFundingTypeTablePage2(typeTable: TypeOfFeeTable[],remark:string,indexStart:number,indexEnd:number):string {
      let sumIncrudeVat = 0
      let sumExcrudeVat = 0
      let sumVat = 0
      let tableFundingType: string = ''
      tableFundingType += `    <div class="tableList" >
      <p class="tableTitle">Type of fee supplier agree to pay:</p>`

      tableFundingType += `      <div class="tableRow header">
      <div class="tableColumn center box1"><p>Type Of Fee </p> </div>
      <div class="tableColumn center box2"><p>Account Code</p></div>
      <div class="tableColumn center box3"><p>Sales Plan</p></div>
      <div class="tableColumn center box4"><p>Period</p></div>
      <div class="tableColumn center box5"><p>Description</p></div>
      <div class="tableColumn center box6"><p>Amount</p></div>
    </div>`
      typeTable.forEach((el,index) => {
        sumExcrudeVat += el.amount
        sumIncrudeVat += el.totalBath
        sumVat += (el.totalBath-el.amount)
        if(index>=indexStart&&index<indexEnd){
          tableFundingType += `      <div class="tableRow tablBody">
          <div class="tableColumn box1 left"><p>${el.typeOfFee}</p> </div>
          <div class="tableColumn box2 left"><p>${el.accountCode}</p></div>
          <div class="tableColumn box3 left"><p>${el.salesPlan}</p></div>
          <div class="tableColumn box4 left"><p>${el.period}</p></div>
          <div class="tableColumn box5 left"><p>${el.description}</p></div>
          <div class="tableColumn box6 right"><p>${this.getAmountFormat(el.amount) }</p></div>
        </div>`
        }

      });
      const sumExcrudeVatTxt = this.getAmountFormat(sumExcrudeVat)
      const sumVatTxt = this.getAmountFormat(sumVat)
      const sumIncrudeVatTxt = this.getAmountFormat(sumIncrudeVat)
      if((indexEnd+1)>typeTable.length){
        tableFundingType += `
        <div class="tableRow tableFooter">
          <div class="tableColumn box1 left empty"><p></p> </div>
          <div class="tableColumn box2 left empty"><p></p></div>
          <div class="tableColumn box3 left empty"><p></p></div>
          <div class="tableColumn box4 left empty"><p></p></div>
          <div class="tableColumn box5 right footer"><p>Total Excluded VAT: </p></div>
          <div class="tableColumn box6 right"><p>${sumExcrudeVatTxt}</p></div>
        </div>
        <div class="tableRow tableFooter">
          <div class="tableColumn box1 left empty"><p></p> </div>
          <div class="tableColumn box2 left  empty"><p></p></div>
          <div class="tableColumn box3 left  empty"><p></p></div>
          <div class="tableColumn box4 left empty"><p></p></div>
          <div class="tableColumn box5 right footer"><p>VAT: </p></div>
          <div class="tableColumn box6 right"><p>${sumVatTxt}</p></div>
        </div>
        <div class="tableRow tableFooter">
          <div class="tableColumn box1 left empty"><p></p> </div>
          <div class="tableColumn box2 left empty"><p></p></div>
          <div class="tableColumn box3 left  empty"><p></p></div>
          <div class="tableColumn box4 left empty"><p></p></div>
          <div class="tableColumn box5 right footer"><p>Total Included VAT:</p></div>
          <div class="tableColumn box6 right"><p>${sumIncrudeVatTxt}</p></div>
        </div>
        <div class="remark-top-table">
          <span class="paragrap-remark" >
          ${remark?remark:''}
          </span>
        </div>
        `
      }
     

      tableFundingType += `    </div>`
      return tableFundingType
  }
    private  getFundingTypeTablePage1(typeTable: TypeOfFeeTable[],remark:string,indexCount:number):string {

      let tableFundingType: string = ''
      tableFundingType += `    <div class="tableList" >
      <p class="tableTitle">Type of fee supplier agree to pay:</p>`

      tableFundingType += `      <div class="tableRow header">
      <div class="tableColumn center box1"><p>Type Of Fee </p> </div>
      <div class="tableColumn center box2"><p>Account Code</p></div>
      <div class="tableColumn center box3"><p>Sales Plan</p></div>
      <div class="tableColumn center box4"><p>Period</p></div>
      <div class="tableColumn center box5"><p>Description</p></div>
      <div class="tableColumn center box6"><p>Amount</p></div>
    </div>`
      typeTable.forEach((el,index) => {
        if(index<=indexCount)
          tableFundingType += `      <div class="tableRow tablBody">
          <div class="tableColumn box1 left"><p>${el.typeOfFee}</p> </div>
          <div class="tableColumn box2 left"><p>${el.accountCode}</p></div>
          <div class="tableColumn box3 left"><p>${el.salesPlan}</p></div>
          <div class="tableColumn box4 left"><p>${el.period}</p></div>
          <div class="tableColumn box5 left"><p>${el.description}</p></div>
          <div class="tableColumn box6 right"><p>${this.getAmountFormat(el.amount) }</p></div>
        </div>`
      });
     

      tableFundingType += `    </div>`
      return tableFundingType
  }
    private   getHeaderDetail(header: HeaderDetailModel,isOnline:boolean):string {
      let emailSection = ``
      if(header.email?.length >23){
        emailSection= `        <div class="detail">
        <p>Telephone: </p>
        <p class="column2 column2-e">${header.telephone?header.telephone:'-'}</p>
        <p class="column3">Fax: </p>
        <p class="column4">${header.fax?header.fax:'-'}</p>
      </div>        
      <div class="detail">
        <p>Email: </p>
        <p class="column2 column2-e-2">${header.email?header?.email?.substring(0,80):'-'}</p>
      </div>`
      }else{
     
      emailSection= `        <div class="detail">
      <p>Telephone: </p>
      <p class="column2 column2-e">${header.telephone?header.telephone:'-'}</p>
      <p class="column3">Fax: </p>
      <p class="column4">${header.fax?header.fax:'-'}</p>
      <p class="column5">Email:</p>
      <p class="column6">${header.email?header?.email?.substring(0,23):'-'}</p>
    </div>`
      }
      if(isOnline){
        return `   <div class="reportDetail">
        <div class="detail">
          <p>Reference Number: </p>
          <p class="column2 column2-a">${header.referenceNumber}</p>
          <p class="column5">Date: </p>
          <p class="column6">${header.date}</p>
        </div>
        <div class="detail">
          <p>Online Channel: </p>
          <p class="column2 column2-a1">${header.store}</p>

        </div>
        <div class="detail">
          <p>Company Name: </p>
          <p class="column2 column2-b">${header.companyName}</p>
    
        </div>
        <div class="detail">
          <p>Address: </p>
          <p class="column2 column2-c">${header.address}</p>
        </div>
        <div class="detail">
          <p>Contact Person Name:</p>
          <p class="column2 column2-d">${header.contractPersonName?header.contractPersonName:'-'}</p>

        </div>
        ${emailSection}
        <div class="detail">
          <p>Category:</p>
          <p class="column2 column2-f">${header.category?header.category:'-'}</p>
    
        </div>
      </div>`
      }
        return `   <div class="reportDetail">
        <div class="detail">
          <p>Reference Number: </p>
          <p class="column2 column2-a">${header.referenceNumber}</p>
          <p class="column5">Date: </p>
          <p class="column6">${header.date}</p>
        </div>
        <div class="detail">
          <p>Company Name: </p>
          <p class="column2 column2-b">${header.companyName}</p>
    
        </div>
        <div class="detail">
          <p>Address: </p>
          <p class="column2 column2-c">${header.address}</p>
        </div>
        <div class="detail">
          <p>Contact Person Name:</p>
          <p class="column2 column2-d">${header.contractPersonName?header.contractPersonName:'-'}</p>

        </div>
        ${emailSection}
        <div class="detail">
          <p>Category:</p>
          <p class="column2 column2-f">${header.category?header.category:'-'}</p>
    
        </div>
      </div>`
    }
    private   getHeader(): string {
        const image = logoImage

        return `    <div class="cardHeader" >
        <div class="row">
          <div class="inline">
            <img class="logo" src="${image}" alt="HTML5 Icon" width="50px" height="50px">
    
          </div>
          <div class="inline headerDetail">
            <p class="companyName">Boots Retail Thailand</p>
            <p class="reportName">Contract Agreement <span class="conditial">(Confidential)</span> </p>
         
          </div>
    
    
    
        </div>
    
      </div>`
    }
   private addRemarkPage() {
        return RemarkTemplate
    }
   private closeTagHtml():string {
    return `    </html>`
      
    }
    private closeTagBody():string {
      return `      </body>`
    }
    private openTagBody():string {
        return `    <body>`
    }
    private addStyle():string {
        return CssTemplate
    }
    private openTagHtml():string {
        return `<html>
        <head>`
    }
}