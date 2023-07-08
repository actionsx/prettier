const core = require("@actions/core");
const { parse } = require("shell-quote");
// bin/prettier can't be used, because ncc can't resolve dependencies
import { run as runPrettier } from "prettier/internal/cli.mjs";

function run() {
  const args = core.getInput("args");
  if (typeof args !== "string") {
    throw new Error("args must be a string.");
  }

  runPrettier(parse(args));
}

try {
  run();
} catch (err) {
  core.setFailed(err.message);
}
