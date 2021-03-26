import BaseResponse from "../models/BaseResponse";

export function resultSuccess<T = any>(content: T, { msg = "success" } = {}) {
  return new BaseResponse<T>(200, msg, content);
}

export function resultError<T = any>(
  code: number = 1000,
  msg: string = "error",
  content: T
) {
  return new BaseResponse<T>(code, msg, content);
}

export function pagination<T = any>(
  pageNo: number,
  pageSize: number,
  array: T[]
): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}

export function param2Obj(url: string): any {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}
