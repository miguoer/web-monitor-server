import { extend } from "lodash";
import { join } from "path";

let config = {
  viewDir: join(__dirname, "..", "views"),
  staticDir: join(__dirname, "..", "assets"),
  port: 8000,
};
if (process.env.BUILD_ENV === "development") {
  let localConfig = {
    port: process.env.PORT,
  };
  config = extend(config, localConfig);
}
if (process.env.BUILD_ENV === "production") {
  let prodConfig = {
    port: process.env.PORT,
    memoryFlag: "memory",
  };
  config = extend(config, prodConfig);
}

export default config;
