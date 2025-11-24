// Punto de entrada general para correr todas las demos.
import { runSRP } from "./01-single-responsibility-principle"
import { RunOCP } from './02-open-closed-principle/index.js'
import RunLSP from './03-liskov-substitution-principle/index.js'
import RunISP from './04-interface-segregation-principle/index.js'
import RunDIP from './05-dependency-inversion-principle/index.js'

runSRP();
RunOCP();
RunLSP();
RunISP();
RunDIP();