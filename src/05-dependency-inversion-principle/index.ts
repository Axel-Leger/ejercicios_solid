import { App } from "./clases/App"
import { MySQLDataBase } from "./clases/MySQLDatabase"
import { PostgresSQLDatabase } from "./clases/PostgreSQLDatabase";

const RunDIP = () => {

  console.log("Principio DIP");

  const MySql = new MySQLDataBase();

  const postgreSql = new PostgresSQLDatabase();

  const app1 = new App(MySql);
  const app2 = new App(postgreSql);

  app1.start();
  app2.start();

}

export default RunDIP;