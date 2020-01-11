process.on("beforeExit", code => {
  console.log("beforeExit | code:", code);
  console.log("the process goin to end");
});

process.on("exit", code => {
  console.log("beforeExit | code:", code);
  console.log("the process end");
});

process.on("uncaughtException", (err, origin) => {
  console.log("ERROR: on try and catch error");
});

process.on("unhandledRejection", reason => {
  console.log("on promise error");
});

no();

console.log("after call no() function");
