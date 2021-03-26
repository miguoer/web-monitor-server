// 上报消息类型:
export enum ReportMsgType {
  NORMAL = "NORMAL",
  PROMISE_ERROR = "PROMISE_ERROR",
  WINDOW_RUNTIME_ERROR = "WINDOW_RUNTIME_ERROR",
  RESOURCE_ERROR = "RESOURCE_ERROR",
  PERFORMANCE_TIMING = "PERFORMANCE_TIMING",
  PERFORMANCE_VITALS = "PERFORMANCE_VITALS",
}

export enum ErrorType {
  NORMAL = "NORMAL",
  PROMISE_ERROR = "PROMISE_ERROR",
  WINDOW_RUNTIME_ERROR = "WINDOW_RUNTIME_ERROR",
  RESOURCE_ERROR = "RESOURCE_ERROR",
}

export interface RuntimeError {
  source: string;
  lineno: number;
  colno: number;
  error: Error;
  message: string;
}
