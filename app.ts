import "reflect-metadata";
import "./ioc/loader";
import { InversifyKoaServer } from "inversify-koa-utils";
import { Container } from "inversify";
import { buildProviderModule } from "inversify-binding-decorators";
import { configure, getLogger } from "log4js";
import config from "./config/index";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import WebMonitor from "./monitor/web-monitor";

configure({
  appenders: {
    cheese: { type: "file", filename: `${__dirname}/logs/web-monitor.log` },
  },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = getLogger("cheese");
const { port } = config;

const container = new Container();
container.load(buildProviderModule());
const server = new InversifyKoaServer(container);

const appInstances = server
  .setConfig((app) => {
    // 设置text，用来支持sendBeacon请求

    app.use(bodyParser({ enableTypes: ["json", "text"] }));

    // 处理跨域
    app.use(cors());
  })
  .build()
  .listen(port, () => {
    console.log("🍺服务启动成功----> port:", port);
  });

new WebMonitor({
  logUrl: "http://localhost:8000/monitor/data-upload",
});
