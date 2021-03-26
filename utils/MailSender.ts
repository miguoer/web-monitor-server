import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

class MailSender {
  private mailTransport = nodemailer.createTransport({
    host: "smtp.qq.com",
    secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
    secure: true,
    port: 465,
    auth: {
      user: "1195291051@qq.com",
      pass: "opakztfkcbrihhgh",
    },
  } as SMTPTransport.Options);

  sendMail(content: string): void {
    console.log("发送邮件" + content);
    var options = {
      from: '"黄琳" <1195291051@qq.com>',
      to: '"黄琳" <1195291051@qq.com>',
      subject: "Web监控系统提醒",
      text: "一封来自Node Mailer的邮件",
      html: content,
    };

    this.mailTransport.sendMail(options, function (err, msg) {
      if (err) {
        console.log(err);
      } else {
        console.log(msg);
      }
    });
  }
}

export default MailSender;
