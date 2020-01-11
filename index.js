const { exec, spawn } = require("child_process");

exec("ls -ls", (err, stdout) => {
  console.log("\nExec example:\n");

  if (err) {
    console.log(err);
    return false;
  }
  console.log(stdout);
});

let process = spawn("ls", ["-la"]);
process.stdout.on("data", data => console.log(data.toString()));
process.on("exit", () =>
  console.log("process end; process.killed:", process.killed)
);
