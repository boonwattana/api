import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/core/authentications/jwt-auth.guard";
import { BaseController } from "src/core/shared/controller/base-controller";
import { CustomRequest } from "src/core/shared/models/request-model";
import { DropdownService } from "src/core/shared/services/dropdown.service";
import { SearchClassroomDto } from "../classroom/classroom.dto";
import { CreateYearTermDto, ExportPdfDto, ReportDto, SearchYearTermDto, UpdateYearTermDto } from "./report.dto";
import { ReportService } from "./report.service";

@ApiTags("report")

@Controller('report')
export class ReportController extends BaseController{
    constructor(private readonly reportService:ReportService,
      ){
      super()
    }
    @Get('classroom-dropdown')
    async classroomDropdown(@Body() dto: SearchClassroomDto) {
      try{      
        return this.success(await this.reportService.classroomDropdown(dto))
      }catch(e){
        return this.error(e)
      }
    }
    @Get('classroom-type-dropdown')
    async classroomTypeDropdown(@Body() dto: SearchClassroomDto) {
      try{      
        return this.success(await this.reportService.classroomTypeDropdown(dto))
      }catch(e){
        return this.error(e)
      }
    }
    @Get('year-term-dropdown')
    async yearTermDropdown(@Body() dto: SearchYearTermDto) {
      try{      
        return this.success(await this.reportService.yearTermDropdown(dto))
      }catch(e){
        return this.error(e)
      }
    }
    @Get('current-term')
    async currentTerm() {
      try{
        return this.success(await this.reportService.currentTerm())
      }catch(e){
        return this.error(e)
      }
    }
  // @Get('student-by-room')
  // async studentByroom() {
  //   try{
  //     return this.success(await this.reportService.studentByroom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('student-by-class')
  // async studentByclass() {
  //   try{
  //     return this.success(await this.reportService.studentByclass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('student-sumarize')
  // async studentSumarize() {
  //   try{
  //     return this.success(await this.reportService.studentSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('teacher-sumarize')
  // async teacherSumarize() {
  //   try{
  //     return this.success(await this.reportService.teacherSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('teacher-by-subject')
  // async teacherBySubject() {
  //   try{
  //     return this.success(await this.reportService.teacherBySubject())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('check-student-sumarize')
  // async checkStudentSumarize() {
  //   try{
  //     return this.success(await this.reportService.checkStudentSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }







  // @Get('report-eq-sumarize')
  // async getReportEqSumarize() {
  //   try{
  //     return this.success(await this.reportService.getReportEqSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-eq-by-room')
  // async getReportEqByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportEqByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-eq-by-class')
  // async getReportEqByClass() {
  //   try{
  //     return this.success(await this.reportService.getReportEqByClass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-eq-by-class-and-room')
  // async getReportEqByClassAndRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportEqByClassAndRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-mome-visit-sumarize')
  // async getReportHomvisitSumarize() {
  //   try{
  //     return this.success(await this.reportService.getReportHomvisitSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  @Post('download-report')
  async downloadReport(@Body() dto:ExportPdfDto,@Res() response) {

    try {
      const pdfFile = await this.reportService.downloadReport(dto);
      const fileName = 'test'
      response.writeHead(200, {
       'Content-Type': 'application/pdf',
       'Content-disposition': `attachment;filename=${fileName}.pdf`,
      });
      response.end(pdfFile);
    } catch (e){      
      console.log('error on controller : ',e);
      throw new BadRequestException('ไม่มีข้อมูล')
    }
  }
  // @Post('report-depression-sumarize')
  // async getReportDepressionSumarize(@Body() dto:ExportPdfDto,@Res() response) {

