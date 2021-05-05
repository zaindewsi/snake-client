const {
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MESSAGES,
} = require("./constants");

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
  if (data === "\u0003") {
    process.exit();
  } else {
    if (data === MOVE_UP) {
      connection.write("Move: up");
    } else if (data === MOVE_LEFT) {
      connection.write("Move: left");
    } else if (data === MOVE_DOWN) {
      connection.write("Move: down");
    } else if (data === MOVE_RIGHT) {
      connection.write("Move: right");
    } else {
      connection.write(`Say: ${MESSAGES[data]}`);
    }
  }
};

module.exports = { setupInput };
