import { IReport } from "../interfaces/IReport";

export class ReportSaver {
  save(report: IReport) {
    console.log(`Guardando reporte en archivo: ${report.title}`);
  }
}