import { SimplePrinter } from "./clases/SimplePrinter"
import { MultiFunctionPrinter } from './clases/MultiFunctionPrinter';

const RunISP = () => {

  console.log("Principio ISP");

  const simplePrinter = new SimplePrinter();
  const multiFunctionPrinter = new MultiFunctionPrinter();

  simplePrinter.print();

  multiFunctionPrinter.fax();
  multiFunctionPrinter.print();
  multiFunctionPrinter.scan();

  console.log("-------------")
}

export default RunISP;