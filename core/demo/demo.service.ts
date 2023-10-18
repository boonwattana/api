import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/api/student/student.entity';
import { Teacher } from 'src/api/teacher/teacher.entity';
import { CustomRequest } from 'src/core/shared/models/request-model';
import { SearchResult, SelectItems } from 'src/core/shared/models/search-param-model';
import { BaseService } from 'src/core/shared/services/base.service';
import { DropdownService } from 'src/core/shared/services/dropdown.service';
import { Repository,Not } from 'typeorm';
import { ImagesService } from '../images/images.service';
import { savefileWithName } from '../shared/services/files.service';
import { filename } from '../shared/utils/image.util';
import { CreateDemoDto, DashboardDto, DemoDto, SearchDemoDto, UpdateDemoDto } from './demo.dto';
import { Demo, VwbStudentByClass, VwbStudentByGendar, VwbTeacherByGendar, VwDemoDropdown, VwDemoItem, VwDemoList } from './demo.entity';

@Injectable()
export class DemoService extends BaseService {
   async dashboard(): Promise<DashboardDto> {
      const studentCount = await this.studentRepository.count({where:{status:Not(2)}})
      const teacherCount = await this.teacherRepository.count()
      const studentByClass = await this.vwbStudentByClassRepository.find()
      const studentByGendar = await this.vwbStudentByGendarRepository.find()
      const teacherByGendar = await this.vwbTeacherByGendarRepository.find()
      const model:DashboardDto = {
        studentByClass:studentByClass.map(m=>{return{name:m.typeName,count:m.count}}),
        studentByGendar:studentByGendar.map(m=>{return{name:m.gendarName,count:m.count}}),
        teacherByGendar:teacherByGendar.map(m=>{return{name:m.gendarName,count:m.count}}),
        studentCount:studentCount,
        teacherCount:teacherCount,
        dataDate:this.getCurrentDateLabel()
      }
      return model
    }
    getCurrentDateLabel(): string {
        const MOUNTH_LABEL = [
        `มกราคม`,
        `กุมภาพันธ์`,
        `มีนาคม`,
        `เมษายน`,
        `พฤษภาคม`,
        `มิถุนายน`,
        `กรกฎาคม`,
        `สิงหาคม`,
        `กันยายน`,
        `ตุลาคม`,
        `พฤศจิกายน`,
        `ธันวาคม`]
        const date = new Date()
        return `(ข้อมูล ณ วันที่ ${date.getDate()} ${MOUNTH_LABEL[date.getMonth()]} ${date.getFullYear()+543})`
    }

    constructor(
        @InjectRepository(Demo)
        private readonly demoRepository: Repository<Demo>,
        @InjectRepository(VwDemoList)
        private readonly vwDemoRepository: Repository<VwDemoList>,
        @InjectRepository(VwDemoItem)
        private readonly itemRepository:Repository<VwDemoItem>,
        @InjectRepository(VwDemoDropdown)
        private readonly vwDropdownDemoRepository:Repository<VwDemoDropdown>,
        @InjectRepository(VwbStudentByClass)
        private readonly vwbStudentByClassRepository:Repository<VwbStudentByClass>,
        @InjectRepository(VwbStudentByGendar)
        private readonly vwbStudentByGendarRepository:Repository<VwbStudentByGendar>,
        @InjectRepository(VwbTeacherByGendar)
        private readonly vwbTeacherByGendarRepository:Repository<VwbTeacherByGendar>,
        @InjectRepository(Teacher)
        private readonly teacherRepository:Repository<Teacher>,
        @InjectRepository(Student)
        private readonly studentRepository:Repository<Student>,
        private readonly dropdownService: DropdownService,
        private readonly imagesService:ImagesService
        ){
        super()
    }
    async demoDropdown(dto: SearchDemoDto):Promise<SelectItems[]> {
        return this.dropdownService.demoDropdown(dto,this.vwDropdownDemoRepository);
      }
    async list(dto:SearchDemoDto):Promise<SearchResult<VwDemoList>>{
        const builder = this.createQueryBuider<VwDemoList>(dto,this.vwDemoRepository)
        const [data, count] = await builder
        .getManyAndCount();
        return this.toSearchResult<VwDemoList>(dto.paginator,count,data);
    }
    async create(dto:CreateDemoDto,req:CustomRequest):Promise<Demo>{        
        const moduleName = 'images'
        const en = this.toCreateModel(dto,req) as Demo  
        const result = await this.demoRepository.save(
            this.demoRepository.create(en)
        );
        for (const imageBase64 of dto.demoImages) {            
            const fileName = filename()
             await savefileWithName(imageBase64,fileName,moduleName)
           await  this.imagesService.create({
                imageUrl:fileName,
                refId:result.id,
                refType:0,
                imageType:0
            },req)
        }
        return result
    }
    async update(id:number,dto:UpdateDemoDto,req:CustomRequest):Promise<DemoDto>{
        const m = await this.demoRepository.find({where:{id:id}})
        return this.demoRepository.save(
            this.toUpdateModel(m,dto,req)
        );
    }
    async delete(id:number,req:CustomRequest):Promise<DemoDto>{
        let m = await this.demoRepository.findOne({where:{id:id}})
        return this.demoRepository.softRemove(
            await this.demoRepository.save(
                this.toDeleteModel(m,req)
            )
        )
    }
    async item(id:number):Promise<any>{
        return this.itemRepository.findOne({where:{id:id}})
    }
}
