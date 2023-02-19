import { SARABAN } from "./libs/assert/font-data"
import { logoImage } from "./libs/assert/image-data"

export const CssTemplate = ` <style>
.cardHeader{
  margin-left: 10mm;
  margin-right: 10mm;
  width: 190mm;
  height: 30mm;
  border-bottom: 2px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: rgb(26, 26, 26);
  border-style: solid;

}
.a4{
  width: 210mm;
  height: 300mm;
}
.logo{
  width: 18mm;
  height: 18mm;
}

.row{


  display: flex;
}

.companyName{
  padding-top: 5mm;
  text-align:right;
  margin-top: 0mm;
  margin-bottom: 0mm;
  
}
.reportName{
  text-align: right;
  padding-top: 0mm;
  margin-top: 0mm;
  
}
.inline{
  padding-top: 8mm;
}
.headerDetail{
  margin-right: 3mm;
 margin-left: auto;
}
.conditial{
color: red;

}
p {

  margin-block-start: 0px;
  margin-block-end: 0px;
  font-family: "Arial";

}
pre{
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-family: "Arial";
}
.detail{
  
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  display: flex;
}
.reportDetail{
  margin-top: 4mm;
  margin-left: 12mm;
  margin-right: 12mm;
  width: 186mm;

}
.column2{
  max-width: 150mm;
}
.column2-a{
  margin-left: 48px;
}
.column2-a1{
  margin-left: 45px;
}
.column2-b{
  margin-left: 64px;
}
.column2-c{
  margin-left: 110px;
}
.column2-d{
  margin-left: 30px;
}
.column2-e{
  margin-left: 97px;
}
.column2-f{
  margin-left: 105px;
}

.column3{
  position: absolute;
  margin-left: 90mm;
}
.column4{
  position: absolute;
  margin-left: 100mm;
}
.column5{
  position: absolute;
  margin-left: 135mm;
}
.column6{
  position: absolute;
  margin-left: 165mm;
}
.tableTitle{
  font-size: 11px;
  font-weight: 900;
}
.tableRow{
  text-align: center;
  display: flex;

}
.tableList{
  position: absolute;
  margin-top: 15px;
  margin-left: 12mm;
  margin-right: 12mm;
  width: 186mm;
}
.tableColumn{
  font-size: 16px;
  border: 1px;
  border-style: solid;
  margin-left: -1px;
  padding-bottom: 2px;
}
.tablBody{
  margin-top: -1px;
}
.header{
  font-weight: 900;
}
.box1{
  
  width: 140mm;
}
.box2{
  width: 20mm;
}
.box3{
  width: 20mm;
}
.box4{
  width: 20mm;
}
.box5{
  width: 40mm;
}
.box6{
  width: 40mm;
}
.left{
  padding-left: 2px;
  text-align: left;
}
.right{
  padding-right: 2px;
  text-align: right;
}
.center{
  padding-left: 2px;
}
.empty{
  border: 0px;
}
.footer{
  margin-left: 7px;
}
.tableFooter{
  margin-top: -1px;
  font-weight: 900;
}
.sigenature{
  position: absolute;
  margin-top: 150mm;
  margin-left: 12mm;
  margin-right: 12mm;
  width: 186mm;
  display: flex;
}
.sigenature2{
  position:absolute;
  margin-top: 185mm;
  margin-left: 12mm;
  margin-right: 12mm;
  width: 186mm;
  display: flex;
}

.sign{
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
}
.signName{
  height: 18px;
  text-align: center;
  width: 59mm;
  border-bottom: 1px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-style: solid;

}
.signNameDesc{
  text-align: center;  
  width: 60mm;
}
.signNameDetail{
  margin-top: 5px;
  text-align: center;  
  width: 60mm;
}
.remark{
  margin-top: 25px;
  margin-left: 12mm;
  margin-right: 12mm;
  width: 186mm;
  font-size: 11px;
}
.paragrap{
  margin-top: 10px;
  margin-left: 25px;
  display: flex;
}
.paragraphDetail{
  margin-left: 5px;
}
.paragrap{
font-family: "Tahoma";
}
.paragrap-remark{
  font-family: "Tahoma";
}
.paragraphHeader{
  font-family: "Tahoma";
  }
@font-face { 
font-family: "Arial";
font-style: normal;
src: url(${SARABAN});
}

@font-face { 
font-family: "Tahoma";
font-style: normal;
src: url(${SARABAN});
}
</style>
</head>
`
export const RemarkTemplate =`
<div class="a4">
  <div class="cardHeader" >
    <div class="row">
      <div class="inline">
        <img class="logo" src="${logoImage}" alt="HTML5 Icon" width="10px" height="50px">

      </div>
      <div class="inline headerDetail">
        <p class="companyName">โรงเรียนบุญวัฒนา</p>
        <p class="reportName">BOONWATTANA SCHOOL </p>
     
      </div>



    </div>

  </div>

  <div class="reportDetail">
    <div class="detail">
      <p>รายงาน: </p>
      <p class="column2 column2-a">สรุปผลการคัดกรองนักเรียน</p>
      <p class="column5">ปีการศึกษา: </p>
      <p class="column6">2565</p>
    </div>
    <div class="detail">
      <p>ระดับชั้น: </p>
      <p class="column2 column2-a1">ม.6</p>
      <p class="column5">ภาคเรียน: </p>
      <p class="column6">2</p>
    </div>
   
  </div>
  <div class="tableList" >
    <div class="tableRow header">
      <div class="tableColumn center box1"><p>ห้อง</p> </div>
      <div class="tableColumn center box2"><p>ปกติ</p></div>
      <div class="tableColumn center box3"><p>เสี่ยง</p></div>
      <div class="tableColumn center box4"><p>มีปัญหา</p></div>
  

    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>1 ด้านการเรียน</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>2 สุขภาพร่างกาย</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>3 จิตใจและพฤติกรรม</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>4 พฤติกรรมทางเพศ</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>5 พฤติกรรมการใช้สารเสพติด	</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>6 พฤติกรรมติดเกมส์</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>7 เศรษฐกิจ</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>8 สวัสดิภาพและความปลอดภัย	</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>9 มีความต้องการพิเศษ</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 left"><p>10 การใช้เครื่องมือสื่อสาร</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>
    <div class="tableRow tablBody">
      <div class="tableColumn box1 right"><p> สรุปผลการคัดกรอง</p> </div>
      <div class="tableColumn box2 right"><p>0</p></div>
      <div class="tableColumn box3 right"><p>0</p></div>
      <div class="tableColumn box4 right"><p>0</p></div>
    </div>

  </div>

  <div class="sigenature">
    <div class="sign" >
      <pre class=" signName">ลงชื่อ                                                               </pre>
      <pre class="signNameDesc">(                                                           )</pre>
      <p class="signNameDetail">ผู้คัดกรองนักเรียน</p>

    </div>
    <div class="sign" >
      <pre class=" signName">ลงชื่อ                                                               </pre>
      <pre class="signNameDesc">(                                                           )</pre>
      <p class="signNameDetail">ผู้คัดกรองนักเรียน</p>

    </div>
    <div class="sign" >
      <pre class=" signName">ลงชื่อ                                                               </pre>
      <pre class="signNameDesc">(                                                           )</pre>
      <p class="signNameDetail">หัวหน้าระดับชั้น</p>


    </div>
  </div>
  <div class="sigenature2">
    <div class="sign" >
      <pre class=" signName">ลงชื่อ                                                               </pre>
      <pre class="signNameDesc">(                                                           )</pre>
      <p class="signNameDetail">หัวหน้างานระบบดูแล</p>

    </div>
    <div class="sign" >
      <pre class=" signName">ลงชื่อ                                                               </pre>
      <pre class="signNameDesc">(                                                           )</pre>
      <p class="signNameDetail">รองผู้อำนวยการฝ่ายกิจการนักเรียน</p>

    </div>

  </div>
  
</div>
`
