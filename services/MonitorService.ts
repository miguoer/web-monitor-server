import { provide } from "inversify-binding-decorators";
import TAGS from "../constants/tags";
import { IMonitor } from "interfaces/IMonitor";
import MailSender from "../utils/MailSender";
import MonitorData from "../models/MonitorData";
import { ReportMsgType, RuntimeError } from "../models/types";
import { restore } from "../utils/SourceMap";
import fs from "fs";
import path from "path";

const mailSender = new MailSender();
console.log("新建mailSender");

@provide(TAGS.MonitorService)
export class MonitorService implements IMonitor {
  handleDataUpload(data: MonitorData): string {
    switch (data.type) {
      case ReportMsgType.WINDOW_RUNTIME_ERROR:
        //需要做错误回溯
        var error = JSON.parse(data.content) as RuntimeError;
        let url = error.source;
        if (url) {
          // 获取到对应的map文件路径
          let fileUrl = `${url.substring(url.lastIndexOf("/") + 1).trim()}.map`;
          restore(error, path.resolve("./sourcemaps/" + fileUrl)).then(
            (result) => {
              const content = {
                type: data.type,
                content: JSON.stringify(result),
                message: error.message,
              };
              mailSender.sendMail(JSON.stringify(content));
            }
          );
        }

        break;
      case ReportMsgType.PROMISE_ERROR:
        // 前端有未捕获的promise错误
        mailSender.sendMail(JSON.stringify(data));

        break;
      case ReportMsgType.RESOURCE_ERROR:
        mailSender.sendMail(JSON.stringify(data));
        // 前端有资源加载失败
        break;
      case ReportMsgType.PERFORMANCE_TIMING:
        // 接收到performance timing数据
        break;
      case ReportMsgType.PERFORMANCE_VITALS:
        // 接收到web-vitals数据，LCP FIB等
        break;
      default:
        break;
    }
    return "处理完成";
  }

  sendMail(content: string): string {
    mailSender.sendMail(content);
    return "发送完成";
  }
}
