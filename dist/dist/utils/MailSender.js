"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var MailSender = /** @class */ (function () {
    function MailSender() {
        this.mailTransport = nodemailer_1.default.createTransport({
            host: "smtp.qq.com",
            secureConnection: true,
            secure: true,
            port: 465,
            auth: {
                user: "1195291051@qq.com",
                pass: "opakztfkcbrihhgh",
            },
        });
    }
    MailSender.prototype.sendMail = function (content) {
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
            }
            else {
                console.log(msg);
            }
        });
    };
    return MailSender;
}());
exports.default = MailSender;
