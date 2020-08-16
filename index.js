const core = require("@actions/core");
const exec = require("@actions/exec");
exec.exec(`node dist/prettier/index.js ${core.getInput("args")}`);
