import server from "./server.js";
import { logger } from "./util.js";
import config from "./config.js";

console.log(config);
server
  .listen(config.port)
  .on("listening", () => logger.info(`server running at ${config.port}!`));
