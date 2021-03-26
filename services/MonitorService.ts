import { provide } from "inversify-binding-decorators";
import TAGS from "../constants/tags";
import { IMonitor } from "interfaces/IMonitor";
import MailSender from "../utils/MailSender";

const mailSender = new MailSender();
console.log("新建mailSender");

@provide(TAGS.MonitorService)
export class MonitorService implements IMonitor {
  sendMail(content: string): string {
    mailSender.sendMail(content);
    return "发送完成";
  }
}
