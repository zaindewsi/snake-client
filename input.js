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
  connection.setEncoding("utf8");
  if (data === "\u0003") {
    process.exit();
  } else {
    if (data === MOVE_UP || data === "\u001B\u005B\u0041") {
      connection.write("Move: up");
    } else if (data === MOVE_LEFT || data === "\u001B\u005B\u0044") {
      connection.write("Move: left");
    } else if (data === MOVE_DOWN || data === "\u001B\u005B\u0042") {
      connection.write("Move: down");
    } else if (data === MOVE_RIGHT || data === "\u001B\u005B\u0043") {
      connection.write("Move: right");
    } else {
      connection.write(`Say: ${MESSAGES[data]}`);
    }
  }
};

module.exports = { setupInput };
