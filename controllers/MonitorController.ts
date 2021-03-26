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
    const requestBody = JSON.stringify(ctx.request.body);
    if (requestBody !== "{}") {
      result = this.monitorService.sendMail(requestBody);
    } else {
      result = this.monitorService.sendMail(JSON.stringify(ctx.query.body));
    }
    ctx.body = resultSuccess(result);
  }
}
