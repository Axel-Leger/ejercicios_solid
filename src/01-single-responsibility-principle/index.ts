import { Reporte } from "./clases/Report";
import { ReportPrinter } from "./clases/ReportPrinter";
import { ReportSaver } from "./clases/ReportSaver";

export function runSRP() {
  const miReporte = new Reporte("reporte 1 ", "resuemn de parcial");

  new ReportPrinter().print(miReporte);
  new ReportSaver().save(miReporte);
  console.log("-------------")
}