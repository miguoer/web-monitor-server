/**
 * source map还原工具类
 */

import sourceMap from "source-map";
import { RuntimeError } from "../models/types";
const fs = require("fs");
const path = require("path");

export async function restore(
  error: RuntimeError,
  sourceFileUrl: string
): Promise<sourceMap.NullableMappedPosition> {
  // 解析sourceMap
  console.log("传进来的error inof", error);

  let consumer = await new sourceMap.SourceMapConsumer(
    fs.readFileSync(sourceFileUrl, "utf8")
  ); // 返回一个promise对象
  let result = consumer.originalPositionFor({
    line: error.lineno, // 压缩后的行号
    column: error.colno, // 压缩后的列号
  });
  console.log(result);
  return result;
}
