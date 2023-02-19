import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { Teacher } from "src/api/teacher/teacher.entity";

@Entity('sar_quality_evidence')
export class SarQualityEvidence extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  teacherId?: number;

  @Column({nullable: true})
  refId?: string;

  @Column({nullable: true})
  schoolyear?: string;

  @Column({nullable: true})
  evidenceName?: string;

  @Column({nullable: true})
  evidenceType?: number;

  @Column({nullable: true})
  standard_type?: number;
}
@ViewEntity({
    name:'sar_quality_evidence_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("sar_quality_evidence.id", "id")
        .addSelect("sar_quality_evidence.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_quality_evidence.refId", "refId")
        .addSelect("sar_quality_evidence.schoolyear", "schoolyear")
        .addSelect("sar_quality_evidence.evidenceName", "evidenceName")
        .addSelect("sar_quality_evidence.evidenceType", "evidenceType")
        .addSelect("sar_quality_evidence.standard_type", "standard_type")
        .from(SarQualityEvidence, "sar_quality_evidence")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_quality_evidence.teacherId")
})
export class VwSarQualityEvidenceList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    evidenceName: string;

    @ViewColumn()
    evidenceType: number;
    
    @ViewColumn()
    standard_type: number;
}

@ViewEntity({
  name:'sar_quality_evidence_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_quality_evidence.id", "value")
// .addSelect("CONCAT(sar_quality_evidence.null , ' ' , sar_quality_evidence.null)", "label")
      .from(SarQualityEvidence, "sar_quality_evidence")
})
export class VwSarQualityEvidenceDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'sar_quality_evidence_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("sar_quality_evidence.id", "id")
        .addSelect("sar_quality_evidence.teacherId", "teacherId")
        .addSelect("CONCAT(teacher_id.firstname , ' ' , teacher_id.lastname)", "teacherValue")
        .addSelect("sar_quality_evidence.refId", "refId")
        .addSelect("sar_quality_evidence.schoolyear", "schoolyear")
        .addSelect("sar_quality_evidence.evidenceName", "evidenceName")
        .addSelect("sar_quality_evidence.evidenceType", "evidenceType")
        .addSelect("sar_quality_evidence.standard_type", "standard_type")
      .from(SarQualityEvidence, "sar_quality_evidence")
        .leftJoin(Teacher, "teacher_id","teacher_id.Id = sar_quality_evidence.teacherId")
})
export class VwSarQualityEvidenceItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    teacherId: number;

    @ViewColumn()
    teacherValue: string;

    @ViewColumn()
    refId: string;

    @ViewColumn()
    schoolyear: string;

    @ViewColumn()
    evidenceName: string;

    @ViewColumn()
    evidenceType: number;
       
    @ViewColumn()
    standard_type: number;
}
