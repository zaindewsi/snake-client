const {
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  MOVE_UP_ARROW,
  MOVE_DOWN_ARROW,
  MOVE_LEFT_ARROW,
  MOVE_RIGHT_ARROW,
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
    if (data === MOVE_UP || data === MOVE_UP_ARROW) {
      connection.write("Move: up");
    } else if (data === MOVE_LEFT || data === MOVE_LEFT_ARROW) {
      connection.write("Move: left");
    } else if (data === MOVE_DOWN || data === MOVE_DOWN_ARROW) {
      connection.write("Move: down");
    } else if (data === MOVE_RIGHT || data === MOVE_RIGHT_ARROW) {
      connection.write("Move: right");
    } else {
      connection.write(`Say: ${MESSAGES[data]}`);
    }
  }
};

module.exports = { setupInput };
