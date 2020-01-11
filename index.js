const { exec } = require("child_process");

exec("ls -ls", (err, stdout) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log(stdout);
});
