const core = require("@actions/core");
const { parse } = require("shell-quote");
const { createOutputInterceptor } = require("output-interceptor");

function run() {
  // Parse inputs.
  const args = core.getInput("args");
  if (typeof args !== "string") {
    throw new Error("args must be a string.");
  }

  // Capture process stdout.
  createOutputInterceptor({
    interceptStdout: true,
    interceptStderr: false,
  }).then((stdout) => {
    core.setOutput("stdout", stdout);
  });

  // Dispatch prettier CLI.
  process.argv = [process.argv[0], process.argv[1], ...parse(args)];
  require("prettier/bin-prettier");
}

try {
  run();
} catch (err) {
  core.setFailed(err.message);
}
