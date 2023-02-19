import { BasicData } from "src/core/shared/entities/basic-data";
import { Column, Connection, Entity, PrimaryGeneratedColumn, ViewColumn, ViewEntity } from "typeorm";
import { EditField } from "src/api/edit-field/edit-field.entity";
import { Student } from "../student/student.entity";
import { Users } from "../../core/users/users.entity";

@Entity('edit_request')
export class EditRequest extends BasicData {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id?: number;

  @Column({nullable: true})
  editFieldId?: number;

  @Column({nullable: true})
  changeTo?: string;

  @Column({nullable: true})
  documentUrl?: string;

  @Column({nullable: true})
  editRequestStatus?: number;
  @Column({nullable: true})
  fileName?: string;
  @Column({nullable: true})
  requestId?: number;
  @Column({nullable: true})
  approveId?: number;
}
@ViewEntity({
    name:'edit_request_list',
    expression: (connection: Connection) => connection.createQueryBuilder()
        .select("edit_request.id", "id")
        .addSelect("edit_request.editFieldId", "editFieldId")
        .addSelect("edit_field_id.editFieldName", "editFieldValue")
        .addSelect("edit_request.changeTo", "changeTo")
        .addSelect("edit_request.editRequestStatus", "editRequestStatus")
        .addSelect("edit_request.requestId", "requestId")
        .addSelect("edit_request.approveId", "approveId")
        .addSelect("CONCAT(student.firstname , ' ' , student.lastname)", "requestValue")
        .from(EditRequest, "edit_request")
        .leftJoin(EditField, "edit_field_id","edit_field_id.Id = edit_request.editFieldId")
        .leftJoin(Users,'user','user.id = edit_request.requestId')
        .leftJoin(Student,'student','student.id = user.inforId')
})
export class VwEditRequestList {
    @ViewColumn()
    id: number;

    @ViewColumn()
    editFieldId: number;

    @ViewColumn()
    editFieldValue: string;

    @ViewColumn()
    changeTo: string;

    @ViewColumn()
    editRequestStatus: string;
    @ViewColumn()
    requestId: number;
    @ViewColumn()
    approveId: number;
    @ViewColumn()
    requestValue: string;
}

@ViewEntity({
  name:'edit_request_dropdown',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("edit_request.id", "value")
  .addSelect("edit_request.editFieldId", "label")
      .from(EditRequest, "edit_request")
})
export class VwEditRequestDropdown {

  @ViewColumn()
    value: number;

    @ViewColumn()
    label: string;
}
@ViewEntity({
  name:'edit_request_item',
  expression: (connection: Connection) => connection.createQueryBuilder()
  .select("edit_request.id", "id")
        .addSelect("edit_request.editFieldId", "editFieldId")
        .addSelect("edit_field_id.editFieldName", "editFieldValue")
        .addSelect("student.firstname , ' ' , student.lastname", "requestValue")

        .addSelect("edit_request.changeTo", "changeTo")
        .addSelect("edit_request.documentUrl", "documentUrl")
        .addSelect("edit_request.fileName", "fileName")
        .addSelect("edit_request.editRequestStatus", "editRequestStatus")
        .addSelect("edit_request.requestId", "requestId")
        .addSelect("edit_request.approveId", "approveId")
      .from(EditRequest, "edit_request")
        .leftJoin(EditField, "edit_field_id","edit_field_id.Id = edit_request.editFieldId")
        .leftJoin(Users,'user','user.id = edit_request.requestId')
        .leftJoin(Student,'student','student.id = user.inforId')
})
export class VwEditRequestItem {

  @ViewColumn()
    id: number;

    @ViewColumn()
    editFieldId: number;

    @ViewColumn()
    editFieldValue: string;

    @ViewColumn()
    changeTo: string;

    @ViewColumn()
    documentUrl: string;
    @ViewColumn()
    fileName: string;
    @ViewColumn()
    editRequestStatus: string;
    @ViewColumn()
    requestValue: string;
    
    @ViewColumn()
    requestId: number;
    @ViewColumn()
    approveId: number;
}
