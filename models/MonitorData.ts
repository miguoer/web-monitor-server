export default class MonitorData {
  constructor(type: string, content: string) {
    this.type = type;
    this.content = content;
  }

  type: string;
  content: string;
}
