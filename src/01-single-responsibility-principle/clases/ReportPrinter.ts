import { IReport } from "../interfaces/IReport";

export class ReportPrinter {
  print(report: IReport) {
    console.log(`imprimiendo reporte ${report.title}`);
  }
}