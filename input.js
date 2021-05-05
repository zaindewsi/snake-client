const { MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (data) => {
  if (data === MOVE_UP) {
    connection.write("Move: up");
  }
  if (data === MOVE_LEFT) {
    connection.write("Move: left");
  }
  if (data === MOVE_DOWN) {
    connection.write("Move: down");
  }
  if (data === MOVE_RIGHT) {
    connection.write("Move: right");
  }

  if (data === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
