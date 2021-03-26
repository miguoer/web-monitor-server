import {
  interfaces,
  controller,
  httpGet,
  TYPE,
  httpPost,
} from "inversify-koa-utils";
import TAGS from "../constants/tags";
import { provideThrowable } from "../ioc/index";
import { inject } from "inversify";
import { IMonitor } from "../interfaces/IMonitor";
import { IRouterContext, RouterContext } from "koa-router";
import { resultSuccess } from "../utils/ResponseUtil";
import MonitorData from "models/MonitorData";

@provideThrowable(TYPE.Controller, "MonitorController")
@controller("/monitor")
export default class MonitorController implements interfaces.Controller {
  private monitorService: IMonitor;
  constructor(@inject(TAGS.MonitorService) monitorService: IMonitor) {
    this.monitorService = monitorService;
  }

  @httpGet("/data-upload")
  @httpPost("/data-upload")
  private monitorDataUploaded(
    ctx: IRouterContext,
    next: () => Promise<unknown>
  ): void {
    console.log(ctx.request.body);
    console.log(ctx.query.body);
    var result = "";
    var requestBody = JSON.stringify(ctx.request.body);
    if (requestBody !== "{}") {
      result = this.monitorService.handleDataUpload(
        ctx.request.body as MonitorData
      );
    } else {
      var queryBody = JSON.parse(ctx.query.body) as MonitorData;
      result = this.monitorService.handleDataUpload(queryBody);
    }
    ctx.body = resultSuccess(result);
  }
}
