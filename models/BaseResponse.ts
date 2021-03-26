export default class BaseResponse<T> {
  private code?: number;

  private msg?: string;

  private content?: T;

  constructor(code: number, msg: string, content: T) {
    this.code = code;
    this.msg = msg;
    this.content = content;
  }
}
