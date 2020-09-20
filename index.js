const core = require("@actions/core");
const { parse } = require("shell-quote");

function run() {
  const args = core.getInput("args");
  if (typeof args !== "string") {
    throw new Error("args must be a string.");
  }

  process.argv = [process.argv[0], process.argv[1], ...parse(args)];
  require("prettier/bin-prettier");
}

try {
  run();
} catch (err) {
  core.setFailed(err.message);
}
