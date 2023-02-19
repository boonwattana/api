import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExportPdfService } from "./export-pdf.service";

@Module({
    imports: [],
    controllers: [],
    providers: [ExportPdfService],
    exports: [ExportPdfService],
  })
  export class ExportPdfModule {}