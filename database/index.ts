import "reflect-metadata";
import { createConnection, createConnections, Connection } from "typeorm";

// createConnection将从ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml 文件或特殊环境变量中加载连接选项
createConnection()
  .then(async (connection) => {
    console.log("database connected");
  })
  .catch((error) => console.log(error));