  //   try {
  //     const pdfFile = await this.reportService.getReportDepressionSumarize(dto);
  //     const fileName = 'test'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  // }
  // @Post('report-depression-by-class')
  // async getReportDepressionByClass(@Body() dto:ExportPdfDto,@Res() response) {
  //   try {
  //     const pdfFile = await this.reportService.getReportDepressionByClass(dto);
  //     const fileName = 'test'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  // }
  // @Post('report-depression-by-class-and-room')
  // async getReportDepressionByClassAndRoom(@Body() dto:ExportPdfDto,@Res() response) {
  //   try {
  //     const pdfFile = await this.reportService.getReportDepressionByClassAndRoom(dto);
  //     const fileName = 'test'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  // }
  // @Get('report-depression-by-room')
  // async getReportDepressionByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportDepressionByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-filter-sumarize')
  // async getReportStudentFilterSumarize() {
    
  //   try{
  //     return this.success(await this.reportService.getReportStudentFilterSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-filter-sumarize')
  // async exportPdf(@Res() response) {
  //   try {
  //     const pdfFile = await this.reportService.getReportStudentFilterSumarize();
  //     const fileName = 'test'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  // }
  // @Get('report-student-filter-bt-class')
  // async getReportStudentFilterByClass(@Res() response) {
  //   try {
  //     const pdfFile = await this.reportService.getReportStudentFilterByClass();
  //     const fileName = 'report'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }

  // }
  // @Get('report-student-filter-by-class-and-room')
  // async getReportStudentFilterByClassAndRoom(@Res() response) {
  //   try {
  //     const pdfFile = await this.reportService.getReportStudentFilterByClassAndRoom();
  //     const fileName = 'report'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  // }
  // @Post('report-student-filter-by-room')
  // async getReportStudentFilterByRoom(@Body() dto:ReportDto,@Res() response) {
  //   try {
  //     console.log(dto);
      
  //     const pdfFile = await this.reportService.getReportStudentFilterByRoom(dto.yearTermId,dto.classroomId,dto.classroomTypeId);
  //     const fileName = 'report'
  //     response.writeHead(200, {
  //      'Content-Type': 'application/pdf',
  //      'Content-disposition': `attachment;filename=${fileName}.pdf`,
  //     });
  //     response.end(pdfFile);
  //   } catch (e){      
  //     console.log(e);
  //     throw new BadRequestException()
  //   }
  //   // try{
  //   //   return this.success(await this.reportService.getReportStudentFilterByRoom(dto.yearTermId,dto.classroomId,dto.classroomTypeId))
  //   // }catch(e){
  //   //   return this.error(e)
  //   // }
  // }
  // @Get('report-student-help-by-class')
  // async getReportStudentHelpByClass() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentHelpByClass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-help-by-room')
  // async getReportStudentHelpByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentHelpByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-help-by-class-and-room')
  // async getReportStudentHelpByClassAndRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentHelpByClassAndRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-scolar-by-class')
  // async getReportStudentScolarByClass() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentScolarByClass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-scolar-by-room')
  // async getReportStudentScolarByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentScolarByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-scolar-by-class-and-room')
  // async getReportStudentScolarByClassAndRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentScolarByClassAndRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-send-to-by-class')
  // async getReportStudentSendToByClass() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentSendToByClass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-send-to-by-room')
  // async getReportStudentSendToByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentSendToByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-send-to-by-class-and-room')
  // async getReportStudentSendToByClassAndRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentSendToByClassAndRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-student-send-to-sumarize')
  // async getReportStudentSendToSumarize() {
  //   try{
  //     return this.success(await this.reportService.getReportStudentSendToSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  
  // @Get('report-stress-sumarize')
  // async getReportStressSumarize() {
  //   try{
  //     return this.success(await this.reportService.getReportStressSumarize())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-stress-by-class')
  // async getReportStressByClass() {
  //   try{
  //     return this.success(await this.reportService.getReportStressByClass())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-stress-by-class-and-room')
  // async getReportStressByClassAndRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStressByClassAndRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }
  // @Get('report-stress-by-room')
  // async getReportStressByRoom() {
  //   try{
  //     return this.success(await this.reportService.getReportStressByRoom())
  //   }catch(e){
  //     return this.error(e)
  //   }
  // }



}
